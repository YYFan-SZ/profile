"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/components/LanguageProvider";

// Semicircular dots fixed to the right edge that highlight the current section
// using the same `data-kb-section` markers the 3D scene already observes.
// Click a dot → smooth scroll (Lenis is wrapping the document, so a regular
// scrollIntoView gets intercepted and animated by Lenis). Hidden on small
// screens to avoid crowding the keyboard.
export default function SectionNav() {
  const [active, setActive] = useState<string>("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang } = useLanguage();
  const lenis = useLenis();

  const SECTIONS = [
    { id: "hero", label: t("nav.home") },
    { id: "stack", label: t("nav.stack") },
    { id: "content", label: t("nav.content") },
    { id: "projects", label: t("nav.project") },
    { id: "experience", label: t("nav.experience") },
    { id: "weekly", label: lang === "en" ? "Weekly notes" : "周报" },
    { id: "contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const ids = [
      "hero",
      "stack",
      "content",
      "projects",
      "experience",
      "weekly",
      "contact",
    ];
    const els = ids.map((id) =>
      document.querySelector<HTMLElement>(`[data-kb-section="${id}"]`)
    );
    const obs = new IntersectionObserver(
      (entries) => {
        let best: { id: string; ratio: number } | null = null;
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.kbSection;
          if (!id) continue;
          const ratio = entry.intersectionRatio;
          if (!best || ratio > best.ratio) best = { id, ratio };
        }
        if (best && best.ratio > 0) setActive(best.id);
      },
      { threshold: [0.25, 0.5, 0.75] }
    );
    for (const el of els) if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const goTo = (id: string) => {
    setMenuOpen(false);
    const target = document.querySelector<HTMLElement>(
      `[data-kb-section="${id}"]`
    );
    if (!target) return;

    // Native smooth scrolling conflicts with the Lenis root scroller and can
    // leave the viewport at its old position. Use the active Lenis instance
    // so the section, keyboard and navigation state move together.
    if (lenis) {
      // Flex `order` differs from DOM order here, so Lenis' element offset
      // can land on the preceding chapter. Use its visual document position.
      const isMobile = window.matchMedia("(max-width: 1023px)").matches;
      const top = target.getBoundingClientRect().top + window.scrollY - (isMobile ? 72 : 0);
      lenis.scrollTo(Math.max(0, top), { duration: isMobile ? 0.65 : 1.4 });
    } else {
      target.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  return (<>
    <nav
      aria-label={t("nav.aria")}
      className="section-nav hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-auto"
    >
      {SECTIONS.map((s, index) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => goTo(s.id)}
            data-cursor="hover"
            className={`section-nav__item group ${isActive ? "is-active" : ""}`}
            style={{ "--section-nav-index": index } as CSSProperties}
            aria-label={s.label}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`text-[10px] uppercase tracking-[0.25em] text-ice-200 transition-all duration-300 ${
                isActive
                  ? "opacity-100 -translate-x-1"
                  : "opacity-0 translate-x-2 group-hover:opacity-80 group-hover:translate-x-0"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-2.5 h-2.5 bg-ice-100 shadow-[0_0_12px_rgba(234,242,251,0.6)]"
                  : "w-1.5 h-1.5 bg-ice-500/60 group-hover:bg-ice-200"
              }`}
            />
          </button>
        );
      })}
    </nav>
    <nav className="mobile-section-nav" aria-label={t("nav.aria")}>
      {menuOpen && <button type="button" className="mobile-section-nav__scrim" aria-label={lang === "en" ? "Close section menu" : "关闭章节目录"} onClick={() => setMenuOpen(false)} />}
      <div id="mobile-section-menu" className="mobile-section-nav__panel" hidden={!menuOpen}>
        <p>{lang === "en" ? "Explore the portfolio" : "浏览作品集"}</p>
        {SECTIONS.map((section, index) => <button
          key={section.id}
          type="button"
          onClick={() => goTo(section.id)}
          aria-current={active === section.id ? "location" : undefined}
        ><span>{String(index + 1).padStart(2, "0")}</span>{section.label}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></button>)}
      </div>
      <button
        className="mobile-section-nav__trigger"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-section-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d={menuOpen ? "M5 5l14 14M19 5 5 19" : "M4 7h16M4 12h16M4 17h16"} /></svg>
        <span>{menuOpen ? (lang === "en" ? "Close" : "关闭") : (SECTIONS.find((section) => section.id === active)?.label ?? t("nav.home"))}</span>
        <small>{lang === "en" ? "Sections" : "章节"}</small>
      </button>
    </nav>
  </>);
}
