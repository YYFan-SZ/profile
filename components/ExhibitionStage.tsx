"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { heroCameraPosition } from "@/lib/exhibition-architecture";
import * as THREE from "three";
import { EXHIBITION_CHAPTERS, chapterAtScroll, sceneAtChapter } from "@/lib/exhibition-timeline";

export type PianoPose = {
  yaw: number; pitch: number; roll: number;
  posX: number; posY: number; posZ: number; scale: number;
};

const CHAPTERS = EXHIBITION_CHAPTERS;
const POSES: PianoPose[] = Array.from({length:6}, () => ({
  yaw: -.27, pitch: 0, roll: 0, posX: 2.7, posY: .65, posZ: .65, scale: 1.32,
}));
// One-way route: overview, keyboard, piano side, promenade, successive islands.
const CAMERAS = [[0,2.8,20.5],[2.7,3.5,11.8],[10.2,3.3,1.5],[13,3,-6],[22,3.2,-14],[30,3.6,-19],[35,3.8,-40],[36,3.8,-66]];
const CAMERA_KNOTS = [0,1,2,5,6,7];
const TARGETS = [[0,3,-3],[.8,1,-1],[4.5,1,-1],[14,1.8,-20],[24,2,-28],[32,2,-33],[33,2,-50],[36,3,-79]];

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
  const aspect=useThree(s=>s.size.width/Math.max(1,s.size.height));
  const motion = useRef<ExhibitionMotion>({
    piano: { ...POSES[0] }, progress: 0, scene: 0, reduced: false, visible: true,
  });
  const scroll = useRef(0);
  const anchors = useRef<number[]>([]);
  const progress = useRef(0);
  const lookAt = useMemo(() => new THREE.Vector3(0, 1, 0), []);
  const cameraPath = useMemo(() => new THREE.CatmullRomCurve3([heroCameraPosition(aspect),...CAMERAS.slice(1)].map(p=>new THREE.Vector3(p[0],p[1],p[2]))), [aspect]);
  const gazePath = useMemo(() => new THREE.CatmullRomCurve3(TARGETS.map(p=>new THREE.Vector3(p[0],p[1],p[2]))), []);
  const aim = useMemo(() => new THREE.Object3D(), []);

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
    // Monotone Hermite timing keeps speed continuous between unequal route spans.
    const span=CAMERA_KNOTS[b]-CAMERA_KNOTS[a];
    const previous=a>0?CAMERA_KNOTS[a]-CAMERA_KNOTS[a-1]:span;
    const next=b<CAMERA_KNOTS.length-1?CAMERA_KNOTS[b+1]-CAMERA_KNOTS[b]:span;
    const m0=span+previous?2*span*previous/(span+previous):0;
    const m1=span+next?2*span*next/(span+next):0;
    const t2=t*t,t3=t2*t;
    const route=(2*t3-3*t2+1)*CAMERA_KNOTS[a]+(t3-2*t2+t)*m0+(-2*t3+3*t2)*CAMERA_KNOTS[b]+(t3-t2)*m1;
    const travel = motion.current.reduced ? 0 : route/(CAMERAS.length-1);
    cameraPath.getPoint(travel,camera.position);
    gazePath.getPoint(travel,lookAt);
    aim.position.copy(camera.position);
    // Object3D looks along +Z, whereas a camera looks along -Z.
    aim.lookAt(camera.position.clone().multiplyScalar(2).sub(lookAt));
    camera.quaternion.slerp(aim.quaternion,motion.current.reduced?1:1-Math.exp(-9*Math.min(delta,.05)));
  }, -2);
  return motion;
}

export { ExhibitionStage } from "./ExhibitionWorlds";
