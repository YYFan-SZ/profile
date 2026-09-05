"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { EXHIBITION_CHAPTERS, chapterAtScroll, sceneAtChapter } from "@/lib/exhibition-timeline";

export type PianoPose = {
  yaw: number; pitch: number; roll: number;
  posX: number; posY: number; posZ: number; scale: number;
};

const CHAPTERS = EXHIBITION_CHAPTERS;
const POSES: PianoPose[] = [2.7, 2.9, 1.1, 1.1, 1.1, 1.1].map((posX, index) => ({
  yaw: index === 0 ? -.27 : -.42, pitch: 0, roll: 0, posX, posY: .2, posZ: index === 0 ? .65 : 0, scale: 1.32,
}));
const CAMERAS = [[0, 4, 18.5], [1.6, 3.9, 11.8], [8.5, 4.8, 13.5], [40, 6, -12], [44, 6, -34], [36, 5, -59]];
const TARGETS = [[0, 1.9, -3], [1.1, .9, -1.3], [6.4, 1.1, -3], [32, 2.5, -30], [36, 2.7, -50], [36, 3.4, -78]];

export type ExhibitionMotion = {
  piano: PianoPose;
  progress: number;
  scene: number;
  reduced: boolean;
  visible: boolean;
};

// Real document positions are measured again after project details, language,
// images, fonts or viewport size change. CSS visual order is respected.
export function useExhibitionMotion(mobile: boolean, backgroundOnly = false) {
  const motion = useRef<ExhibitionMotion>({
    piano: { ...POSES[0] }, progress: 0, scene: 0, reduced: false, visible: true,
  });
  const scroll = useRef(0);
  const anchors = useRef<number[]>([]);
  const progress = useRef(0);
  const lookAt = useMemo(() => new THREE.Vector3(0, 1, 0), []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const readPreference = () => { motion.current.reduced = media.matches; };
    const readScroll = () => { scroll.current = window.scrollY; };
    const measure = () => {
      anchors.current = CHAPTERS.map(id => {
        const el = document.querySelector<HTMLElement>(`[data-kb-section="${id}"]`);
        return el ? el.getBoundingClientRect().top + window.scrollY : 0;
      });
    };
    const visibility = () => { motion.current.visible = !document.hidden; };
    const observer = new ResizeObserver(measure);
    const main = document.querySelector(".infinite-exhibition main");
    if (main) observer.observe(main);
    CHAPTERS.forEach(id => {
      const el = document.querySelector(`[data-kb-section="${id}"]`);
      if (el) observer.observe(el);
    });
    readPreference(); readScroll(); measure(); visibility();
    media.addEventListener("change", readPreference);
    window.addEventListener("scroll", readScroll, { passive: true });
    window.addEventListener("resize", measure);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", readPreference);
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("resize", measure);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  useFrame(({ camera }, delta) => {
    if (!motion.current.visible) return;
    const target = chapterAtScroll(scroll.current, anchors.current);
    progress.current = THREE.MathUtils.lerp(progress.current, target,
      motion.current.reduced ? 1 : 1 - Math.exp(-6 * Math.min(delta, .05)));
    const a = Math.min(POSES.length - 1, Math.floor(progress.current));
    const b = Math.min(a + 1, POSES.length - 1);
    const t = progress.current - a;
    const pose = motion.current.piano;
    for (const key of Object.keys(pose) as (keyof PianoPose)[]) {
      pose[key] = THREE.MathUtils.lerp(POSES[a][key], POSES[b][key], t);
    }
    motion.current.progress = progress.current / (POSES.length - 1);
    motion.current.scene = sceneAtChapter(progress.current);
    if (mobile && !backgroundOnly) {
      Object.assign(pose, {
        yaw: -.42, pitch: 0, roll: 0,
        posX: -.25, posY: -.3, posZ: 1, scale: .94,
      });
      if (backgroundOnly) {
        camera.position.set(3, 2, 20);
        camera.lookAt(3, 1, -10);
      } else {
        camera.position.set(0, 4.5, 12.5);
        camera.lookAt(0, .1, -1);
      }
      return;
    }
    const ca = motion.current.reduced ? CAMERAS[0] : CAMERAS[a];
    const cb = motion.current.reduced ? CAMERAS[0] : CAMERAS[b];
    camera.position.set(
      THREE.MathUtils.lerp(ca[0], cb[0], t),
      THREE.MathUtils.lerp(ca[1], cb[1], t),
      THREE.MathUtils.lerp(ca[2], cb[2], t),
    );
    lookAt.set(
      THREE.MathUtils.lerp(TARGETS[a][0], TARGETS[b][0], t),
      THREE.MathUtils.lerp(TARGETS[a][1], TARGETS[b][1], t),
      THREE.MathUtils.lerp(TARGETS[a][2], TARGETS[b][2], t),
    );
    camera.lookAt(lookAt);
  }, -2);
  return motion;
}

export { ExhibitionStage } from "./ExhibitionWorlds";
