"use client";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";

export default function ColonnadeIsland({ position = [38,-2.48,-77], pavilion = false, length = 1, decorations = true }: {
  position?: [number,number,number]; pavilion?: boolean; length?: number; decorations?: boolean;
}) {
  const shorelinePhase=position[2]*.07;
  const parts=useMemo(()=>{
    const shape=new THREE.Shape();
    for(let i=0;i<=100;i++){
      const a=i/100*Math.PI*2;
      const r=1+.075*Math.sin(a*3+shorelinePhase)+.04*Math.cos(a*5);
      const x=Math.cos(a)*8.5*r, y=Math.sin(a)*6.2*length*r;
      if(i===0)shape.moveTo(x,y);
      else shape.lineTo(x,y);
    }
    shape.closePath();
    const island=new THREE.ExtrudeGeometry(shape,{depth:.66,bevelEnabled:true,bevelSize:.35,bevelThickness:.18,bevelSegments:4,curveSegments:60});island.rotateX(-Math.PI/2);
    return {island};
  },[shorelinePhase,length]);
  useEffect(()=>()=>parts.island.dispose(),[parts]);
  return <group>
    <group position={position}>
      <mesh geometry={parts.island} receiveShadow><meshStandardMaterial color="#eee0c3" roughness={.9}/></mesh>
      <mesh geometry={parts.island} position={[0,-.3,0]} scale={[1.06,1,1.06]} receiveShadow><meshStandardMaterial color="#d8d5be" roughness={.95}/></mesh>
      <mesh geometry={parts.island} position={[0,-.5,0]} scale={[1.14,.7,1.12]} receiveShadow><meshStandardMaterial color="#afbeb5" roughness={.95}/></mesh>
      {pavilion && <group position={[0,.7,-1.5]}>
        <mesh position={[0,.1,0]} receiveShadow><boxGeometry args={[8,.2,5]}/><meshStandardMaterial color="#f4ead8" roughness={.55}/></mesh>
        {[-3.3,3.3].flatMap(x=>[-1.8,1.8].map(z=><group key={`${x}-${z}`} position={[x,0,z]}>
          <mesh position={[0,1.85,0]} castShadow><cylinderGeometry args={[.19,.24,3.5,24]}/><meshStandardMaterial color="#f8eedc" roughness={.45}/></mesh>
          {[.28,3.5].map(y=><mesh key={y} position={[0,y,0]}><cylinderGeometry args={[.34,.34,.16,24]}/><meshStandardMaterial color="#dfcba8" roughness={.45}/></mesh>)}
        </group>))}
        {[-1.9,1.9].map(z=><RoundedBox key={z} args={[8.3,.24,.32]} radius={.055} smoothness={3} position={[0,3.7,z]} castShadow><meshStandardMaterial color="#e6d6b9" roughness={.5}/></RoundedBox>)}
        {Array.from({length:9},(_,i)=><RoundedBox key={i} args={[.2,.17,5]} radius={.035} smoothness={2} position={[-3.6+i*.9,3.9,0]} castShadow><meshStandardMaterial color="#c9b38e" roughness={.65}/></RoundedBox>)}
        <mesh position={[-2,.55,0]} castShadow><boxGeometry args={[2.2,.7,.65]}/><meshStandardMaterial color="#d6bf99" roughness={.65}/></mesh>
      </group>}
      {decorations && <>
      {[[-6,.8,-2],[6,.8,1],[4,.8,-4]].map(([x,y,z],i)=><group key={`shore-${i}`} position={[x,y,z]}>
        <mesh rotation={[.2,i*.7,.12]} scale={[1.1,.55,.8]} castShadow><dodecahedronGeometry args={[.65,1]}/><meshStandardMaterial color="#c8c7b6" roughness={1}/></mesh>
        <mesh position={[.65,-.08,.4]} scale={[.55,.3,.45]}><sphereGeometry args={[1,14,8]}/><meshStandardMaterial color="#ded8c5" roughness={1}/></mesh>
        {[0,1,2].map(j=><mesh key={j} position={[-.4+j*.24,.18,-.5]} scale={[.35,.3+j*.06,.28]} castShadow><sphereGeometry args={[1,12,8]}/><meshStandardMaterial color={j%2?"#8f9f80":"#b1bb96"} roughness={.95}/></mesh>)}
      </group>)}
      {[[-5,.9,1],[-4.3,.85,2.2],[-5.6,.82,2.4]].map(([x,y,z],i)=><mesh key={i} position={[x,y,z]} scale={[.65,.4,.5]}><sphereGeometry args={[1,16,12]}/><meshStandardMaterial color="#e6e4d7" roughness={.95}/></mesh>)}
      {[0,1,2].map(i=><group key={i} position={[-5+i*.6,.7,-1-i*.5]}>
        <mesh position={[0,.65,0]} rotation={[0,0,.15-i*.1]}><cylinderGeometry args={[.025,.06,1.3,8]}/><meshStandardMaterial color="#a89a75" roughness={.9}/></mesh>
        {[0,1,2,3,4].map(j=><mesh key={j} position={[Math.cos(j*2.4)*.35,1.05+j*.09,Math.sin(j*2.4)*.3]} scale={[.3,.16,.24]}><sphereGeometry args={[1,10,8]}/><meshStandardMaterial color={j%2?'#b5c1a5':'#d2d9bb'} roughness={.9}/></mesh>)}
      </group>)}
      {length > 1 && [-1,1].map((end,i)=><group key={end} position={[end*2.2,.78,end*(6.2*length-1.9)]}>
        <mesh rotation={[.1,i*.8,.08]} scale={[1.2,.42,.8]} castShadow>
          <dodecahedronGeometry args={[.75,1]}/><meshStandardMaterial color="#d5d1bd" roughness={1}/>
        </mesh>
        {[0,1,2].map(j=><mesh key={j} position={[-.65+j*.38,.12,-.5+j*.13]} scale={[.34,.3+j*.06,.3]}>
          <sphereGeometry args={[1,12,8]}/><meshStandardMaterial color={j%2?"#aab99b":"#c6cfad"} roughness={.95}/>
        </mesh>)}
      </group>)}
      </>}
    </group>
  </group>;
}

