"use client";

import { useEffect, useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";
import type { ExhibitionMotion } from "./ExhibitionStage";
import { ChapterSky, ChapterExhibits } from "./ChapterExhibits";
import GalleryConnections from "./GalleryConnections";
import CoastalTerrace from "./CoastalTerrace";
import CurvedMusicStair from "./CurvedMusicStair";
import GardenPortal from "./GardenPortal";
import ColonnadeIsland from "./ColonnadeIsland";
import CumulusClouds from "./CumulusClouds";

const IVORY = "#f4e5cc";
const GOLD = "#c8ae7f";
const FLOOR = -1.75;

function Stone({ color = IVORY }: { color?: string }) {
  return <meshStandardMaterial color={color} roughness={.55} metalness={.025} />;
}

function Orrery({ motion }: { motion: RefObject<ExhibitionMotion> }) {
  const rings = useRef<THREE.Group>(null);
  const exhibit = useRef<THREE.Group>(null);
  const center = useMemo(() => new THREE.Vector3(30, 2.7, -47), []);
  useFrame(({ camera }, delta) => { if (exhibit.current) exhibit.current.visible = camera.position.distanceToSquared(center) < 34 * 34; if (rings.current && !motion.current.reduced && motion.current.visible) rings.current.rotation.y += Math.min(delta, .05) * .12; });
  return <group ref={exhibit} position={[30, 2.7, -47]}>
    <mesh position={[0, -4.4, 0]} receiveShadow><cylinderGeometry args={[3.7, 4, .3, 80]} /><Stone /></mesh>
    <mesh position={[0, -2.8, 0]} castShadow><cylinderGeometry args={[.35, .6, 3, 24]} /><Stone /></mesh>
    <group ref={rings} rotation={[.22, 0, .16]}>
      {[0, 1, 2].map(i => <mesh key={i} rotation={[Math.PI / 2 + i * .55, i * .8, .2]} castShadow>
        <torusGeometry args={[2.4 + i * .18, .035, 10, 100]} /><meshStandardMaterial color={GOLD} metalness={.85} roughness={.22} />
      </mesh>)}
      <mesh><sphereGeometry args={[.68, 32, 24]} /><meshPhysicalMaterial color="#e6d3ad" metalness={.45} roughness={.22} clearcoat={1} /></mesh>
      <mesh position={[2.48, .35, 0]}><sphereGeometry args={[.18, 16, 12]} /><meshStandardMaterial color="#fff2d7" metalness={.3} roughness={.25} /></mesh>
    </group>
  </group>;
}

function Water({ motion, mobile }: { motion: RefObject<ExhibitionMotion>; mobile: boolean }) {
  const material = useRef<THREE.MeshStandardMaterial>(null);
  const normal = useMemo(() => {
    const size = 128, data = new Uint8Array(size * size * 4);
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      data[i] = 128 + Math.sin(x / size * Math.PI * 8 + Math.sin(y / size * Math.PI * 4)) * 20;
      data[i + 1] = 128 + Math.cos(y / size * Math.PI * 12 + Math.sin(x / size * Math.PI * 4)) * 28;
      data[i + 2] = 248; data[i + 3] = 255;
    }
    const t = new THREE.DataTexture(data, size, size); t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(18, 18); t.needsUpdate = true; return t;
  }, []);
  useEffect(() => () => normal.dispose(), [normal]);
  useFrame((_, delta) => {
    if (!motion.current.reduced && motion.current.visible) { normal.offset.set(normal.offset.x + delta * .009, normal.offset.y + delta * .005); }
  });
  return <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, FLOOR - .38, -30]} receiveShadow>
    <planeGeometry args={[380, 380]} />
    {mobile ? <meshStandardMaterial ref={material} color="#d6e6e4" metalness={.35} roughness={.32} normalMap={normal} normalScale={new THREE.Vector2(.25, .25)} /> :
      <MeshReflectorMaterial resolution={384} mirror={.45} mixStrength={.65} blur={[180, 60]} mixBlur={.65}
        color="#d6e6e4" metalness={.3} roughness={.3} normalMap={normal} normalScale={new THREE.Vector2(.22, .22)} />}
  </mesh>;
}

export function ExhibitionStage({ motion, mobile, pianoOnly = false }: {
  motion: RefObject<ExhibitionMotion>; mobile: boolean; backgroundOnly: boolean; pianoOnly?: boolean;
}) {
  return <>
    <ambientLight intensity={.95} color="#fff3dc" />
    <hemisphereLight intensity={1.3} color="#f5fbff" groundColor="#d6c6a9" />
    <directionalLight position={[-12, 24, 8]} intensity={3.2} color="#fff0d1" castShadow={!mobile}
      shadow-mapSize={[1024, 1024]} shadow-bias={-.001} shadow-normalBias={.025}
      shadow-camera-left={-25} shadow-camera-right={25} shadow-camera-top={20} shadow-camera-bottom={-30} shadow-camera-far={90} />
    <directionalLight position={[10, 10, -15]} intensity={1.2} color="#ffffff" />
    {!pianoOnly && <>
      <ChapterSky motion={motion} />
      <CumulusClouds motion={motion} />
      <ChapterExhibits motion={motion} />
      <Water motion={motion} mobile={mobile} />
      {/* One connected terrace stays in world coordinates throughout the scroll. */}
      <group position={[2, FLOOR, -1]}>
        {[0, 1, 2].map(i => <mesh key={i} position={[0, -.12 - i * .12, 0]} receiveShadow castShadow>
          <cylinderGeometry args={[7.5 + i * .35, 7.5 + i * .35, .16, 100]} /><Stone color={i === 0 ? "#f8edd9" : IVORY} />
        </mesh>)}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -.025, 0]}><ringGeometry args={[6.9, 6.925, 100]} /><meshStandardMaterial color={GOLD} metalness={.5} roughness={.4} /></mesh>
      </group>
      <GalleryConnections />
      <CoastalTerrace motion={motion} />
      <CurvedMusicStair />
      <GardenPortal />
      <ColonnadeIsland />
      <Orrery motion={motion} />
      {[[36, -28, 7], [32, -47, 7]].map(([x, z, radius]) => (
        <mesh key={z} position={[x, FLOOR - .14, z]} receiveShadow><cylinderGeometry args={[radius, radius, .3, 80]} /><Stone color="#fff9eb" /></mesh>
      ))}
    </>}
  </>;
}
