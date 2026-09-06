"use client";
import { useEffect, useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { ExhibitionMotion } from "./ExhibitionStage";

export default function CoastalTerrace({ motion }: { motion: RefObject<ExhibitionMotion> }) {
  const boat = useRef<THREE.Group>(null);
  const birds = useRef<THREE.Group>(null);
  const boatSail=useMemo(()=>{const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute([.03,.35,0,.03,4.6,0,2.2,.35,.08],3));g.computeVertexNormals();return g;},[]);
  useEffect(()=>()=>boatSail.dispose(),[boatSail]);
  useFrame(({clock},delta)=>{
    if(motion.current.reduced || !motion.current.visible)return;
    const t=clock.elapsedTime;
    if(boat.current){boat.current.position.y=-2.01+Math.sin(t*.6)*.08;boat.current.rotation.z=Math.sin(t*.45)*.018;}
    if(birds.current)birds.current.rotation.y+=Math.min(delta,.05)*.008;
  });
  return <group>
    <group ref={boat} position={[-15,-2.01,-51]} rotation={[0,.3,0]} scale={.6}>
      <mesh scale={[2.6,.35,.8]}><sphereGeometry args={[1,24,12]} /><meshStandardMaterial color="#f8f1e4" roughness={.5} /></mesh>
      <mesh position={[0,2.3,0]}><cylinderGeometry args={[.027,.035,4.8,10]} /><meshStandardMaterial color="#bba782" roughness={.5} /></mesh>
      <mesh geometry={boatSail}><meshStandardMaterial color="#fffaf0" side={THREE.DoubleSide} roughness={.85} /></mesh>
    </group>
    <group ref={birds} position={[0,0,-60]}>
      {[[-11,10,0],[1,12,-9],[8,9,-4]].map(([x,y,z],i)=><group key={i} position={[x,y,z]} rotation={[.15,i*.3,.12]}>
        {[-1,1].map(side=><mesh key={side} position={[side*.35,0,0]} rotation={[0,0,side*(Math.PI/2-.22)]}><capsuleGeometry args={[.028,.68,2,6]} /><meshStandardMaterial color="#81999e" roughness={.8} /></mesh>)}
      </group>)}
    </group>
  </group>;
}
