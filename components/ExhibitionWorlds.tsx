"use client";

import { Suspense, useCallback, useEffect, useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { ExhibitionMotion } from "./ExhibitionStage";
import { ChapterSky, ChapterExhibits } from "./ChapterExhibits";
import HarborRoute from "./HarborRoute";
import CodeIsland from "./CodeIsland";
import CoastalTerrace from "./CoastalTerrace";
import CurvedMusicStair from "./CurvedMusicStair";
import ColonnadeIsland from "./ColonnadeIsland";
import WeeklyTypewriter from "./WeeklyTypewriter";
import WeeklyIslandDetails from "./WeeklyIslandDetails";
import PianoCrescentSteps from "./PianoCrescentSteps";
import HeroSkiff from "./HeroSkiff";
import GardenPortal from "./GardenPortal";
import { BlenderArch, BlenderStair } from "./BlenderExhibitionAssets";
import { ISLAND_Z } from "@/lib/exhibition-route";

const IVORY = "#f4e5cc";
const FLOOR = -1.75;

function DuskLighting({ motion, mobile }: { motion: RefObject<ExhibitionMotion>; mobile: boolean }) {
  const ambient = useRef<THREE.AmbientLight>(null);
  const hemisphere = useRef<THREE.HemisphereLight>(null);
  const sunlight = useRef<THREE.DirectionalLight>(null);
  const fill = useRef<THREE.DirectionalLight>(null);
  const rim = useRef<THREE.DirectionalLight>(null);
  const palette = useMemo(() => ({
    ambientDay: new THREE.Color("#fff8ef"), ambientNight: new THREE.Color("#b5a5d8"),
    skyDay: new THREE.Color("#edf5ff"), skyNight: new THREE.Color("#8e84be"),
    sunDay: new THREE.Color("#fff0dd"), sunNight: new THREE.Color("#d0b4e1"),
    fillDay: new THREE.Color("#ffffff"), fillNight: new THREE.Color("#aaa7dd"),
  }), []);
  useFrame(() => {
    const dusk = THREE.MathUtils.smoothstep(motion.current.progress, .48, 1);
    if (ambient.current) {
      ambient.current.intensity = THREE.MathUtils.lerp(.85, .55, dusk);
      ambient.current.color.copy(palette.ambientDay).lerp(palette.ambientNight, dusk);
    }
    if (hemisphere.current) {
      hemisphere.current.intensity = THREE.MathUtils.lerp(1.2, .72, dusk);
      hemisphere.current.color.copy(palette.skyDay).lerp(palette.skyNight, dusk);
    }
    if (sunlight.current) {
      sunlight.current.intensity = THREE.MathUtils.lerp(3.1, 1.35, dusk);
      sunlight.current.color.copy(palette.sunDay).lerp(palette.sunNight, dusk);
    }
    if (fill.current) {
      fill.current.intensity = THREE.MathUtils.lerp(1.2, .85, dusk);
      fill.current.color.copy(palette.fillDay).lerp(palette.fillNight, dusk);
    }
    if (rim.current) rim.current.intensity = THREE.MathUtils.lerp(.7, .35, dusk);
  });
  return <>
    <ambientLight ref={ambient} intensity={.85} color="#fff8ef" />
    <hemisphereLight ref={hemisphere} intensity={1.2} color="#edf5ff" groundColor="#e0d2c3" />
    <directionalLight ref={sunlight} position={[-16, 20, 4]} intensity={3.1} color="#fff0dd" castShadow={!mobile}
      shadow-mapSize={[1024, 1024]} shadow-bias={-.0002} shadow-normalBias={.018} shadow-radius={3}
      shadow-camera-left={-25} shadow-camera-right={25} shadow-camera-top={20} shadow-camera-bottom={-30} shadow-camera-far={90} />
    <directionalLight ref={fill} position={[10, 10, -15]} intensity={1.2} color="#ffffff" />
    <directionalLight ref={rim} position={[0, 6, 18]} intensity={.7} color="#fff0d9" />
  </>;
}

function Stone({ color = IVORY }: { color?: string }) {
  return <meshStandardMaterial color={color} roughness={.55} metalness={.025} />;
}

function Orrery({ motion }: { motion: RefObject<ExhibitionMotion> }) {
  const rings = useRef<THREE.Group>(null);
  const exhibit = useRef<THREE.Group>(null);
  const center = useMemo(() => new THREE.Vector3(28, .89, ISLAND_Z.experience), []);
  useFrame(({ camera }, delta) => { if (exhibit.current) exhibit.current.visible = camera.position.distanceToSquared(center) < 34 * 34; if (rings.current && !motion.current.reduced && motion.current.visible) rings.current.rotation.y += Math.min(delta, .05) * .12; });
  return <group ref={exhibit} position={[28, .89, ISLAND_Z.experience]} scale={.6}>
    <mesh position={[0, -4.4, 0]} receiveShadow><cylinderGeometry args={[1.35, 1.55, .3, 48]} /><Stone /></mesh>
    <mesh position={[0, -4.18, 0]}><cylinderGeometry args={[1.12, 1.28, .14, 48]}/><meshStandardMaterial color="#c5ad7f" metalness={.55} roughness={.35}/></mesh>
    <mesh position={[0, -2.8, 0]} castShadow><cylinderGeometry args={[.23, .46, 2.7, 24]} /><Stone /></mesh>
    <mesh position={[0,-1.38,0]}><cylinderGeometry args={[.37,.28,.14,32]}/><meshStandardMaterial color="#c5ad7f" metalness={.55} roughness={.35}/></mesh>
    <group ref={rings} rotation={[.22, 0, .16]}>
      {[0, 1, 2].map(i => <mesh key={i} rotation={[Math.PI / 2 + i * .55, i * .8, .2]} castShadow>
        <torusGeometry args={[2.4 + i * .18, .038, 10, 96]} /><meshStandardMaterial color="#bea477" metalness={.65} roughness={.3} />
      </mesh>)}
      <mesh><sphereGeometry args={[.82, 48, 32]} /><meshPhysicalMaterial color="#eee0c8" metalness={.22} roughness={.36} clearcoat={.45} /></mesh>
      <mesh position={[2.48, .35, 0]}><sphereGeometry args={[.18, 16, 12]} /><meshStandardMaterial color="#fff2d7" metalness={.3} roughness={.25} /></mesh>
      <mesh position={[-1.65,-.75,1.65]}><sphereGeometry args={[.13,16,12]}/><meshStandardMaterial color="#b4c2b0" roughness={.4} metalness={.15}/></mesh>
    </group>
  </group>;
}

function Water({ motion, mobile }: { motion: RefObject<ExhibitionMotion>; mobile: boolean }) {
  const material = useRef<THREE.MeshPhysicalMaterial>(null);
  const waterTime = useRef({ value: 0 });
  const shimmerStrength = useRef({ value: mobile ? .07 : .12 });
  const normalScale = useMemo(() => new THREE.Vector2(.11, .09), []);
  const waterColors = useMemo(() => ({ day: new THREE.Color("#a8cbd7"), night: new THREE.Color("#245b85") }), []);
  const normal = useMemo(() => {
    const size = 128, data = new Uint8Array(size * size * 4);
    const heights = new Float32Array(size * size);
    const hash = (x: number, y: number) => {
      const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
      return value - Math.floor(value);
    };
    const noise = (u: number, v: number, frequency: number) => {
      const px = u * frequency, py = v * frequency;
      const ix = Math.floor(px), iy = Math.floor(py);
      const fx = px - ix, fy = py - iy;
      const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
      const at = (x: number, y: number) => hash((x + frequency) % frequency, (y + frequency) % frequency);
      const a = THREE.MathUtils.lerp(at(ix, iy), at(ix + 1, iy), sx);
      const b = THREE.MathUtils.lerp(at(ix, iy + 1), at(ix + 1, iy + 1), sx);
      return THREE.MathUtils.lerp(a, b, sy);
    };
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const u = x / size, v = y / size;
      heights[y * size + x] = .58 * noise(u, v, 5) + .3 * noise(u, v, 13) + .12 * noise(u, v, 29);
    }
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const dx = heights[y * size + (x + 1) % size] - heights[y * size + (x - 1 + size) % size];
      const dy = heights[((y + 1) % size) * size + x] - heights[((y - 1 + size) % size) * size + x];
      data[i] = 128 - dx * 135;
      data[i + 1] = 128 - dy * 135;
      data[i + 2] = 250;
      data[i + 3] = 255;
    }
    const t = new THREE.DataTexture(data, size, size); t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(14, 14); t.needsUpdate = true; return t;
  }, []);
  useEffect(() => () => normal.dispose(), [normal]);
  useEffect(() => { shimmerStrength.current.value = mobile ? .07 : .12; }, [mobile]);
  const onBeforeCompile = useCallback((shader: THREE.WebGLProgramParametersWithUniforms) => {
    shader.uniforms.uWaterTime = waterTime.current;
    shader.uniforms.uWaterShimmer = shimmerStrength.current;
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nuniform float uWaterTime;\nvarying vec2 vWaterP;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvWaterP = position.xy;\n// Low, slow swells: surface movement should not read as individual stripes.\ntransformed.z += 0.04 * sin(dot(position.xy, vec2(0.24, 0.06)) - uWaterTime * 0.3 + 0.38 * sin(position.y * 0.045));\ntransformed.z += 0.018 * sin(dot(position.xy, vec2(-0.09, 0.19)) - uWaterTime * 0.21);");
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", `#include <common>
uniform float uWaterTime;
uniform float uWaterShimmer;
varying vec2 vWaterP;
float waterHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float waterNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(waterHash(i), waterHash(i + vec2(1.0, 0.0)), f.x),
    mix(waterHash(i + vec2(0.0, 1.0)), waterHash(i + vec2(1.0, 1.0)), f.x), f.y);
}`)
      .replace("#include <color_fragment>", `#include <color_fragment>
// Broad, irregular tonal variation instead of repeating colour bands.
vec2 slowFlow = vWaterP + vec2(uWaterTime * 0.22, uWaterTime * 0.09);
float waterTint = waterNoise(slowFlow * 0.016);
float waterDetail = waterNoise(slowFlow * 0.065);
diffuseColor.rgb *= 0.965 + 0.048 * waterTint + 0.012 * waterDetail;`)
      .replace("#include <normal_fragment_maps>", `#include <normal_fragment_maps>
// Gentle crossed slopes are broken up by noise; the tiled normal adds fine ripples.
float waterWarp = waterNoise(vWaterP * 0.065 + vec2(uWaterTime * 0.04, uWaterTime * 0.015)) - 0.5;
float waveA = dot(vWaterP, vec2(0.33, 0.07)) - uWaterTime * 0.31 + waterWarp * 0.75;
float waveB = dot(vWaterP, vec2(-0.13, 0.29)) - uWaterTime * 0.24 + waterWarp * 0.45;
vec2 waterSlope = 0.11 * vec2(0.33, 0.07) * cos(waveA)
  + 0.07 * vec2(-0.13, 0.29) * cos(waveB);
normal = normalize(normal + mat3(viewMatrix) * vec3(-waterSlope.x, 0.0, -waterSlope.y));`)
      .replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
// Sparse flecks follow crests, without glowing continuous lines.
float flecks = waterNoise(vWaterP * vec2(0.75, 0.31) + vec2(uWaterTime * 0.11, uWaterTime * 0.037));
float breakup = waterNoise(vWaterP * 0.11 - vec2(uWaterTime * 0.03, 0.0));
float crest = pow(max(0.0, sin(waveA + waveB * 0.55)), 12.0);
float grazing = 1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
float shimmer = smoothstep(0.79, 0.94, flecks) * smoothstep(0.35, 0.8, breakup)
  * crest * mix(0.2, 1.0, grazing) * uWaterShimmer;
totalEmissiveRadiance += vec3(0.55, 0.62, 0.61) * shimmer;`);
  }, [waterTime, shimmerStrength]);
  useFrame((_, delta) => {
    const dusk = THREE.MathUtils.smoothstep(motion.current.progress, .48, 1);
    if (material.current) material.current.color.copy(waterColors.day).lerp(waterColors.night, dusk);
    if (!motion.current.reduced && motion.current.visible) {
      const step = Math.min(delta, .05);
      waterTime.current.value += step;
      normal.offset.set(normal.offset.x + step * .006, normal.offset.y + step * .004);
    }
  });
  return <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, FLOOR - .38, -30]} receiveShadow>
    <planeGeometry args={[380, 380, mobile ? 72 : 112, mobile ? 72 : 112]} />
    <meshPhysicalMaterial ref={material} color="#a8cbd7" metalness={0} roughness={.43}
      clearcoat={.3} clearcoatRoughness={.38} envMapIntensity={.55}
      normalMap={normal} normalScale={normalScale} onBeforeCompile={onBeforeCompile}
      customProgramCacheKey={() => "exhibition-water-shimmer-v4"} />
  </mesh>;
}

export function ExhibitionStage({ motion, mobile, pianoOnly = false }: {
  motion: RefObject<ExhibitionMotion>; mobile: boolean; backgroundOnly: boolean; pianoOnly?: boolean;
}) {
  return <>
    <DuskLighting motion={motion} mobile={mobile} />
    {!pianoOnly && <>
      <ChapterSky motion={motion} />
      <ChapterExhibits motion={motion} />
      <Water motion={motion} mobile={mobile} />
      {!mobile && <HeroSkiff motion={motion} />}
      {/* One connected terrace stays in world coordinates throughout the scroll. */}
      <group position={[2.7, FLOOR, -.7]}>
        <PianoCrescentSteps />
        <mesh position={[0,-.12,0]} receiveShadow castShadow>
          <cylinderGeometry args={[5.58,5.68,.18,160]}/>
          <meshStandardMaterial color="#cfc6b8" roughness={.68}/>
        </mesh>
        <mesh position={[0,.18,0]} receiveShadow castShadow>
          <cylinderGeometry args={[5.68,5.72,.43,160]}/>
          <meshPhysicalMaterial color="#e8ded0" roughness={.5} clearcoat={.12}/>
        </mesh>
        <mesh position={[0,.383,0]} receiveShadow>
          <cylinderGeometry args={[5.54,5.54,.06,160]}/>
          <meshPhysicalMaterial color="#f6f0e7" roughness={.4} clearcoat={.22} clearcoatRoughness={.4}/>
        </mesh>
        <mesh rotation={[Math.PI/2,0,0]} position={[0,.414,0]}>
          <torusGeometry args={[5.57,.018,8,160]}/>
          <meshStandardMaterial color="#c8af83" metalness={.32} roughness={.56}/>
        </mesh>
        <mesh rotation={[Math.PI/2,0,0]} position={[0,.418,0]}>
          <torusGeometry args={[4.9,.009,6,160]}/>
          <meshStandardMaterial color="#ded0b8" metalness={.12} roughness={.7}/>
        </mesh>
        <mesh rotation={[Math.PI/2,0,0]} position={[0,.07,0]}>
          <torusGeometry args={[5.71,.012,6,160]}/>
          <meshStandardMaterial color="#c7b69b" metalness={.2} roughness={.7}/>
        </mesh>
      </group>
      <HarborRoute />
      <CoastalTerrace motion={motion} />
      {!mobile && <>
        <Suspense fallback={<CurvedMusicStair />}><BlenderStair /></Suspense>
        <Suspense fallback={<GardenPortal />}><BlenderArch /></Suspense>
      </>}
      {mobile && <Suspense fallback={null}><BlenderStair /></Suspense>}
      <ColonnadeIsland position={[36,-2.48,ISLAND_Z.projects]} length={1.2} />
      <CodeIsland />
      <ColonnadeIsland position={[32,-2.48,ISLAND_Z.experience]} length={1.45} />
      <ColonnadeIsland position={[38,-2.48,ISLAND_Z.weekly]} length={1.45} decorations={false} />
      <WeeklyTypewriter />
      {!mobile && <WeeklyIslandDetails />}
      <ColonnadeIsland position={[36,-2.48,ISLAND_Z.contact]} length={1.45} />
      <Orrery motion={motion} />
    </>}
  </>;
}
