"use client";
import { useEffect, useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { ExhibitionMotion } from "./ExhibitionStage";

const SKY = ["#80bee9", "#a5cbe5", "#a8cfcf", "#b7cbe6", "#e9c6b4", "#91cfee"];
const HORIZON = ["#fff3d8", "#fff0d9", "#eff7ea", "#faf0ee", "#fff0df", "#f5fcff"];
export function ChapterSky({ motion }: { motion: RefObject<ExhibitionMotion> }) {
  const shader = useRef<THREE.ShaderMaterial>(null);
  const fog = useRef<THREE.Fog>(null);
  const uniforms = useMemo(() => ({ sky: { value: new THREE.Color(SKY[0]) }, horizon: { value: new THREE.Color(HORIZON[0]) }, time: { value: 0 } }), []);
  const colors = useMemo(() => ({ sky: SKY.map(c => new THREE.Color(c)), horizon: HORIZON.map(c => new THREE.Color(c)) }), []);
  useFrame((_, dt) => {
    if (!shader.current) return;
    const p = motion.current.progress * 5, a = Math.min(5, Math.floor(p)), b = Math.min(5, a + 1), t = p - a;
    shader.current.uniforms.sky.value.copy(colors.sky[a]).lerp(colors.sky[b], t);
    shader.current.uniforms.horizon.value.copy(colors.horizon[a]).lerp(colors.horizon[b], t);
    if (fog.current) fog.current.color.copy(shader.current.uniforms.horizon.value);
    if (!motion.current.reduced) shader.current.uniforms.time.value += Math.min(dt, .05);
  });
  return <>
    <fog ref={fog} attach="fog" args={[HORIZON[0], 48, 150]} />
    <mesh scale={180}>
      <sphereGeometry args={[1, 40, 24]} />
      <shaderMaterial ref={shader} uniforms={uniforms} side={THREE.BackSide} depthWrite={false} toneMapped={false}
        vertexShader={`varying vec3 v; void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`}
        fragmentShader={`varying vec3 v; uniform vec3 sky; uniform vec3 horizon; uniform float time;
          float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
          float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1)),f.x),f.y);}
          void main(){vec3 d=normalize(v);float h=d.y;vec3 c=mix(horizon,sky,smoothstep(-.03,.22,h));
          vec2 q=d.xz/max(.16,h)*2.8+vec2(time*.004,0.);float n=noise(q)*.58+noise(q*2.1)*.27+noise(q*4.2)*.15;
          float cloud=smoothstep(.7,.9,n)*smoothstep(.05,.2,h)*.06;c=mix(c,vec3(1.,.99,.96),cloud);
          float sun=pow(max(0.,dot(d,normalize(vec3(-.4,.28,-1.)))),320.);c=mix(c,vec3(1.,.98,.88),sun*.75);
          gl_FragColor=vec4(c,1.);
          #include <colorspace_fragment>
          }`}/>
    </mesh>
  </>;
}

// Recognisable exhibits sit beside later chapters in the same world.
export function ChapterExhibits({ motion }: { motion: RefObject<ExhibitionMotion> }) {
  const reel = useRef<THREE.Group>(null);
  const reelStand = useRef<THREE.Group>(null);
  const reelCenter = useMemo(() => new THREE.Vector3(38, .3, -28), []);
  const mailCenter = useMemo(() => new THREE.Vector3(40.2, 3.4, -77), []);
  const mail = useRef<THREE.Group>(null);
  const geometry = useMemo(() => {
    const disc = new THREE.Shape(); disc.absarc(0, 0, 1.48, 0, Math.PI * 2, false);
    for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; const hole = new THREE.Path(); hole.absarc(Math.cos(a) * .88, Math.sin(a) * .88, .32, 0, Math.PI * 2, true); disc.holes.push(hole); }
    const film = new THREE.ExtrudeGeometry(disc, { depth: .085, bevelEnabled: true, bevelSize: .035, bevelThickness: .02, bevelSegments: 2, curveSegments: 28 });
    const flap = new THREE.Shape(); flap.moveTo(-1.8, 0); flap.lineTo(0, 1.5); flap.lineTo(1.8, 0); flap.closePath();
    const envelope = new THREE.ExtrudeGeometry(flap, { depth: .06, bevelEnabled: true, bevelSize: .02, bevelThickness: .015, bevelSegments: 2 });
    return { film, envelope };
  }, []);
  useEffect(() => () => Object.values(geometry).forEach(g => g.dispose()), [geometry]);
  useFrame((state, delta) => {
    if (reelStand.current) reelStand.current.visible = state.camera.position.distanceToSquared(reelCenter) < 34 * 34;
    if (mail.current) mail.current.visible = state.camera.position.distanceToSquared(mailCenter) < 34 * 34;
    if (motion.current.reduced) return;
    if (reel.current) reel.current.rotation.z += Math.min(delta, .05) * .09;
    if (mail.current) mail.current.rotation.y = -.15 + Math.sin(state.clock.elapsedTime * .25) * .06;
  });
  return <>
    <pointLight position={[39, 8, -67]} intensity={60} distance={25} decay={2} color="#fffdf3" />
    <group ref={reelStand} position={[38, .3, -28]} rotation={[0, .6, 0]}>
      <mesh position={[0, -1.65, 0]} receiveShadow><cylinderGeometry args={[2.25, 2.45, .3, 64]} /><meshStandardMaterial color="#f7ecd9" roughness={.5} /></mesh>
      <mesh position={[0, .1, 0]} castShadow><cylinderGeometry args={[.16, .26, 3.3, 20]} /><meshStandardMaterial color="#c8ae7f" metalness={.45} roughness={.3} /></mesh>
      <group ref={reel} position={[0, 2.35, 0]}>
        {[0, -.32].map(z => <mesh key={z} geometry={geometry.film} position={[0, 0, z]} castShadow><meshPhysicalMaterial color="#fff3dc" metalness={.08} roughness={.3} clearcoat={.6} /></mesh>)}
        {[0.1, -.32].map(z => <mesh key={z} position={[0,0,z]}><torusGeometry args={[1.44,.03,8,80]} /><meshStandardMaterial color="#c8ae7f" metalness={.5} roughness={.3} /></mesh>)}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -.12]}><cylinderGeometry args={[.25, .25, .62, 24]} /><meshStandardMaterial color="#f8edda" metalness={.4} roughness={.3} /></mesh>
      </group>
    </group>
    <group position={[40.2, 3.4, -77]} scale={.9} ref={mail} rotation={[0, -.15, -.08]}>
      <mesh position={[0, -5.5, 0]} receiveShadow><cylinderGeometry args={[2.8, 3, .3, 64]} /><meshStandardMaterial color="#fff8e8" roughness={.45} /></mesh>
      <mesh position={[0, -3.1, -.1]} castShadow><cylinderGeometry args={[.16, .28, 4.5, 20]} /><meshStandardMaterial color="#c8ae7f" metalness={.45} roughness={.35} /></mesh>
      <mesh position={[0, .75, .02]} castShadow><boxGeometry args={[2.95, 1.9, .045]} /><meshStandardMaterial color="#ffffff" roughness={.6} /></mesh>
      {[.6, .88, 1.16].map(y => <mesh key={y} position={[0, y, .055]}><boxGeometry args={[1.65, .022, .015]} /><meshStandardMaterial color="#d7c7a7" roughness={.5} /></mesh>)}
      <mesh castShadow><boxGeometry args={[3.6, 2.15, .18]} /><meshPhysicalMaterial color="#fffdf3" roughness={.3} clearcoat={.5} /></mesh>
      <mesh geometry={geometry.envelope} position={[0, 1.07, -.04]} castShadow><meshStandardMaterial color="#f5e9cf" roughness={.4} /></mesh>
      <mesh geometry={geometry.envelope} position={[0, 1.07, .14]} rotation={[0, 0, Math.PI]}><meshStandardMaterial color="#f3e9d4" roughness={.4} /></mesh>
      <mesh position={[0, -.18, .3]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[.25, .25, .07, 32]} /><meshStandardMaterial color="#c4a269" metalness={.7} roughness={.25} /></mesh>
    </group>
  </>;
}
