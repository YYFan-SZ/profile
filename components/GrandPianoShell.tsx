"use client";

import { useEffect, useMemo } from "react";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// The original interactive keyboard sits at the front of this complete case.
// Separate lid, harp, legs, lyre and pedals retain a readable piano silhouette.
export default function GrandPianoShell() {
  const geometry = useMemo(() => {
    const outline = new THREE.Shape();
    outline.moveTo(-1.77, .59);
    outline.lineTo(1.77, .59);
    outline.lineTo(1.77, 1.3);
    outline.bezierCurveTo(1.75, 2.3, .43, 2.25, .64, 3.35);
    outline.bezierCurveTo(.82, 4.24, -.32, 4.7, -1.23, 4.3);
    outline.bezierCurveTo(-1.78, 4.08, -1.77, 3.62, -1.77, 3.1);
    outline.closePath();
    const extrude = (depth: number) => {
      const g = new THREE.ExtrudeGeometry(outline, {
        depth, bevelEnabled: true, bevelSize: .026, bevelThickness: .018,
        bevelSegments: 3, curveSegments: 48,
      });
      g.rotateX(-Math.PI / 2);
      return g;
    };
    const body = extrude(.4);
    body.translate(0, -.28, 0);
    const lid = extrude(.065);
    lid.translate(1.77, 0, 0);
    const soundboard = extrude(.025);
    soundboard.scale(.945, 1, .945);
    soundboard.translate(0, .13, -.06);
    const strings = new THREE.BufferGeometry();
    const vertices: number[] = [];
    for (let i = 0; i < 46; i++) {
      const x = -1.52 + i * .064;
      const length = 2.45 - Math.max(0, x + .7) * .75;
      vertices.push(x, .23, -.98, x + .12, .23, -.98 - length);
    }
    strings.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    const propTop = new THREE.Vector3(2.75,0,-1.65).applyAxisAngle(new THREE.Vector3(0,0,1),.53).add(new THREE.Vector3(-1.77,.22,0));
    const prop = new THREE.TubeGeometry(new THREE.LineCurve3(new THREE.Vector3(.8,.20,-1.65),propTop),1,.025,12,false);
    return { body, lid, soundboard, strings, prop };
  }, []);
  useEffect(() => () => Object.values(geometry).forEach(g => g.dispose()), [geometry]);
  const ivory = "#fff4de";
  const brass = "#c8a66a";
  return (
    <group>
      <mesh geometry={geometry.body} castShadow receiveShadow>
        <meshPhysicalMaterial color={ivory} roughness={.22} clearcoat={.85} clearcoatRoughness={.15} />
      </mesh>
      <mesh geometry={geometry.soundboard} receiveShadow>
        <meshStandardMaterial color="#d2b880" roughness={.48} metalness={.25} />
      </mesh>
      <lineSegments geometry={geometry.strings}>
        <lineBasicMaterial color="#f6df9d" transparent opacity={.85} />
      </lineSegments>
      {[-1.25, -.6, .08].map((x, i) => (
        <mesh key={x} position={[x, .25, -2.05 + i * .12]} rotation={[0, -.06, 0]}>
          <boxGeometry args={[.045, .045, 2.2 - i * .3]} />
          <meshStandardMaterial color={brass} roughness={.3} metalness={.65} />
        </mesh>
      ))}
      <group position={[-1.77, .22, 0]} rotation={[0, 0, .53]}>
        <mesh geometry={geometry.lid} castShadow>
          <meshPhysicalMaterial color={ivory} roughness={.19} clearcoat={1} clearcoatRoughness={.12} />
        </mesh>
        <mesh geometry={geometry.lid} position={[0, -.022, 0]} scale={[1.004, .15, 1.004]}>
          <meshStandardMaterial color={brass} metalness={.68} roughness={.3} />
        </mesh>
      </group>
      <mesh geometry={geometry.prop} castShadow>
        <meshStandardMaterial color={brass} metalness={.65} roughness={.28} />
      </mesh>
      {[[-1.48, .18], [1.48, .18], [-1.05, -3.55]].map(([x, z]) => (
        <group key={`${x}/${z}`} position={[x, -.25, z]}>
          <RoundedBox args={[.28,.16,.28]} radius={.035} smoothness={3} position={[0,-.06,0]} castShadow>
            <meshPhysicalMaterial color={ivory} roughness={.25} clearcoat={.65}/>
          </RoundedBox>
          <mesh position={[0, -.56, 0]} rotation={[0,Math.PI/4,0]} castShadow>
            <cylinderGeometry args={[.15, .085, 1.04, 4]} />
            <meshPhysicalMaterial color={ivory} roughness={.27} clearcoat={.6} />
          </mesh>
          <mesh position={[0, -1.08, 0]}>
            <cylinderGeometry args={[.085, .085, .13, 16]} />
            <meshStandardMaterial color={brass} metalness={.65} roughness={.27} />
          </mesh>
          <mesh position={[0, -1.15, .03]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[.09, .09, .1, 16]} />
            <meshStandardMaterial color={brass} metalness={.65} roughness={.32} />
          </mesh>
        </group>
      ))}
      <RoundedBox args={[.62,.14,.23]} radius={.035} smoothness={3} position={[0,-.31,-.19]} castShadow>
        <meshPhysicalMaterial color={ivory} roughness={.25} clearcoat={.6}/>
      </RoundedBox>
      {[-.17, .17].map(x => (
        <RoundedBox key={x} args={[.09, .84, .09]} radius={.025} smoothness={3}
          position={[x, -.77, -.18]} rotation={[-.07, 0, -Math.sign(x)*.12]} castShadow>
          <meshPhysicalMaterial color={ivory} clearcoat={.6} roughness={.25} />
        </RoundedBox>
      ))}
      <RoundedBox args={[.52, .12, .22]} radius={.035} smoothness={3} position={[0, -1.21, -.10]} castShadow>
        <meshStandardMaterial color={ivory} roughness={.3} />
      </RoundedBox>
      {[-.16, 0, .16].map(x => (
        <RoundedBox key={x} args={[.095, .04, .23]} radius={.018} smoothness={3} position={[x, -1.29, .045]} rotation={[-.08,0,0]} castShadow>
          <meshStandardMaterial color={brass} metalness={.7} roughness={.24} />
        </RoundedBox>
      ))}
      <RoundedBox args={[3.45, .075, .055]} radius={.015} smoothness={2} position={[0, .14, -.55]}>
        <meshStandardMaterial color={brass} roughness={.32} metalness={.55} />
      </RoundedBox>
    </group>
  );
}
