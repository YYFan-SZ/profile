export const EXHIBITION_CHAPTERS = ["hero", "stack", "projects", "content", "experience", "contact"] as const;

const clamp = (value: number) => Math.min(1, Math.max(0, value));

// The camera travels continuously through each chapter. Both directions use the
// same continuous curve, including anchor navigation and changing page heights.
export function chapterAtScroll(scroll: number, anchors: readonly number[]): number {
  if (anchors.length < 2) return 0;
  let index = 0;
  while (index < anchors.length - 1 && scroll >= anchors[index + 1]) index++;
  if (index === anchors.length - 1) return index;
  const raw = clamp((scroll - anchors[index]) / Math.max(1, anchors[index + 1] - anchors[index]));
  const t = raw;
  return index + t * t * (3 - 2 * t);
}

// Legacy normalized chapter grouping; architecture stays in one shared world.
export function sceneAtChapter(chapter: number): number {
  if (chapter <= 1) return Math.max(0, chapter);
  if (chapter <= 2) return 1;
  return Math.min(3, chapter - 1);
}

export function sceneWeight(scene: number, index: number): number {
  return Math.max(0, 1 - Math.abs(scene - index));
}
