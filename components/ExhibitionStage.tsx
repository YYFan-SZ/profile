"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { heroCameraPosition } from "@/lib/exhibition-architecture";
import { harborRoute, ISLAND_Z } from "@/lib/exhibition-route";
import { useArchitectureScale } from "./BlenderExhibitionAssets";
import * as THREE from "three";
import { EXHIBITION_CHAPTERS, chapterAtScroll, sceneAtChapter } from "@/lib/exhibition-timeline";

export type PianoPose = {
  yaw: number; pitch: number; roll: number;
  posX: number; posY: number; posZ: number; scale: number;
};

const CHAPTERS = EXHIBITION_CHAPTERS;
const POSES: PianoPose[] = Array.from({length:CHAPTERS.length}, () => ({
  yaw: -.48, pitch: 0, roll: 0, posX: 3.5, posY: .272, posZ: 0, scale: 1.08,
}));
const CAMERA_KNOTS = [0,1,4,27,28,30,31,32,33];

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
  const [sx,sy] = useArchitectureScale();
  const CAMERAS = useMemo(()=>{
    const points = [
    heroCameraPosition(aspect), [2.7,2.8,10],
    ...harborRoute(sx,sy).map(([x,y,z])=>[x,y+2.1,z]),
    ];
    // Follow the original stair from behind with room to see the steps.
    // Ease back into the terrace camera after reaching the upper landing.
    for (let i = 3; i <= 25; i++) {
      const weight = i === 3 ? .5 : 1;
      points[i][1] += 1.2 * weight;
      // Retreat only on the lower flight. At the top pass behind the arch
      // bearing, rather than cutting through its foreground side.
      const retreat = i < 18 ? weight : 1 - THREE.MathUtils.smoothstep(i,18,23);
      points[i][2] += 5 * retreat;
    }
    // Read the rooftop story from the open approach, then line up with the
    // stairs before descending instead of drifting to their side.
    points[26] = [16*sx, 6.2*sy+2.9, -13];
    points[27] = [17*sx, 6.2*sy+3, -12.5];
    points[28] = [24*sx, 6.2*sy+2.5, -23.5];
    points[29] = [25*sx, 1.6, -37.5];
    points[30] = [36, 3.5, ISLAND_Z.projects + 12];
    points[31] = [32, 3, ISLAND_Z.experience + 11];
    points[32] = [38, 3.2, ISLAND_Z.weekly + 11];
    points[33] = [36, 3.2, ISLAND_Z.contact + 11];
    return points;
  },[aspect,sx,sy]);
  const motion = useRef<ExhibitionMotion>({
    piano: { ...POSES[0] }, progress: 0, scene: 0, reduced: false, visible: true,
  });
  const scroll = useRef(0);
  const anchors = useRef<number[]>([]);
  const progress = useRef(0);
  const travelled = useRef(0);
  const panels = useRef<{ ability: HTMLElement | null; content: HTMLElement | null }>({ ability: null, content: null });
  const lookAtRef = useRef(new THREE.Vector3(0, 1, 0));
  const cameraPoints = useMemo(() => CAMERAS.map(p=>new THREE.Vector3(p[0],p[1],p[2])), [CAMERAS]);
  const cameraCurve = useMemo(() => new THREE.CatmullRomCurve3(cameraPoints, false, "centripetal"), [cameraPoints]);
  const distances = useMemo(() => {
    const values=[0];
    for(let i=1;i<cameraPoints.length;i++) values.push(values[i-1]+cameraPoints[i].distanceTo(cameraPoints[i-1]));
    return values;
  },[cameraPoints]);
  const stops = useMemo(()=>CAMERA_KNOTS.map(index=>distances[index]),[distances]);
  const gazePoints = useMemo(() => CAMERAS.map((p,i)=>{
    if(i===0)return new THREE.Vector3(0,3.5,-3);
    if(i===1)return new THREE.Vector3(1.3,.8,-1);
    // Frame the exhibit in the left third, leaving room for the reading panel.
    if(i===26)return new THREE.Vector3(18.5*sx+1.3*aspect,6.2*sy+2.1,-23.5);
    if(i===27)return new THREE.Vector3(19.5*sx+1.3*aspect,6.2*sy+1.8,-23.2);
    if(i===28)return new THREE.Vector3(25*sx,6.2*sy,-29);
    if(i===29)return new THREE.Vector3(25*sx,-1.75,-43);
    if(i>=22 && i<=25) {
      const t=(i-22)/3;
      return new THREE.Vector3(THREE.MathUtils.lerp(6.4,17,t)*sx,p[1]-.08,THREE.MathUtils.lerp(-14,-18,t));
    }
    if(i>=3 && i<=25) {
      const route = harborRoute(sx,sy);
      const step = route[Math.min(i, route.length - 1)];
      return new THREE.Vector3(step[0], step[1]+1.4, step[2]);
    }
    if(i===30)return new THREE.Vector3(36,1.7,ISLAND_Z.projects);
    if(i===31)return new THREE.Vector3(32,1.8,ISLAND_Z.experience);
    if(i===32)return new THREE.Vector3(39,1,ISLAND_Z.weekly);
    if(i===33)return new THREE.Vector3(37,3,ISLAND_Z.contact);
    const next=CAMERAS[Math.min(i+3,CAMERAS.length-1)];
    return new THREE.Vector3(next[0],p[1]-.5,Math.min(p[2]-3,next[2]));
  }), [CAMERAS,sx,sy,aspect]);
  const aim = useMemo(() => new THREE.Object3D(), []);
  const gazeCurve = useMemo(() => new THREE.CatmullRomCurve3(gazePoints, false, "centripetal"), [gazePoints]);
  const aimTarget = useMemo(() => new THREE.Vector3(), []);

  useEffect(() => {
    if (!mobile) panels.current = {
      ability: document.querySelector<HTMLElement>(".ability-panel"),
      content: document.querySelector<HTMLElement>(".content-archive"),
    };
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
      if (el?.firstElementChild) observer.observe(el.firstElementChild);
    });
    readPreference(); readScroll(); measure(); visibility();
    media.addEventListener("change", readPreference);
    window.addEventListener("scroll", readScroll, { passive: true });
    window.addEventListener("resize", measure);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      for (const panel of Object.values(panels.current)) {
        panel?.style.removeProperty("opacity");
        if (panel) panel.inert = false;
      }
      observer.disconnect();
      media.removeEventListener("change", readPreference);
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("resize", measure);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [mobile]);

  useFrame(({ camera }, delta) => {
    if (!motion.current.visible) return;
    if (camera instanceof THREE.PerspectiveCamera) {
      const fov = mobile ? (backgroundOnly ? 46 : 32) : 31;
      if (camera.fov !== fov) { camera.fov = fov; camera.updateProjectionMatrix(); }
    }
    // Every scroll increment advances the route; no reading holds or early arrivals.
    const target = chapterAtScroll(scroll.current, anchors.current);
    const stackTop = anchors.current[1];
    const contentTop = anchors.current[3];
    if (!mobile && Number.isFinite(stackTop) && Number.isFinite(contentTop)) {
      const vh = window.innerHeight;
      const abilityOpacity = motion.current.reduced ? 1 :
        1 - THREE.MathUtils.smoothstep(scroll.current, stackTop + vh * .4, stackTop + vh * .75);
      const contentOpacity = 1;
      if (panels.current.ability) {
        panels.current.ability.style.opacity = String(abilityOpacity);
        panels.current.ability.inert = abilityOpacity < .05;
      }
      if (panels.current.content) {
        panels.current.content.style.opacity = String(contentOpacity);
        panels.current.content.inert = contentOpacity < .05;
      }
    }
    // Measure travel in world units: sparse island waypoints must not create a speed burst.
    const targetChapter=Math.min(stops.length-2,Math.floor(target));
    const wanted=THREE.MathUtils.lerp(stops[targetChapter],stops[targetChapter+1],target-targetChapter);
    const dt=Math.min(delta,.05);
    // Short frame-independent filtering removes wheel steps without a long glide.
    if(motion.current.reduced) travelled.current=wanted;
    else travelled.current+=(wanted-travelled.current)*(1-Math.exp(-14*dt));
    let chapter=0;
    while(chapter<stops.length-2 && travelled.current>=stops[chapter+1])chapter++;
    progress.current=chapter+THREE.MathUtils.clamp(
      (travelled.current-stops[chapter])/Math.max(.001,stops[chapter+1]-stops[chapter]),0,1,
    );
    const a = Math.min(POSES.length - 1, Math.floor(progress.current));
    const b = Math.min(a + 1, POSES.length - 1);
    const t = progress.current - a;
    const pose = motion.current.piano;
    for (const key of Object.keys(pose) as (keyof PianoPose)[]) {
      pose[key] = THREE.MathUtils.lerp(POSES[a][key], POSES[b][key], t);
    }
    // Mobile already has its own interactive piano below the introduction.
    if (mobile && backgroundOnly) pose.scale = 0;
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
    const position=motion.current.reduced?0:travelled.current;
    let index=0;
    while(index<distances.length-2 && position>=distances[index+1])index++;
    const fraction=THREE.MathUtils.clamp((position-distances[index])/Math.max(.001,distances[index+1]-distances[index]),0,1);
    const curveProgress=(index+fraction)/(cameraPoints.length-1);
    cameraCurve.getPoint(curveProgress,camera.position);
    const lookAt = lookAtRef.current;
    gazeCurve.getPoint(curveProgress,lookAt);
    // Keep the landing at eye level, blending in/out instead of tilting at a tread.
    const landingLevel = THREE.MathUtils.smoothstep(index+fraction,20,22)
      * (1-THREE.MathUtils.smoothstep(index+fraction,25,26));
    lookAt.y = THREE.MathUtils.lerp(lookAt.y,camera.position.y-.08,landingLevel);
    aim.position.copy(camera.position);
    // Object3D looks along +Z, whereas a camera looks along -Z.
    aim.lookAt(aimTarget.copy(camera.position).multiplyScalar(2).sub(lookAt));
    if(motion.current.reduced)camera.quaternion.copy(aim.quaternion);
    else camera.quaternion.slerp(aim.quaternion,1-Math.exp(-10*dt));
  }, -2);
  return motion;
}

export { ExhibitionStage } from "./ExhibitionWorlds";
