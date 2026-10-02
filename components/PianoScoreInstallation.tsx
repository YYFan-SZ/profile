"use client";

import { RoundedBox } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

const brass = "#c8af80";
const ink = "#a99576";

function ScorePage({ side }: { side: -1 | 1 }) {
  return <group position={[side * .43, 0, .04]} rotation={[0, side * -.13, side * .025]}>
    <RoundedBox args={[.82, 1.02, .055]} radius={.018} smoothness={3} castShadow>
      <meshStandardMaterial color="#fffaf0" roughness={.8} />
    </RoundedBox>
    <mesh position={[0, 0, .035]}>
      <planeGeometry args={[.73, .91]} />
      <meshStandardMaterial color="#f5eddf" roughness={1} />
    </mesh>
    {[.26, .16, .06, -.04, -.14, -.27, -.37].map((y, i) =>
      <mesh key={i} position={[0, y, .041]}>
        <boxGeometry args={[.59, .006, .004]} />
        <meshBasicMaterial color={ink} transparent opacity={i === 5 ? .42 : .64} />
      </mesh>
    )}
    {[-.16, .12, .25].map((x, i) =>
      <group key={i} position={[x, .08 - (i % 2) * .1, .049]}>
        <mesh rotation={[0, 0, -.42]}>
          <sphereGeometry args={[.027, 8, 6]} />
          <meshBasicMaterial color="#8f785a" />
        </mesh>
        <mesh position={[.024, .067, 0]}>
          <boxGeometry args={[.006, .14, .004]} />
          <meshBasicMaterial color="#8f785a" />
        </mesh>
      </group>
    )}
    <mesh position={[0, -.435, .049]}>
      <boxGeometry args={[.41, .008, .004]} />
      <meshBasicMaterial color={ink} transparent opacity={.4} />
    </mesh>
  </group>;
}

export default function PianoScoreInstallation() {
  const floorInlay = useMemo(() => [0, 1, 2].map(i => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.05, .428, 1.04 + i * .12),
      new THREE.Vector3(-.37, .428, 1.21 + i * .12),
      new THREE.Vector3(.43, .428, 1.26 + i * .12),
      new THREE.Vector3(1.12, .428, 1.08 + i * .12),
    ]);
    return new THREE.TubeGeometry(curve, 32, .007, 5, false);
  }), []);
  useEffect(() => () => floorInlay.forEach(g => g.dispose()), [floorInlay]);

  return <group position={[-3.05, 0, 2.35]}>
    {floorInlay.map((geometry, i) => <mesh key={i} geometry={geometry}>
      <meshStandardMaterial color={brass} metalness={.22} roughness={.68} />
    </mesh>)}

    <RoundedBox args={[1.98, .085, .78]} radius={.04} smoothness={4} position={[0, .475, 0]} castShadow receiveShadow>
      <meshPhysicalMaterial color="#e8dfd2" roughness={.5} clearcoat={.18} />
    </RoundedBox>
    <RoundedBox args={[1.88, .025, .69]} radius={.012} smoothness={3} position={[0, .529, 0]}>
      <meshStandardMaterial color={brass} metalness={.5} roughness={.46} />
    </RoundedBox>
    <RoundedBox args={[1.84, .055, .65]} radius={.024} smoothness={3} position={[0, .571, 0]} castShadow>
      <meshStandardMaterial color="#f8f1e6" roughness={.62} />
    </RoundedBox>

    {[-.65, .65].map(x => <group key={x} position={[x, 0, 0]}>
      <mesh position={[0, .92, -.12]} castShadow>
        <cylinderGeometry args={[.035, .048, .68, 12]} />
        <meshStandardMaterial color={brass} metalness={.52} roughness={.42} />
      </mesh>
      <mesh position={[0, .625, -.12]}>
        <cylinderGeometry args={[.082, .082, .035, 16]} />
        <meshStandardMaterial color="#d7c6a5" metalness={.28} roughness={.55} />
      </mesh>
    </group>)}
    <group position={[0, 1.51, -.12]} rotation={[-.13, 0, 0]}>
      <RoundedBox args={[1.87, 1.13, .075]} radius={.025} smoothness={3} castShadow>
        <meshStandardMaterial color="#d6c3a3" metalness={.14} roughness={.56} />
      </RoundedBox>
      <mesh position={[0, -.54, .075]}>
        <boxGeometry args={[1.82, .025, .075]} />
        <meshStandardMaterial color={brass} metalness={.48} roughness={.47} />
      </mesh>
      <ScorePage side={-1} />
      <ScorePage side={1} />
      <mesh position={[0, 0, .092]}>
        <boxGeometry args={[.016, 1.02, .018]} />
        <meshStandardMaterial color={brass} metalness={.38} roughness={.55} />
      </mesh>
    </group>
  </group>;
}
