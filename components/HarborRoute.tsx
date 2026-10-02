"use client";

import * as THREE from "three";
import { useEffect, useMemo } from "react";
import { RoundedBox } from "@react-three/drei";
import { harborRoute } from "@/lib/exhibition-route";
import { useArchitectureScale } from "./BlenderExhibitionAssets";
import RooftopWorkbench from "./RooftopWorkbench";
import RooftopReadingChair from "./RooftopReadingChair";

type Point = [number, number, number];
function Beam({ from, to, width = 3.2, depth = .24, color = "#f8eee0" }: {
  from: Point; to: Point; width?: number; depth?: number; color?: string;
}) {
  const a = new THREE.Vector3(...from), b = new THREE.Vector3(...to);
  const direction = b.clone().sub(a);
  return <RoundedBox args={[width,depth,direction.length()+.08]} radius={Math.min(.065,depth*.22)} smoothness={3} position={a.clone().add(b).multiplyScalar(.5)}
    quaternion={new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,0,1),direction.clone().normalize())}
    receiveShadow={width > .1} castShadow={width > .1}>
    <meshStandardMaterial color={color} roughness={.48}/>
  </RoundedBox>;
}

function Stair({ from, to }: { from: Point; to: Point }) {
  const count=42, rise=(to[1]-from[1])/count, tread=Math.abs(to[2]-from[2])/count;
  return <group>
    <Beam from={[from[0],from[1]-.24,from[2]]} to={[to[0],to[1]-.24,to[2]]} depth={.34}/>
    {Array.from({length:count},(_,i)=>{
      const t=(i+.5)/count;
      const top=from[1]+rise*(rise>0?i+1:i);
      return <RoundedBox key={i} args={[3.2,.24,tread+.02]} radius={.025} smoothness={2} position={[from[0],top-.12,THREE.MathUtils.lerp(from[2],to[2],t)]} receiveShadow castShadow>
        <meshStandardMaterial color="#fff5e6" roughness={.5}/>
      </RoundedBox>;
    })}
    {[.2,.5,.8].map(t=>{
      const top=THREE.MathUtils.lerp(from[1],to[1],t)-.4;
      const height=Math.max(.2,top+1.95);
      return <mesh key={t} position={[from[0],-1.95+height/2,THREE.MathUtils.lerp(from[2],to[2],t)]} castShadow>
        <cylinderGeometry args={[.23,.32,height,20]}/><meshStandardMaterial color="#dfd1ba" roughness={.65}/>
      </mesh>;
    })}
    {[-1,1].map(side=><group key={side}>
      <Beam from={[from[0]+side*1.5,from[1]+1,from[2]]} to={[to[0]+side*1.5,to[1]+1,to[2]]} width={.045} depth={.045} color="#c8ae7f"/>
      {Array.from({length:15},(_,i)=>{
        const t=i/14;
        return <mesh key={i} position={[from[0]+side*1.5,THREE.MathUtils.lerp(from[1],to[1],t)+.5,THREE.MathUtils.lerp(from[2],to[2],t)]}>
          <cylinderGeometry args={[.022,.022,1,6]}/><meshStandardMaterial color="#c8ae7f"/>
        </mesh>;
      })}
    </group>)}
  </group>;
}

function ConnectingRail({ points }: { points: Point[] }) {
  return <group>{points.slice(0,-1).map((from,i)=>{
    const to=points[i+1];
    const count=Math.ceil(new THREE.Vector3(...from).distanceTo(new THREE.Vector3(...to))/.6);
    return <group key={i}>
      <Beam from={from} to={to} width={.045} depth={.045} color="#baa27b"/>
      {Array.from({length:count+1},(_,j)=><mesh key={j} position={[
        THREE.MathUtils.lerp(from[0],to[0],j/count),
        THREE.MathUtils.lerp(from[1],to[1],j/count)-.5,
        THREE.MathUtils.lerp(from[2],to[2],j/count),
      ]}>
        <cylinderGeometry args={[.018,.018,1,8]}/><meshStandardMaterial color="#baa27b" roughness={.4}/>
      </mesh>)}
    </group>;
  })}</group>;
}

export default function HarborRoute() {
  const [sx,sy]=useArchitectureScale();
  const route=harborRoute(sx,sy);
  const upper=6.2*sy;
  const deck=useMemo(()=>{
    const w=8*sx,h=6.5,r=2;
    const shape=new THREE.Shape();
    shape.moveTo(-w+r,-h);shape.lineTo(w-r,-h);shape.quadraticCurveTo(w,-h,w,-h+r);
    shape.lineTo(w,h-r);shape.quadraticCurveTo(w,h,w-r,h);shape.lineTo(-w+r,h);
    shape.quadraticCurveTo(-w,h,-w,h-r);shape.lineTo(-w,-h+r);shape.quadraticCurveTo(-w,-h,-w+r,-h);
    const geometry=new THREE.ExtrudeGeometry(shape,{depth:.36,bevelEnabled:true,bevelSize:.09,bevelThickness:.045,bevelSegments:3,curveSegments:24});
    geometry.rotateX(-Math.PI/2);
    const outline = shape.getSpacedPoints(72).map(p=>[21*sx+p.x,upper+1,-21-p.y] as Point);
    return { geometry, outline };
  },[sx,upper]);
  useEffect(()=>()=>deck.geometry.dispose(),[deck]);
  return <group>
    {route.slice(0,-1).map((from,i)=>{
      const to=route[i+1];
      // Keep the original stair and balcony untouched; only connect their exit.
      if(i>=2 && i<=21)return null;
      if(i===22 || i===23)return null;
      if(i===26)return <Stair key={i} from={from} to={to}/>;
      if(i===24 || i===25)return null;
      return <Beam key={i} from={[from[0],from[1]-.12,from[2]]} to={[to[0],to[1]-.12,to[2]]}/>;
    })}
    {/* One straight, level passage connects the landing to the roof deck. */}
    <Beam from={[9.55*sx,upper-.16,-13.8]} to={[15.5*sx,upper-.16,-16.5]}
      width={2.7} depth={.32} color="#f7eddd" />
    <mesh geometry={deck.geometry} position={[21*sx,upper-.405,-21]} receiveShadow castShadow>
      <meshPhysicalMaterial color="#f7eddd" roughness={.42} clearcoat={.16}/>
    </mesh>
    {/* The work surface belongs on the right side of the terrace, clear of the
        descending stair opening at x=25*sx, z=-27.5 and the left reading copy. */}
    <group position={[26*sx,upper,-20.6]} rotation={[0,Math.PI/2,0]} scale={.56}>
      <RooftopWorkbench position={[0,0,0]} />
    </group>
    {/* Place the chair at the right-front lookout, beside (not inside) the
        planter. Keep its open seat facing the approaching camera, with the
        far stair exit clear. */}
    <group position={[24.6*sx,upper,-16.2]}
      rotation={[0,Math.PI/2-.3,0]}>
      <RooftopReadingChair />
    </group>
    {[[14.5,-23],[27.8,-17.1]].map(([x,z],i)=><group key={`planter-${i}`} position={[x*sx,upper,z]}>
      <mesh position={[0,.3,0]} receiveShadow><cylinderGeometry args={[.55,.43,.65,24]}/><meshStandardMaterial color="#e3d7c4" roughness={.85}/></mesh>
      <mesh position={[0,.62,0]}><cylinderGeometry args={[.48,.48,.035,20]}/><meshStandardMaterial color="#948977" roughness={1}/></mesh>
      {[0,1,2,3,4].map(j=><mesh key={j} position={[Math.cos(j*2.4)*.28,.85+(j%2)*.22,Math.sin(j*2.4)*.28]} scale={[.34,.45,.31]}>
        <sphereGeometry args={[1,12,8]}/><meshStandardMaterial color={j%2?"#98a68b":"#b6c2a6"} roughness={.95}/>
      </mesh>)}
    </group>)}
    {/* Slim perimeter details keep the original balcony's stone/brass vocabulary. */}
    <ConnectingRail points={[[13*sx+2,upper+1,-27.5],[25*sx-1.5,upper+1,-27.5]]}/>
    <ConnectingRail points={[[25*sx+1.5,upper+1,-27.5],[29*sx-2,upper+1,-27.5]]}/>
    <ConnectingRail points={[[9.8*sx,7.25*sy,-12.75],[15.25*sx,upper+1,-14.5]]}/>
    <ConnectingRail points={[[9.8*sx,7.25*sy,-14.85],[13*sx,upper+1,-18.25]]}/>
    {deck.outline.slice(0,-1).map((from,i)=>{
      const to=deck.outline[i+1];
      const x=(from[0]+to[0])/2, z=(from[2]+to[2])/2;
      // Keep only the two actual route openings, including the descending flight.
      if(x<15*sx && z>-18)return null;
      if(from[2]<-27.49 && to[2]<-27.49)return null;
      const count=Math.ceil(new THREE.Vector3(...from).distanceTo(new THREE.Vector3(...to))/.85);
      return <group key={i}>
        <Beam from={from} to={to} width={.045} depth={.045} color="#baa27b"/>
        {Array.from({length:count},(_,j)=><mesh key={j} position={[THREE.MathUtils.lerp(from[0],to[0],j/count),upper+.5,THREE.MathUtils.lerp(from[2],to[2],j/count)]}>
          <cylinderGeometry args={[.018,.018,1,6]}/><meshStandardMaterial color="#baa27b" roughness={.4}/>
        </mesh>)}
      </group>;
    })}
    {[[27.3,-18.1],[27.3,-24.3]].map(([x,z],i)=>{
      // Keep structural support at the outer edge, away from the full stair
      // approach and the landing-to-terrace sightline.
      return <mesh key={i} position={[x*sx,(upper-1.75)/2,z]} castShadow>
        <cylinderGeometry args={[.24,.36,upper+1.75,24]}/><meshStandardMaterial color="#e9dcc7" roughness={.6}/>
      </mesh>;
    })}
  </group>;
}
