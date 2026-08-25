// Three intentional visual themes for the portfolio. The old seasonal
// naming made the control feel decorative; these names describe the actual
// visual direction users are choosing.
export type SeasonId = "paper" | "ink" | "mono";

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
    accent: "#a95f48",
    keyboardBase: "#9b6a49",
    particle: "rgba(112, 83, 61, 0.32)",
    particleHalo: "rgba(178, 138, 85, 0.16)",
  },
  {
    id: "ink",
    label: "Ink",
    accent: "#d59a58",
    keyboardBase: "#76523c",
    particle: "rgba(255, 239, 211, 0.32)",
    particleHalo: "rgba(213, 154, 88, 0.16)",
  },
  {
    id: "mono",
    label: "Mono",
    accent: "#a95f48",
    keyboardBase: "#85867f",
    particle: "rgba(75, 76, 71, 0.22)",
    particleHalo: "rgba(169, 95, 72, 0.12)",
  },
];

export const DEFAULT_SEASON: SeasonId = "paper";

export function getPalette(id: SeasonId): SeasonPalette {
  return SEASONS.find((s) => s.id === id) ?? SEASONS[0];
}
