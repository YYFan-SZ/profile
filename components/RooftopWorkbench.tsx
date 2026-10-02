"use client";

import { useEffect, useRef, useState } from "react";
import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function CommerceMiniature({ phase, brass }: { phase: number; brass: string }) {
  const group = useRef<THREE.Group>(null);
  useEffect(() => {
    if (group.current) group.current.scale.setScalar(window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : .76);
  }, [phase]);
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.scale.setScalar(THREE.MathUtils.damp(group.current.scale.x, 1, 10, delta));
  });
  return <group ref={group}>
    {phase === 0 && [-1, 0, 1].map((i) => <RoundedBox key={i} args={[.37, .02, .4]} radius={.009} smoothness={2} position={[i * .16, .14 + i * .03, i * -.09]} rotation={[0, i * .24, 0]} castShadow>
      <meshStandardMaterial color={i === 0 ? "#f7e9ce" : "#fff9ec"} roughness={.8} />
    </RoundedBox>)}
    {phase === 1 && <group rotation={[0, -.2, 0]}>
      <RoundedBox args={[.53, .13, .64]} radius={.018} smoothness={2} position={[0, .2, -.04]} castShadow><meshStandardMaterial color="#fff9eb" roughness={.66} /></RoundedBox>
      <RoundedBox args={[.55, .027, .66]} radius={.012} smoothness={2} position={[0, .28, -.04]}><meshStandardMaterial color="#d9c4a0" roughness={.62} /></RoundedBox>
      <mesh position={[-.18, .3, -.04]}><boxGeometry args={[.028, .014, .5]} /><meshStandardMaterial color={brass} /></mesh>
    </group>}
    {phase === 2 && <group>
      <RoundedBox args={[.69, .36, .44]} radius={.035} smoothness={2} position={[0, .31, -.12]} castShadow><meshStandardMaterial color="#e4d5bb" roughness={.62} /></RoundedBox>
      <mesh position={[0, .35, .105]}><boxGeometry args={[.49, .015, .24]} /><meshStandardMaterial color="#fff9ed" roughness={.75} /></mesh>
      <mesh position={[.19, .52, .105]}><sphereGeometry args={[.028, 10, 10]} /><meshStandardMaterial color={brass} emissive={brass} emissiveIntensity={.2} /></mesh>
    </group>}
    {phase === 3 && <group rotation={[0, .13, 0]}>
      <RoundedBox args={[.52, .018, .66]} radius={.008} smoothness={2} position={[0, .15, -.03]} castShadow><meshStandardMaterial color="#fff9eb" roughness={.8} /></RoundedBox>
      <mesh position={[.12, .169, .1]} rotation={[-Math.PI / 2, 0, 0]}><torusGeometry args={[.11, .013, 6, 28]} /><meshStandardMaterial color={brass} roughness={.52} /></mesh>
      {[-.23, -.15, -.07].map(z => <mesh key={z} position={[-.11, .167, z]}><boxGeometry args={[.2, .004, .01]} /><meshStandardMaterial color="#cbb998" /></mesh>)}
    </group>}
  </group>;
}

function Exhibit({ index, selected, hovered, storyPhase, onActivate, onHover }: {
  index: number; selected: boolean; hovered: boolean; storyPhase: number;
  onActivate: (index: number) => void; onHover: (index: number | null) => void;
}) {
  const brass = selected ? "#b69560" : "#c8b99c";
  return <group position={[(index - 1.5) * 1.56, .98, 0]} scale={hovered ? 1.08 : 1}
    onClick={event => { event.stopPropagation(); onActivate(index); }}
    onPointerOver={event => { event.stopPropagation(); onHover(index); }}
    onPointerOut={event => { event.stopPropagation(); onHover(null); }}>
    <RoundedBox args={[1.23, .035, 1.08]} radius={.025} smoothness={3} position={[0, -.045, -.035]} receiveShadow>
      <meshStandardMaterial color={selected ? "#fff9ec" : "#e9e1d2"} roughness={.68} />
    </RoundedBox>
    <mesh position={[0, .015, .57]}>
      <boxGeometry args={[.84, .026, .045]} />
      <meshStandardMaterial color={brass} emissive="#c6a779" emissiveIntensity={selected ? .3 : 0} roughness={.5} />
    </mesh>
    {index === 0 && <CommerceMiniature phase={storyPhase} brass={brass} />}
    {index === 1 && <group rotation={[0, -.13, 0]}>
      {[-.035, .015, .065].map((y, i) => <RoundedBox key={i} args={[.72, .035, .48]} radius={.012} smoothness={2} position={[i * .04, .1 + y, -i * .035]} castShadow>
        <meshStandardMaterial color={i === 2 ? "#fffaf0" : "#ded1bb"} roughness={.7} />
      </RoundedBox>)}
      <mesh position={[-.19, .21, -.13]}><boxGeometry args={[.19, .012, .12]} /><meshStandardMaterial color={brass} roughness={.6} /></mesh>
    </group>}
    {index === 2 && <group>
      <RoundedBox args={[.65, .42, .47]} radius={.035} smoothness={3} position={[0, .27, -.03]} castShadow>
        <meshStandardMaterial color="#e9dcc6" roughness={.75} />
      </RoundedBox>
      <mesh position={[0, .49, -.03]}><boxGeometry args={[.12, .012, .48]} /><meshStandardMaterial color={brass} roughness={.6} /></mesh>
      <mesh position={[0, .28, .21]}><boxGeometry args={[.12, .4, .012]} /><meshStandardMaterial color={brass} roughness={.6} /></mesh>
    </group>}
    {index === 3 && <group rotation={[0, .08, 0]}>
      {[-1, 1].map(side => <RoundedBox key={side} args={[.38, .038, .58]} radius={.012} smoothness={2} position={[side * .2, .16, -.05]} rotation={[0, 0, side * .08]} castShadow>
        <meshStandardMaterial color="#fff9eb" roughness={.73} />
      </RoundedBox>)}
      {[-.1, 0, .1].map((z, i) => <mesh key={i} position={[.2, .19, z]}><boxGeometry args={[.22, .008, .012]} /><meshStandardMaterial color={i === 0 ? brass : "#cfc4b0"} /></mesh>)}
    </group>}
  </group>;
}

export default function RooftopWorkbench({ position }: { position: [number, number, number] }) {
  const [active, setActive] = useState(-1);
  const [storyPhase, setStoryPhase] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => {
    const onSelect = (event: Event) => {
      const index = (event as CustomEvent<{ index?: number }>).detail?.index;
      if (typeof index === "number" && Number.isInteger(index) && index >= -1 && index < 4) setActive(index);
    };
    window.addEventListener("portfolio:rooftop-station", onSelect);
    const onStoryPhase = (event: Event) => {
      const index = (event as CustomEvent<{ index?: number }>).detail?.index;
      if (typeof index === "number" && Number.isInteger(index) && index >= 0 && index < 4) setStoryPhase(index);
    };
    window.addEventListener("portfolio:commerce-story-phase", onStoryPhase);
    return () => {
      window.removeEventListener("portfolio:rooftop-station", onSelect);
      window.removeEventListener("portfolio:commerce-story-phase", onStoryPhase);
    };
  }, []);

  const activateExhibit = (index: number) => {
    setActive(index);
    window.dispatchEvent(new CustomEvent("portfolio:rooftop-select", { detail: { index } }));
  };

  return <group position={position}>
    {[-2.8, 2.8].map(x => <group key={x} position={[x, .4, 0]}>
      {[-.45, .45].map(z => <mesh key={z} position={[0, 0, z]} castShadow>
        <cylinderGeometry args={[.1, .13, .8, 12]} />
        <meshStandardMaterial color="#c6b291" metalness={.2} roughness={.62} />
      </mesh>)}
    </group>)}
    <RoundedBox args={[6.7, .17, 1.48]} radius={.06} smoothness={3} position={[0, .83, 0]} castShadow receiveShadow>
      <meshPhysicalMaterial color="#f3ead9" roughness={.49} clearcoat={.14} />
    </RoundedBox>
    <RoundedBox args={[6.79, .035, 1.53]} radius={.012} smoothness={2} position={[0, .715, 0]}>
      <meshStandardMaterial color="#c4ae84" metalness={.35} roughness={.53} />
    </RoundedBox>
    {[0, 1, 2, 3].map(i => <Exhibit key={i} index={i} selected={active === i} hovered={hovered === i} storyPhase={storyPhase} onActivate={activateExhibit} onHover={setHovered} />)}
  </group>;
}
