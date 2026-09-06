// Shared dimensions keep the gallery connected when the viewport changes.
export const portalRadius = (aspect: number) => Math.max(6, aspect * 8.55);

// The stair support meets the entrance's inner curve at gallery level.
export const portalGalleryJoin = (aspect: number) =>
  (portalRadius(aspect) - .65) * Math.sqrt(1 - Math.pow((6.72 - .55) / (12.3 - .45), 2));

