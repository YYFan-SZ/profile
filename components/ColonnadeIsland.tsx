"use client";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

export default function ColonnadeIsland() {
  const parts=useMemo(()=>{
    const shape=new THREE.Shape();
    for(let i=0;i<=100;i++){const a=i/100*Math.PI*2,r=1+.075*Math.sin(a*3)+.04*Math.cos(a*5),x=Math.cos(a)*8.5*r,y=Math.sin(a)*6.2*r;i?shape.lineTo(x,y):shape.moveTo(x,y);}shape.closePath();
    const island=new THREE.ExtrudeGeometry(shape,{depth:.66,bevelEnabled:true,bevelSize:.35,bevelThickness:.18,bevelSegments:4,curveSegments:60});island.rotateX(-Math.PI/2);
    return {island};
  },[]);
  useEffect(()=>()=>parts.island.dispose(),[parts]);
  return <group>
    <group position={[38,-2.48,-77]}>
      <mesh geometry={parts.island} receiveShadow><meshStandardMaterial color="#eee0c3" roughness={.9}/></mesh>
      <mesh geometry={parts.island} position={[0,-.3,0]} scale={[1.06,1,1.06]} receiveShadow><meshStandardMaterial color="#d8d5be" roughness={.95}/></mesh>
      {[[-5,.9,1],[-4.3,.85,2.2],[-5.6,.82,2.4]].map(([x,y,z],i)=><mesh key={i} position={[x,y,z]} scale={[.65,.4,.5]}><sphereGeometry args={[1,16,12]}/><meshStandardMaterial color="#e6e4d7" roughness={.95}/></mesh>)}
      {[0,1,2].map(i=><group key={i} position={[-5+i*.6,.7,-1-i*.5]}>
        <mesh position={[0,.65,0]} rotation={[0,0,.15-i*.1]}><cylinderGeometry args={[.025,.06,1.3,8]}/><meshStandardMaterial color="#a89a75" roughness={.9}/></mesh>
        {[0,1,2,3,4].map(j=><mesh key={j} position={[Math.cos(j*2.4)*.35,1.05+j*.09,Math.sin(j*2.4)*.3]} scale={[.3,.16,.24]}><sphereGeometry args={[1,10,8]}/><meshStandardMaterial color={j%2?'#b5c1a5':'#d2d9bb'} roughness={.9}/></mesh>)}
      </group>)}
    </group>
  </group>;
}

