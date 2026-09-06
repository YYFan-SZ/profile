"use client";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { useEntranceLayout } from "@/lib/use-entrance-layout";

export default function GardenPortal() {
  const {radius,innerX,innerY}=useEntranceLayout();
  const parts=useMemo(()=>{
    // The curve rises almost from the floor, rather than sitting on tall uprights.
    const center=0,z=-10.8,spring=.55,rx=radius,ry=12.3;
    const outerX=rx*1.14,outerY=ry*1.18;
    const outline=new THREE.Shape();outline.moveTo(center-outerX,0);outline.lineTo(center-outerX,spring);
    outline.absellipse(center,spring,outerX,outerY,Math.PI,0,true,0);
    outline.lineTo(center+outerX,0);outline.lineTo(center+innerX,0);outline.lineTo(center+innerX,spring);
    outline.absellipse(center,spring,innerX,innerY,0,Math.PI,false,0);outline.lineTo(center-innerX,0);outline.closePath();
    const arch=new THREE.ExtrudeGeometry(outline,{depth:2.1,bevelEnabled:true,bevelSize:.32,bevelThickness:.22,bevelSegments:10,curveSegments:144});
    return {arch,center,z,rx};
  },[radius,innerX,innerY]);
  useEffect(()=>()=>parts.arch.dispose(),[parts]);
  return <group>
    <group position={[0,-1.75,parts.z]}>
      <mesh geometry={parts.arch} castShadow receiveShadow><meshStandardMaterial color="#fff2dc" roughness={.36}/></mesh>
      {[parts.center-parts.rx+.9,parts.center+parts.rx-.9].map(x=><group key={x} position={[x,0,1]}>
        <mesh position={[0,.16,0]} castShadow><boxGeometry args={[2,.3,2.65]}/><meshStandardMaterial color="#f1e4cd" roughness={.5}/></mesh>
      </group>)}
    </group>
  </group>;
}


