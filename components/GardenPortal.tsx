"use client";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { portalRadius } from "@/lib/exhibition-architecture";

export default function GardenPortal() {
  const aspect = useThree(s => s.size.width / Math.max(1, s.size.height));
  const parts=useMemo(()=>{
    const center=0,z=-10.8,spring=5.6,rx=portalRadius(aspect),ry=5.4;
    const outline=new THREE.Shape();outline.moveTo(center-rx,0);outline.lineTo(center-rx,spring);
    outline.absellipse(center,spring,rx,ry,Math.PI,0,true,0);
    outline.lineTo(center+rx,0);outline.lineTo(center+rx-1.35,0);outline.lineTo(center+rx-1.35,spring);
    outline.absellipse(center,spring,rx-1.35,ry-1.35,0,Math.PI,false,0);outline.lineTo(center-rx+1.35,0);outline.closePath();
    const arch=new THREE.ExtrudeGeometry(outline,{depth:2.1,bevelEnabled:true,bevelSize:.24,bevelThickness:.16,bevelSegments:6,curveSegments:100});
    const trims=[.25,1.12].map(inset=>new THREE.TubeGeometry(new THREE.CatmullRomCurve3(Array.from({length:120},(_,i)=>{
      const a=Math.PI-i/119*Math.PI;return new THREE.Vector3(center+(rx-inset)*Math.cos(a),spring+(ry-inset)*Math.sin(a),2.30);
    })),160,.06,10,false));
    return {arch,trims,center,z,rx};
  },[aspect]);
  useEffect(()=>()=>[parts.arch,...parts.trims].forEach(g=>g.dispose()),[parts]);
  return <group>
    <group position={[0,-1.75,parts.z]}>
      <mesh geometry={parts.arch} castShadow receiveShadow><meshStandardMaterial color="#fff2dc" roughness={.36}/></mesh>
      {parts.trims.map((g,i)=><mesh geometry={g} key={i}><meshStandardMaterial color={i?'#ffe6bb':'#fff9eb'} emissive={i?'#ffdfa0':'#000000'} emissiveIntensity={i ? .35 : 0} metalness={i ? .2 : 0} roughness={.35}/></mesh>)}
      {[parts.center-parts.rx+.575,parts.center+parts.rx-.575].map(x=><group key={x} position={[x,0,1]}>
        <mesh position={[0,.16,0]} castShadow><boxGeometry args={[2,.3,2.65]}/><meshStandardMaterial color="#f1e4cd" roughness={.5}/></mesh>
        {[-.17,.17].map(dx=><mesh key={dx} position={[dx,3.3,1.3]}><cylinderGeometry args={[.04,.04,6.1,10]}/><meshStandardMaterial color="#fff9eb" roughness={.5}/></mesh>)}
      </group>)}
    </group>
  </group>;
}

