"use client";

import { RoundedBox } from "@react-three/drei";
import { ISLAND_Z } from "@/lib/exhibition-route";

const keyRows = [11, 10, 9];

/** A single, readable object for the weekly journal island. Front faces +Z. */
export default function WeeklyTypewriter() {
  return <group position={[43.2, -1.66, ISLAND_Z.weekly - 3.5]} rotation={[0, -.32, 0]} scale={1.02}>
    {[[-1.7, -1], [1.7, -1], [-1.7, .95], [1.7, .95]].map(([x, z], i) => <mesh key={i} position={[x, .11, z]} castShadow>
      <cylinderGeometry args={[.19, .22, .22, 16]} />
      <meshStandardMaterial color="#b3a789" metalness={.22} roughness={.68} />
    </mesh>)}

    <RoundedBox args={[4.5, .24, 2.85]} radius={.1} smoothness={4} position={[0, .3, 0]} castShadow receiveShadow>
      <meshStandardMaterial color="#b29b83" metalness={.12} roughness={.63} />
    </RoundedBox>
    <RoundedBox args={[4.25, .83, 1.58]} radius={.2} smoothness={4} position={[0, .79, -.58]} castShadow>
      <meshPhysicalMaterial color="#9fbbae" roughness={.46} clearcoat={.24} />
    </RoundedBox>
    <RoundedBox args={[3.95, .13, 1.32]} radius={.055} smoothness={3} position={[0, .73, .58]} rotation={[.14, 0, 0]} castShadow>
      <meshStandardMaterial color="#bdcfc0" roughness={.59} />
    </RoundedBox>

    {keyRows.flatMap((count, row) => Array.from({ length: count }, (_, col) => {
      const x = (col - (count - 1) / 2) * .32;
      const z = .16 + row * .35;
      return <group key={`${row}-${col}`} position={[x, .835 - row * .05, z]}>
        <mesh position={[0, -.038, 0]} castShadow>
          <cylinderGeometry args={[.122, .135, .075, 12]} />
          <meshStandardMaterial color="#bba77f" metalness={.32} roughness={.49} />
        </mesh>
        <mesh position={[0, .018, 0]} castShadow>
          <cylinderGeometry args={[.107, .107, .055, 12]} />
          <meshStandardMaterial color="#fff8e9" roughness={.39} />
        </mesh>
      </group>;
    }))}
    <RoundedBox args={[1.92, .08, .22]} radius={.035} smoothness={3} position={[0, .65, 1.21]} castShadow>
      <meshStandardMaterial color="#fff8e9" roughness={.4} />
    </RoundedBox>

    <mesh position={[0, 1.38, -1.05]} rotation={[0, 0, Math.PI / 2]} castShadow>
      <cylinderGeometry args={[.23, .23, 3.92, 24]} />
      <meshStandardMaterial color="#a6aaa0" metalness={.13} roughness={.7} />
    </mesh>
    {[-2.07, 2.07].map(x => <mesh key={x} position={[x, 1.38, -1.05]} rotation={[0, 0, Math.PI / 2]} castShadow>
      <cylinderGeometry args={[.36, .36, .18, 24]} />
      <meshStandardMaterial color="#c5ae82" metalness={.45} roughness={.38} />
    </mesh>)}
    <RoundedBox args={[2.55, 1.82, .055]} radius={.025} smoothness={2} position={[0, 2.31, -1.05]} rotation={[-.08, 0, 0]} castShadow>
      <meshStandardMaterial color="#fffbf0" roughness={.91} side={2} />
    </RoundedBox>
    {[2.66, 2.37, 2.08, 1.79].map((y, i) => <mesh key={i} position={[-.16 + (i % 2) * .08, y, -.99]}>
      <boxGeometry args={[i === 0 ? 1.53 : 1.95, .019, .012]} />
      <meshStandardMaterial color={i === 0 ? "#b99d75" : "#c9c2b3"} roughness={.8} />
    </mesh>)}
    <mesh position={[0, 1.43, -.73]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[.035, .035, 3.28, 12]} />
      <meshStandardMaterial color="#b89e75" metalness={.5} roughness={.38} />
    </mesh>
    <mesh position={[2.04, 1.06, -.74]} rotation={[0, 0, -.38]} castShadow>
      <cylinderGeometry args={[.05, .06, .95, 12]} />
      <meshStandardMaterial color="#b89e75" metalness={.5} roughness={.38} />
    </mesh>
  </group>;
}
