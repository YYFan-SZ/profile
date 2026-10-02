"use client";

import { RoundedBox } from "@react-three/drei";
import { ISLAND_Z } from "@/lib/exhibition-route";

const sheets = [
  { x: -1.86, color: "#ddb9a9", tilt: -.055 },
  { x: -.62, color: "#acc4b4", tilt: .045 },
  { x: .62, color: "#b8cdd0", tilt: -.035 },
  { x: 1.86, color: "#e7cca3", tilt: .055 },
];

/** An open-air archive of weekly pages, opposite the typewriter. */
export default function WeeklyIslandDetails() {
  return <group position={[42, -1.82, ISLAND_Z.weekly - 8.5]} rotation={[0, .07, 0]} scale={.78}>
    {[-2.85, 2.85].map(x => <group key={x} position={[x, 0, 0]}>
      <mesh position={[0, .1, 0]} castShadow>
        <cylinderGeometry args={[.34, .42, .2, 24]} />
        <meshStandardMaterial color="#d8c8ac" roughness={.68} />
      </mesh>
      <mesh position={[0, 1.8, 0]} castShadow>
        <cylinderGeometry args={[.075, .09, 3.4, 16]} />
        <meshStandardMaterial color="#b69d70" metalness={.4} roughness={.48} />
      </mesh>
      <mesh position={[0, 3.52, 0]}>
        <sphereGeometry args={[.15, 16, 12]} />
        <meshStandardMaterial color="#cbb48a" metalness={.38} roughness={.5} />
      </mesh>
    </group>)}
    <RoundedBox args={[5.8, .1, .1]} radius={.04} smoothness={3} position={[0, 3.42, 0]} castShadow>
      <meshStandardMaterial color="#b69d70" metalness={.42} roughness={.47} />
    </RoundedBox>

    {sheets.map(({ x, color, tilt }, index) => <group key={color} position={[x, 2.28, .12]} rotation={[0, tilt, tilt * .45]}>
      <RoundedBox args={[1.08, 1.82, .055]} radius={.025} smoothness={3} castShadow>
        <meshStandardMaterial color={color} roughness={.8} />
      </RoundedBox>
      <mesh position={[0, 1.01, .035]} castShadow>
        <boxGeometry args={[.18, .24, .12]} />
        <meshStandardMaterial color="#b69d70" metalness={.45} roughness={.47} />
      </mesh>
      <mesh position={[-.17, .48, .033]}>
        <boxGeometry args={[.5, .04, .009]} />
        <meshStandardMaterial color="#fff8e8" roughness={.9} />
      </mesh>
      {[.19, -.02, -.23, -.44].map((y, line) => <mesh key={y} position={[-.03 + line * .025, y, .034]}>
        <boxGeometry args={[line === 3 ? .54 : .75, .021, .009]} />
        <meshStandardMaterial color="#fff8e8" roughness={.9} />
      </mesh>)}
      {index === 0 && <mesh position={[.31, -.61, .039]} rotation={[Math.PI / 2, 0, -.12]}>
        <cylinderGeometry args={[.11, .11, .014, 24]} />
        <meshStandardMaterial color="#aa7e65" roughness={.6} />
      </mesh>}
    </group>)}

    <RoundedBox args={[4.75, .8, 1.42]} radius={.11} smoothness={4} position={[0, .5, .25]} castShadow receiveShadow>
      <meshPhysicalMaterial color="#9fb9aa" roughness={.55} clearcoat={.12} />
    </RoundedBox>
    <RoundedBox args={[4.78, .07, 1.47]} radius={.025} smoothness={3} position={[0, .94, .25]}>
      <meshStandardMaterial color="#c9b184" metalness={.34} roughness={.52} />
    </RoundedBox>
    {[-1.25, 1.25].map(x => <mesh key={x} position={[x, .52, 1.005]}>
      <boxGeometry args={[.19, .3, .04]} />
      <meshStandardMaterial color="#c9b184" metalness={.4} roughness={.48} />
    </mesh>)}
  </group>;
}
