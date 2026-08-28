import { rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

const outputDirectory = fileURLToPath(new URL("../public/room-engine", import.meta.url));
const sourceOnlyModelNames = [
  "zhengyifan-room.glb",
  "hanging-ball-pink.glb",
  "hanging-ball-red.glb",
  "hanging-ball-yellow.glb",
  "hanging-ball-blue.glb",
  "hanging-ball-green.glb",
  "meshy-ai-rosie.glb",
  "rosie-doll.glb",
  "tea-table-lamp.glb",
  "profile-card-holder.glb",
];

export default defineConfig({
  root: fileURLToPath(new URL(".", import.meta.url)),
  base: "/room-engine/",
  plugins: [
    {
      name: "exclude-source-room-models",
      async closeBundle() {
        await Promise.all([
          ...sourceOnlyModelNames.map((name) =>
            rm(join(outputDirectory, "models", name), { force: true }),
          ),
          // Keep the previously approved 58.87 MiB set in source control as a
          // fallback, but do not duplicate it in the deployed static output.
          rm(join(outputDirectory, "models-web"), { recursive: true, force: true }),
        ]);
      },
    },
  ],
  build: {
    outDir: outputDirectory,
    emptyOutDir: true,
  },
});
