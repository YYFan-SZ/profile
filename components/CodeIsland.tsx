"use client";
import { ISLAND_Z } from "@/lib/exhibition-route";

// A small open-air workbench: all materials are local and lightweight.
export default function CodeIsland() {
  return <group position={[36,-1.62,ISLAND_Z.projects]}>
    <mesh position={[0,.12,0]} receiveShadow><cylinderGeometry args={[4.6,4.85,.25,64]}/><meshStandardMaterial color="#d8dfd5" roughness={.8}/></mesh>
    <mesh position={[0,.85,0]}><cylinderGeometry args={[1.3,1.6,1.3,32]}/><meshStandardMaterial color="#e6dbc6" roughness={.65}/></mesh>
    <mesh position={[0,1.55,0]} receiveShadow><cylinderGeometry args={[3.7,3.7,.22,64]}/><meshStandardMaterial color="#fff5e3" roughness={.45}/></mesh>
    <mesh position={[0,1.68,0]} rotation={[-Math.PI/2,0,0]}><torusGeometry args={[3.35,.025,8,64]}/><meshStandardMaterial color="#ac9670" metalness={.45} roughness={.5}/></mesh>
    <group position={[0,1.7,-.7]}>
      <mesh position={[0,.15,0]}><boxGeometry args={[.8,.12,.55]}/><meshStandardMaterial color="#9eac9e"/></mesh>
      <mesh position={[0,.48,0]}><boxGeometry args={[.12,.6,.12]}/><meshStandardMaterial color="#9eac9e"/></mesh>
      <mesh position={[0,1.12,0]}><boxGeometry args={[2.3,1.4,.12]}/><meshStandardMaterial color="#a6b6a7" roughness={.6}/></mesh>
      <mesh position={[0,1.12,.07]}><planeGeometry args={[2.08,1.18]}/><meshBasicMaterial color="#253b37"/></mesh>
      {[1.45,1.27,1.09,.91].map((y,i)=><mesh key={y} position={[-.32+(i%2)*.12,y,.08]}><planeGeometry args={[.8+i*.12,.025]}/><meshBasicMaterial color={i%2?"#dfc596":"#9dc5b4"}/></mesh>)}
      <mesh position={[0,.05,1]} rotation={[-.08,0,0]}><boxGeometry args={[1.8,.08,.6]}/><meshStandardMaterial color="#ccd2c6" roughness={.7}/></mesh>
    </group>
    {[-1,1].map(side=><group key={side} position={[side*2.4,1.7,.5]}>
      <mesh position={[0,.13,0]}><boxGeometry args={[.8,.16,.6]}/><meshStandardMaterial color={side<0?"#cfb58e":"#a9bbaa"}/></mesh>
      <mesh position={[.05,.28,.03]} rotation={[0,.15,0]}><boxGeometry args={[.7,.12,.5]}/><meshStandardMaterial color="#eee4cf"/></mesh>
    </group>)}
  </group>;
}
