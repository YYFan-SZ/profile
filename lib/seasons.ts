// Three intentional visual themes for the portfolio. The old seasonal
// naming made the control feel decorative; these names describe the actual
// visual direction users are choosing.
export type SeasonId = "paper" | "ink";

export type SeasonPalette = {
  id: SeasonId;
  label: string;
  accent: string;
  keyboardBase: string;
  particle: string;
  particleHalo: string;
};

export const SEASONS: SeasonPalette[] = [
  {
    id: "paper",
    label: "Paper",
    accent: "#9c6683",
    keyboardBase: "#9b6a49",
    particle: "rgba(112, 83, 61, 0.32)",
    particleHalo: "rgba(178, 138, 85, 0.16)",
  },
  {
    id: "ink",
    label: "Ink",
    accent: "#c98eae",
    keyboardBase: "#76523c",
    particle: "rgba(255, 239, 211, 0.32)",
    particleHalo: "rgba(213, 154, 88, 0.16)",
  },
];

export const DEFAULT_SEASON: SeasonId = "paper";

export function getPalette(id: SeasonId): SeasonPalette {
  return SEASONS.find((s) => s.id === id) ?? SEASONS[0];
}
