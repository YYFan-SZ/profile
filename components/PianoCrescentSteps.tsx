"use client";

import { useEffect, useMemo } from "react";
import * as THREE from "three";

const START = 3.43;
const END = 4.31;
const STEPS = [
  { inner: 5.62, outer: 6.24, base: .13 },
  { inner: 6.2, outer: 6.84, base: -.04 },
  { inner: 6.8, outer: 7.43, base: -.21 },
];

export default function PianoCrescentSteps() {
  const geometry = useMemo(() => STEPS.map(({ inner, outer }) => {
    const shape = new THREE.Shape();
    const segments = 36;
    for (let i = 0; i <= segments; i++) {
      const angle = THREE.MathUtils.lerp(START, END, i / segments);
      const x = Math.cos(angle) * outer, y = Math.sin(angle) * outer;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    for (let i = segments; i >= 0; i--) {
      const angle = THREE.MathUtils.lerp(START, END, i / segments);
      shape.lineTo(Math.cos(angle) * inner, Math.sin(angle) * inner);
    }
    shape.closePath();
    const stone = new THREE.ExtrudeGeometry(shape, {
      depth: .17, bevelEnabled: true, bevelSize: .025,
      bevelThickness: .018, bevelSegments: 3, curveSegments: 36,
    });
    stone.rotateX(-Math.PI / 2);
    const edge = new THREE.CatmullRomCurve3(Array.from({ length: 37 }, (_, i) => {
      const angle = THREE.MathUtils.lerp(START, END, i / 36);
      const radius = outer - .095;
      return new THREE.Vector3(Math.cos(angle) * radius, .19, -Math.sin(angle) * radius);
    }));
    const trim = new THREE.TubeGeometry(edge, 72, .012, 6, false);
    return { stone, trim };
  }), []);
  useEffect(() => () => geometry.forEach(({ stone, trim }) => { stone.dispose(); trim.dispose(); }), [geometry]);

  return <group>
    {geometry.map(({ stone, trim }, i) => <group key={i} position={[0, STEPS[i].base, 0]}>
      <mesh geometry={stone} castShadow receiveShadow>
        <meshPhysicalMaterial color={i === 0 ? "#f4ede1" : "#e9e0d2"} roughness={.56} clearcoat={.1} />
      </mesh>
      <mesh geometry={trim}>
        <meshStandardMaterial color="#cbb590" metalness={.26} roughness={.6} />
      </mesh>
    </group>)}
  </group>;
}
