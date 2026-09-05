"use client";
import { useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { ExhibitionMotion } from "./ExhibitionStage";

function Cloud({ position, size, motion }: {position:[number,number,number];size:[number,number];motion:RefObject<ExhibitionMotion>}) {
  const mesh=useRef<THREE.Mesh>(null), material=useRef<THREE.ShaderMaterial>(null);
  const uniforms=useMemo(()=>({time:{value:0}}),[]);
  useFrame(({camera},delta)=>{
    if(mesh.current) {
      mesh.current.quaternion.copy(camera.quaternion);
      const time=material.current?.uniforms.time.value ?? 0;
      mesh.current.position.x=position[0]+Math.sin(time*.025+position[0]*.03)*3.5;
      mesh.current.position.z=position[2]+Math.sin(time*.018)*.7;
    }
    if(material.current && !motion.current.reduced && motion.current.visible)material.current.uniforms.time.value+=Math.min(delta,.05);
  });
  return <mesh ref={mesh} position={position} renderOrder={-2}>
    <planeGeometry args={size}/>
    <shaderMaterial ref={material} uniforms={uniforms} transparent depthWrite={false} toneMapped={false}
      vertexShader={`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`}
      fragmentShader={`varying vec2 vUv;uniform float time;
        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float n(vec2 p){vec2 a=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(a),hash(a+vec2(1,0)),f.x),mix(hash(a+vec2(0,1)),hash(a+1.),f.x),f.y);}
        float puff(vec2 p,vec2 c,vec2 s){vec2 q=(p-c)/s;return exp(-dot(q,q)*2.4);}
        float density(vec2 p){return puff(p,vec2(-.62,-.1),vec2(.32,.31))+puff(p,vec2(-.28,.13),vec2(.4,.52))+puff(p,vec2(.12,.22),vec2(.37,.65))+puff(p,vec2(.46,.02),vec2(.38,.39))+puff(p,vec2(.7,-.12),vec2(.24,.24));}
        void main(){vec2 p=(vUv-.5)*2.;p.x+=sin(time*.035)*.035;float detail=n(p*15.)*.09+n(p*31.)*.045+n(p*61.)*.018;float d=density(p);
          float alpha=smoothstep(.18,.48,d+detail)*smoothstep(-.65,-.3,p.y);if(alpha<.003)discard;
          float light=clamp(.65+p.y*.35+(density(p+vec2(-.04,.05))-d)*1.3,0.,1.);
          vec3 color=mix(vec3(.87,.91,.94),vec3(1.,.99,.97),light);color=mix(color,vec3(1.),pow(1.-alpha,2.)*.4);
          gl_FragColor=vec4(color,alpha*.34);
          #include <colorspace_fragment>
        }`}/>
  </mesh>;
}
export default function CumulusClouds({motion}:{motion:RefObject<ExhibitionMotion>}) {
  return <group>
    <Cloud position={[-20,15,-73]} size={[29,12]} motion={motion}/>
    <Cloud position={[28,19,-115]} size={[39,15]} motion={motion}/>
    <Cloud position={[73,16,-142]} size={[32,12]} motion={motion}/>
  </group>;
}
