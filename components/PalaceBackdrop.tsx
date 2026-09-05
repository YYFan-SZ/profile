"use client";

import { useEffect, useRef } from "react";
import { EXHIBITION_CHAPTERS, chapterAtScroll, sceneAtChapter, sceneWeight } from "@/lib/exhibition-timeline";

const SCENES = ["hall", "staircase", "gallery", "terrace"];
const COPY_SIDE = [1, .45, 0, 1, 0, 1];

export default function PalaceBackdrop() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const layers = Array.from(element.querySelectorAll<HTMLElement>(".palace-scene"));
    const images = Array.from(element.querySelectorAll<HTMLImageElement>("img"));
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let anchors: number[] = [];
    let progress = 0;
    let frame = 0;
    let last = 0;
    const render = (time: number) => {
      frame = 0;
      if (document.hidden) return;
      const target = chapterAtScroll(window.scrollY, anchors);
      const delta = Math.min((time - last) / 1000 || .016, .05);
      last = time;
      progress += (target - progress) * (preference.matches ? 1 : 1 - Math.exp(-6 * delta));
      const scene = sceneAtChapter(progress);
      const next = Math.min(3, Math.ceil(scene));
      // Hold the previous photograph until the next asset has loaded.
      const readyScene = images[next].complete && images[next].naturalWidth ? scene : Math.floor(scene);
      layers.forEach((layer, index) => {
        const weight = sceneWeight(readyScene, index);
        layer.style.opacity = String(weight);
        layer.style.visibility = weight > .001 ? "visible" : "hidden";
        const drift = preference.matches ? 0 : Math.max(-1, Math.min(1, scene - index));
        layer.style.transform = `scale(${1.025 + Math.abs(drift) * .025}) translate3d(${drift * (index % 2 ? -1 : 1) * 1.2}%,${drift * -.7}%,0)`;
      });
      const a = Math.min(5, Math.floor(progress));
      const side = COPY_SIDE[a] + (COPY_SIDE[Math.min(5, a + 1)] - COPY_SIDE[a]) * (progress - a);
      element.style.setProperty("--copy-left", String(.28 + side * .36));
      element.style.setProperty("--copy-right", String(.28 + (1 - side) * .42));
      if (Math.abs(target - progress) > .001) frame = requestAnimationFrame(render);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(render); };
    const measure = () => {
      anchors = EXHIBITION_CHAPTERS.map(id => {
        const section = document.querySelector(`[data-kb-section="${id}"]`);
        return section ? section.getBoundingClientRect().top + window.scrollY : 0;
      });
      schedule();
    };
    const observer = new ResizeObserver(measure);
    const main = document.querySelector(".infinite-exhibition main");
    if (main) observer.observe(main);
    EXHIBITION_CHAPTERS.forEach(id => {
      const section = document.querySelector(`[data-kb-section="${id}"]`);
      if (section) observer.observe(section);
    });
    images.forEach(img => img.addEventListener("load", schedule));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure);
    document.addEventListener("visibilitychange", schedule);
    preference.addEventListener("change", schedule);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      images.forEach(img => img.removeEventListener("load", schedule));
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      document.removeEventListener("visibilitychange", schedule);
      preference.removeEventListener("change", schedule);
    };
  }, []);
  return <div className="palace-backdrop" ref={root} aria-hidden="true">
    {SCENES.map((scene, index) => <picture className={`palace-scene palace-scene--${scene}`} key={scene} style={{ opacity: index === 0 ? 1 : 0 }}>
      <source media="(max-width: 767px)" srcSet={`/palace/${scene}-mobile.webp`} />
      {/* Decorative viewport art uses precompressed local assets. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/palace/${scene}.webp`} alt="" width={1664} height={941}
        fetchPriority={index === 0 ? "high" : "low"} decoding="async" />
    </picture>)}
    <div className="palace-wash palace-wash--left" />
    <div className="palace-wash palace-wash--right" />
    <div className="palace-atmosphere" />
  </div>;
}
