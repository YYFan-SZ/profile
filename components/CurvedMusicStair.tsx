"use client";
import { useEffect, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { portalRadius, portalGalleryJoin } from "@/lib/exhibition-architecture";

export default function CurvedMusicStair() {
  const aspect = useThree(s => s.size.width / Math.max(1, s.size.height));
  const parts = useMemo(() => {
    const stepCount = 48;
    // A broad architectural sweep stays on the right, with no spiral return.
    const flight = new THREE.CubicBezierCurve3(
      new THREE.Vector3(9.8,0,-2.2), new THREE.Vector3(11.5,0,-7.4),
      new THREE.Vector3(7.4,0,-10.3), new THREE.Vector3(4.8,0,-11.2),
    );
    const at = (t: number) => { const p=flight.getPointAt(t); p.y=-1.75+t*6.72; return p; };
    const end = at(1);
    const landingLead = end.clone().addScaledVector(flight.getTangent(1),1.7);
    const pier = portalRadius(aspect)-2.1;
    // Ascend toward the sea and continue outward without a hairpin landing.
    const gallery = new THREE.CatmullRomCurve3([
      end, landingLead, new THREE.Vector3(5.5,4.97,-16.5),
      new THREE.Vector3(Math.max(12,pier+.8),4.97,-19.5),
      new THREE.Vector3(23,4.97,-22), new THREE.Vector3(29,4.97,-24.5),
    ]);
    const points = Array.from({length:169},(_,i)=>at(i/168));
    points.push(...Array.from({length:220},(_,i)=>gallery.getPoint((i+1)/220)));
    const vertices:number[]=[],indices:number[]=[];
    const sides:[THREE.Vector3[],THREE.Vector3[]]=[[],[]], up=new THREE.Vector3(0,1,0);
    // A single continuous slab and two shared edges cover flight, landing and gallery.
    points.forEach((p,i)=>{
      const side=points[Math.min(i+1,points.length-1)].clone().sub(points[Math.max(0,i-1)]).cross(up).normalize();
      for(const [sign,drop] of [[-1,0],[1,0],[-1,.28],[1,.28]]) vertices.push(p.x+side.x*sign*1.1,p.y-drop,p.z+side.z*sign*1.1);
      sides.forEach((list,j)=>list.push(p.clone().addScaledVector(side,j?1.065:-1.065).addScaledVector(up,1.04)));
      if(i<points.length-1){const a=i*4,b=a+4;indices.push(a,b,a+1,a+1,b,b+1,a+2,a+3,b+2,a+3,b+3,b+2,a,a+2,b,a+2,b+2,b,a+1,b+1,a+3,a+3,b+1,b+3);}
    });
    const last=(points.length-1)*4;
    indices.push(0,1,2,1,3,2,last,last+2,last+1,last+1,last+2,last+3);
    const deck=new THREE.BufferGeometry();
    deck.setAttribute("position",new THREE.Float32BufferAttribute(vertices,3));deck.setIndex(indices);deck.computeVertexNormals();
    const steps=Array.from({length:stepCount},(_,i)=>{
      const a=i/stepCount,b=Math.min(1,(i+1.015)/stepCount),s=new THREE.Shape();
      const corners=[[a,-1],[b,-1],[b,1],[a,1]].map(([t,sign])=>
        at(t).addScaledVector(flight.getTangentAt(t).cross(up).normalize(),sign*1.1));
      corners.forEach((p,j)=>j?s.lineTo(p.x,-p.z):s.moveTo(p.x,-p.z));s.closePath();
      const g=new THREE.ExtrudeGeometry(s,{depth:.16,bevelEnabled:true,bevelSize:.024,bevelThickness:.01,bevelSegments:3,curveSegments:10});
      g.rotateX(-Math.PI/2);g.translate(0,-1.75+(i+1)*(6.72/stepCount)-.16,0);return g;
    });
    const curves=sides.map(p=>new THREE.CatmullRomCurve3(p));
    const finish=new THREE.LineCurve3(sides[0][sides[0].length-1],sides[1][sides[1].length-1]);
    const rails=[...curves.map(c=>new THREE.TubeGeometry(c,420,.032,10,false)),new THREE.TubeGeometry(finish,4,.032,10,false)];
    const posts=curves.flatMap(c=>{const n=Math.ceil(c.getLength()/.72);return Array.from({length:n+1},(_,i)=>c.getPointAt(i/n));});
    posts.push(...[.25,.5,.75].map(t=>finish.getPoint(t)));
    const join = new THREE.Vector3(portalGalleryJoin(aspect),4.97,-9.75);
    const shoulder = gallery.getPoint(.075);
    const span = join.clone().sub(shoulder);
    return {deck,steps,rails,posts,join,
      shoulderCenter: shoulder.clone().add(join).multiplyScalar(.5),
      shoulderLength: span.length()+.5, shoulderYaw: -Math.atan2(span.z,span.x),
      columns:[.43,.64,.83,1].map(t=>gallery.getPoint(t))};
  },[aspect]);
  useEffect(()=>()=>[parts.deck,...parts.steps,...parts.rails].forEach(g=>g.dispose()),[parts]);
  return <group>
    {/* The landing bears into a solid pier that physically meets the arch. */}
    <mesh position={[parts.shoulderCenter.x,4.67,parts.shoulderCenter.z]} rotation={[0,parts.shoulderYaw,0]} castShadow receiveShadow>
      <boxGeometry args={[parts.shoulderLength,.36,2.15]}/><meshStandardMaterial color="#fff2dc" roughness={.4}/>
    </mesh>
    <mesh position={[parts.join.x,1.68,parts.join.z]} castShadow receiveShadow>
      <boxGeometry args={[1.05,6.86,2.1]}/><meshStandardMaterial color="#fff2dc" roughness={.4}/>
    </mesh>
    {[parts.deck,...parts.steps].map((g,i)=><mesh key={i} geometry={g} castShadow receiveShadow><meshStandardMaterial color="#f8edd9" roughness={.42} side={THREE.DoubleSide}/></mesh>)}
    {parts.rails.map((g,i)=><mesh key={i} geometry={g}><meshStandardMaterial color="#c8ae7f" metalness={.48} roughness={.32}/></mesh>)}
    {parts.posts.map((p,i)=><mesh key={i} position={[p.x,p.y-.52,p.z]}><cylinderGeometry args={[.017,.017,1.04,6]}/><meshStandardMaterial color="#c8ae7f" metalness={.42} roughness={.35}/></mesh>)}
    {parts.columns.map((p,i)=><group key={i} position={[p.x,-1.75,p.z]}>
      <mesh position={[0,3.12,0]} castShadow receiveShadow><cylinderGeometry args={[.29,.37,6.24,24]}/><meshStandardMaterial color="#fff1dc" roughness={.48}/></mesh>
      <mesh position={[0,6.28,0]}><cylinderGeometry args={[.58,.29,.32,32]}/><meshStandardMaterial color="#fff1dc" roughness={.48}/></mesh>
      <mesh position={[0,.09,0]}><cylinderGeometry args={[.53,.64,.18,32]}/><meshStandardMaterial color="#f5e5cb" roughness={.5}/></mesh>
    </group>)}
  </group>;
}

