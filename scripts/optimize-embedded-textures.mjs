import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, extname, join, resolve } from "node:path";

const [, , inputArg, outputArg, qualityArg = "95", maxDimensionArg = "0"] = process.argv;

if (!inputArg || !outputArg) {
  console.error("Usage: node scripts/optimize-embedded-textures.mjs <input.glb> <output.glb> [quality] [maxDimension]");
  process.exit(1);
}

const inputPath = resolve(inputArg);
const outputPath = resolve(outputArg);
const quality = Math.max(1, Math.min(100, Number(qualityArg)));
const maxDimension = Math.max(0, Number(maxDimensionArg) || 0);
const source = readFileSync(inputPath);

if (source.readUInt32LE(0) !== 0x46546c67 || source.readUInt32LE(4) !== 2) {
  throw new Error(`不是有效的 GLB 2.0 文件：${inputPath}`);
}

let offset = 12;
let json = null;
let binary = null;

while (offset < source.length) {
  const chunkLength = source.readUInt32LE(offset);
  const chunkType = source.readUInt32LE(offset + 4);
  const chunk = source.subarray(offset + 8, offset + 8 + chunkLength);
  if (chunkType === 0x4e4f534a) json = JSON.parse(chunk.toString("utf8").trimEnd());
  if (chunkType === 0x004e4942) binary = Buffer.from(chunk);
  offset += 8 + chunkLength;
}

if (!json || !binary || !json.bufferViews || !json.images || !json.textures) {
  throw new Error(`GLB 缺少内嵌贴图所需的数据：${inputPath}`);
}

const referencedImages = new Set();
for (const texture of json.textures) {
  if (Number.isInteger(texture.source)) referencedImages.add(texture.source);
}

const tempRoot = mkdtempSync(join(tmpdir(), "room-textures-"));
const replacementByView = new Map();
const convertedImages = new Set();
let originalImageBytes = 0;
let optimizedImageBytes = 0;

try {
  for (let imageIndex = 0; imageIndex < json.images.length; imageIndex += 1) {
    const image = json.images[imageIndex];
    if (!referencedImages.has(imageIndex) || !Number.isInteger(image.bufferView)) continue;
    if (image.mimeType !== "image/jpeg" && image.mimeType !== "image/png") continue;

    const view = json.bufferViews[image.bufferView];
    const start = view.byteOffset || 0;
    const bytes = binary.subarray(start, start + view.byteLength);
    const inputExt = image.mimeType === "image/png" ? ".png" : ".jpg";
    const tempInput = join(tempRoot, `${imageIndex}${inputExt}`);
    const tempOutput = join(tempRoot, `${imageIndex}.webp`);
    writeFileSync(tempInput, bytes);

    const convertArgs = [tempInput];
    if (maxDimension > 0) convertArgs.push("-resize", `${maxDimension}x${maxDimension}>`);
    convertArgs.push(
      "-quality",
      String(quality),
      "-define",
      "webp:method=6",
      "-define",
      "webp:alpha-quality=100",
      tempOutput,
    );
    execFileSync("magick", convertArgs, { stdio: "ignore" });

    const optimized = readFileSync(tempOutput);
    originalImageBytes += bytes.length;

    if (optimized.length >= bytes.length) {
      optimizedImageBytes += bytes.length;
      continue;
    }

    replacementByView.set(image.bufferView, optimized);
    convertedImages.add(imageIndex);
    optimizedImageBytes += optimized.length;
    image.mimeType = "image/webp";
  }

  if (convertedImages.size > 0) {
    json.extensionsUsed ||= [];
    json.extensionsRequired ||= [];
    if (!json.extensionsUsed.includes("EXT_texture_webp")) json.extensionsUsed.push("EXT_texture_webp");
    if (!json.extensionsRequired.includes("EXT_texture_webp")) json.extensionsRequired.push("EXT_texture_webp");

    for (const texture of json.textures) {
      if (!convertedImages.has(texture.source)) continue;
      const sourceIndex = texture.source;
      texture.extensions ||= {};
      texture.extensions.EXT_texture_webp = { source: sourceIndex };
      delete texture.source;
    }
  }

  const replacements = [...replacementByView.entries()]
    .map(([viewIndex, bytes]) => {
      const view = json.bufferViews[viewIndex];
      const oldStart = view.byteOffset || 0;
      const oldStorageLength = Math.ceil(view.byteLength / 4) * 4;
      const newStorageLength = Math.ceil(bytes.length / 4) * 4;
      return {
        viewIndex,
        bytes,
        oldStart,
        oldEnd: oldStart + oldStorageLength,
        newStorageLength,
      };
    })
    .sort((a, b) => a.oldStart - b.oldStart);

  const parts = [];
  let binaryLength = 0;
  let oldCursor = 0;

  for (const replacement of replacements) {
    if (replacement.oldStart < oldCursor) {
      throw new Error("检测到重叠的贴图缓冲区，已停止生成以保护模型数据。");
    }
    const unchanged = binary.subarray(oldCursor, replacement.oldStart);
    parts.push(unchanged, replacement.bytes);
    binaryLength += unchanged.length + replacement.bytes.length;
    const padding = replacement.newStorageLength - replacement.bytes.length;
    if (padding) {
      parts.push(Buffer.alloc(padding));
      binaryLength += padding;
    }
    oldCursor = replacement.oldEnd;
  }

  const tail = binary.subarray(oldCursor);
  parts.push(tail);
  binaryLength += tail.length;

  function translateOffset(oldOffset) {
    let translated = oldOffset;
    for (const replacement of replacements) {
      if (oldOffset < replacement.oldEnd) break;
      translated += replacement.newStorageLength - (replacement.oldEnd - replacement.oldStart);
    }
    return translated;
  }

  for (let viewIndex = 0; viewIndex < json.bufferViews.length; viewIndex += 1) {
    const view = json.bufferViews[viewIndex];
    const oldOffset = view.byteOffset || 0;
    view.byteOffset = translateOffset(oldOffset);
    if (replacementByView.has(viewIndex)) view.byteLength = replacementByView.get(viewIndex).length;

    const meshopt = view.extensions?.EXT_meshopt_compression;
    if (meshopt && Number.isInteger(meshopt.byteOffset)) {
      meshopt.byteOffset = translateOffset(meshopt.byteOffset);
    }
  }

  const rebuiltBinary = Buffer.concat(parts, binaryLength);
  json.buffers[0].byteLength = rebuiltBinary.length;

  let jsonBytes = Buffer.from(JSON.stringify(json), "utf8");
  const jsonPadding = (4 - (jsonBytes.length % 4)) % 4;
  if (jsonPadding) jsonBytes = Buffer.concat([jsonBytes, Buffer.alloc(jsonPadding, 0x20)]);

  const totalLength = 12 + 8 + jsonBytes.length + 8 + rebuiltBinary.length;
  const header = Buffer.alloc(12);
  header.writeUInt32LE(0x46546c67, 0);
  header.writeUInt32LE(2, 4);
  header.writeUInt32LE(totalLength, 8);
  const jsonHeader = Buffer.alloc(8);
  jsonHeader.writeUInt32LE(jsonBytes.length, 0);
  jsonHeader.writeUInt32LE(0x4e4f534a, 4);
  const binaryHeader = Buffer.alloc(8);
  binaryHeader.writeUInt32LE(rebuiltBinary.length, 0);
  binaryHeader.writeUInt32LE(0x004e4942, 4);

  writeFileSync(outputPath, Buffer.concat([header, jsonHeader, jsonBytes, binaryHeader, rebuiltBinary]));

  const originalMiB = (source.length / 1024 / 1024).toFixed(2);
  const outputMiB = (totalLength / 1024 / 1024).toFixed(2);
  const imageSavingMiB = ((originalImageBytes - optimizedImageBytes) / 1024 / 1024).toFixed(2);
  console.log(`${basename(inputPath)}: ${originalMiB} MiB -> ${outputMiB} MiB`);
  const dimensionMessage = maxDimension > 0 ? `最大边限制 ${maxDimension}px` : "分辨率未调整";
  console.log(`转换贴图 ${convertedImages.size} 张，贴图减少 ${imageSavingMiB} MiB，${dimensionMessage}。`);
} finally {
  rmSync(tempRoot, { recursive: true, force: true });
}
