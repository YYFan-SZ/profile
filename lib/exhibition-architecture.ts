// Shared dimensions keep the gallery connected when the viewport changes.
export const portalRadius = (aspect: number) => Math.max(6, aspect * 8.55);

export const heroCameraPosition = (aspect: number) => [0, 2.8, 20.5 + Math.max(0, 1.5-aspect)*7];
export const HERO_LOOK_AT = [0,3,-3];

// The stair support meets the entrance's inner curve at gallery level.
export const portalGalleryJoin = (aspect: number) =>
  (portalRadius(aspect) - .65) * Math.sqrt(1 - Math.pow((6.72 - .55) / (12.3 - .45), 2));

