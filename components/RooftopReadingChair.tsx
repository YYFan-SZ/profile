"use client";

import { RoundedBox } from "@react-three/drei";

// A small lounge chair for the terrace's right-hand work corner.
// Local +Z is the back of the chair; local -Z is its visible front.
// The terrace sets its facing direction to keep the seat visible from the route.
export default function RooftopReadingChair() {
  return <group>
    {[-.43, .43].flatMap(x => [-.38, .38].map(z => <group key={`${x}/${z}`} position={[x, .29, z]}>
      <mesh castShadow>
        <cylinderGeometry args={[.045, .065, .55, 12]} />
        <meshStandardMaterial color="#c4aa7d" metalness={.46} roughness={.48} />
      </mesh>
      <mesh position={[0, -.27, 0]}>
        <cylinderGeometry args={[.07, .07, .035, 12]} />
        <meshStandardMaterial color="#b9a078" metalness={.38} roughness={.55} />
      </mesh>
    </group>))}
    <RoundedBox args={[1.25, .21, 1.12]} radius={.09} smoothness={4} position={[0, .63, 0]} castShadow receiveShadow>
      <meshPhysicalMaterial color="#f4ecdf" roughness={.63} clearcoat={.12} />
    </RoundedBox>
    <RoundedBox args={[1.13, .12, 1.02]} radius={.055} smoothness={4} position={[0, .77, -.035]} castShadow>
      <meshStandardMaterial color="#fff8ea" roughness={.85} />
    </RoundedBox>
    <RoundedBox args={[1.27, .82, .18]} radius={.085} smoothness={4} position={[0, 1.09, .48]} rotation={[-.14, 0, 0]} castShadow>
      <meshPhysicalMaterial color="#efe5d5" roughness={.72} clearcoat={.08} />
    </RoundedBox>
    <RoundedBox args={[1.1, .64, .08]} radius={.04} smoothness={3} position={[0, 1.13, .366]} rotation={[-.14, 0, 0]}>
      <meshStandardMaterial color="#fbf4e7" roughness={.9} />
    </RoundedBox>
    {[-.59, .59].map(x => <RoundedBox key={x} args={[.1, .35, .73]} radius={.045} smoothness={3} position={[x, .86, .08]} castShadow>
      <meshStandardMaterial color="#d4c19e" metalness={.12} roughness={.64} />
    </RoundedBox>)}
  </group>;
}
