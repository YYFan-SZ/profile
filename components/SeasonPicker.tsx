"use client";

import { useSeason } from "@/components/SeasonProvider";
import { useLanguage } from "@/components/LanguageProvider";
import { SEASONS, type SeasonId } from "@/lib/seasons";

const ICONS: Record<SeasonId, React.ReactNode> = {
  paper: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
      <path d="M6 3.5h9l3 3V20.5H6z" />
      <path d="M15 3.5v4h3M9 12h6M9 15.5h5" />
    </svg>
  ),
  ink: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
      <path d="M18.5 4.5a8.5 8.5 0 11-9 15A8.5 8.5 0 0018.5 4.5z" />
    </svg>
  ),
};

export default function SeasonPicker({ className = "" }: { className?: string }) {
  const { id, setSeason } = useSeason();
  const { t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1 p-1 rounded-full bg-ink-2/60 backdrop-blur-sm border border-ink-3 ${className}`}
      role="group"
      aria-label={t("picker.season")}
    >
      {SEASONS.map((theme) => {
        const active = theme.id === id;
        const label = t(`seasons.${theme.id}`);
        return (
          <button
            key={theme.id}
            type="button"
            onClick={() => setSeason(theme.id)}
            data-cursor="hover"
            aria-label={label}
            aria-pressed={active}
            title={label}
            className={`group relative w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
              active ? "text-background scale-110" : "text-ice-300 hover:text-ice-50"
            }`}
            style={
              active
                ? { background: theme.accent, boxShadow: `0 0 12px ${theme.accent}44` }
                : undefined
            }
          >
            {ICONS[theme.id]}
          </button>
        );
      })}
    </div>
  );
}
