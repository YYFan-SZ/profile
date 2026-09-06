"use client";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

// A single solid ribbon, including its underside and edges, rather than loose slabs.
function ribbon(curve: THREE.Curve<THREE.Vector3>, width: number, depth: number, count = 90) {
  const vertices: number[] = [], indices: number[] = [];
  const up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i <= count; i++) {
    const t = i / count, p = curve.getPoint(t), side = curve.getTangent(t).cross(up).normalize().multiplyScalar(width / 2);
    for (const [sign, lower] of [[-1, 0], [1, 0], [-1, 1], [1, 1]]) vertices.push(p.x + side.x * sign, p.y - lower * depth, p.z + side.z * sign);
    if (i < count) { const a = i * 4, b = a + 4; indices.push(a,b,a+1,a+1,b,b+1,a+2,a+3,b+2,a+3,b+3,b+2,a,a+2,b,a+2,b+2,b,a+1,b+1,a+3,a+3,b+1,b+3); }
  }
  indices.push(0,1,2,1,3,2); const e = count * 4; indices.push(e,e+2,e+1,e+1,e+2,e+3);
  const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3)); g.setIndex(indices); g.computeVertexNormals(); return g;
}

export default function GalleryConnections() {
  const parts = useMemo(() => {
    const promenade = new THREE.CatmullRomCurve3([[2,-1.98,-9.8],[2,-1.98,-17],[11,-1.77,-23],[25,-1.77,-25],[36,-1.77,-28],[35,-1.77,-39],[32,-1.77,-47],[34,-1.77,-62],[38,-1.77,-77]].map(p => new THREE.Vector3(p[0],p[1],p[2])));
    const steps=Array.from({length:1},()=>{
      // A single flowing pool edge leaves a narrow water channel beside the dais.
      const inner=8.1,outer=9.65,start=.38*Math.PI,end=1.44*Math.PI,s=new THREE.Shape();
      s.absarc(0,0,outer,start,end,false);s.lineTo(Math.cos(end)*inner,Math.sin(end)*inner);
      s.absarc(0,0,inner,end,start,true);s.closePath();
      const geo=new THREE.ExtrudeGeometry(s,{depth:.17,bevelEnabled:true,bevelSize:.055,bevelThickness:.035,bevelSegments:4,curveSegments:100});
      geo.rotateX(-Math.PI/2);geo.translate(2,-2.07,-1);return geo;
    });
    return {path:ribbon(promenade,3.1,.16),steps};
  },[]);
  useEffect(()=>()=>{parts.path.dispose();parts.steps.forEach(g=>g.dispose());},[parts]);
  return <group>
    {[parts.path,...parts.steps].map((g,i)=><mesh key={i} geometry={g} castShadow receiveShadow><meshPhysicalMaterial color="#f8eee0" roughness={.24} clearcoat={.6} clearcoatRoughness={.2} side={THREE.DoubleSide}/></mesh>)}
    <mesh position={[9.2,-1.96,-2.2]} receiveShadow castShadow>
      <cylinderGeometry args={[1.8,1.88,.25,80]}/><meshPhysicalMaterial color="#f8eee0" roughness={.24} clearcoat={.6} clearcoatRoughness={.2}/>
    </mesh>
  </group>;
}
