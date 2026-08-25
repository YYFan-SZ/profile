import {
  siCss,
  siDocker,
  siGit,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siOdoo,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
} from "simple-icons";

export type SkillIcon = {
  title: string;
  slug: string;
  path: string;
  hex: string;
};

// 3×5 grid — consumed by the 3D keyboard (one icon per keycap) and, on mobile,
// by the flat list below for the static skills grid that replaces the
// hover-driven keyboard interaction. Taglines live in the i18n dictionary
// under `keyboard.taglines.<slug>`.
export const SKILLS_GRID: readonly (readonly SkillIcon[])[] = [
  [siJavascript, siTypescript, siHtml5, siCss, siTailwindcss],
  [siPython, siReact, siNextdotjs, siVuedotjs, siNodedotjs],
  [siPhp, siOdoo, siPostgresql, siDocker, siGit],
] as const;

export const SKILLS_FLAT: readonly SkillIcon[] = SKILLS_GRID.flat();

// The piano is no longer a full technology-stack legend. It carries six
// practical directions from the original resume; the remaining keycaps stay
// blank so the instrument keeps breathing visually.
export const ABILITY_KEYS: readonly SkillIcon[] = [
  { ...siHtml5, title: "产品开发" },
  { ...siNodedotjs, title: "内容运营" },
  { ...siPython, title: "流程自动化" },
  { ...siCss, title: "视觉表达" },
  { ...siReact, title: "沟通协作" },
];
