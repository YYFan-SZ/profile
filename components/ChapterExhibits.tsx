"use client";
import { useEffect, useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { ExhibitionMotion } from "./ExhibitionStage";
import { useArchitectureScale } from "./BlenderExhibitionAssets";
import { ISLAND_Z } from "@/lib/exhibition-route";

// One stop per chapter: daylight gives way to dusk on the outer islands,
// then a violet night sky settles over contact.
const SKY = ["#a8cee9", "#afd1e9", "#b6d1e8", "#b9d0e4", "#b4bedb", "#a19dca", "#877dbb", "#7464ac", "#6656a6"];
const HORIZON = ["#ffe8cc", "#ffead5", "#fde7d5", "#f8ddce", "#eed2d1", "#e7c6d5", "#e2bfd7", "#dcb9dc", "#d9bbe4"];
export function ChapterSky({ motion }: { motion: RefObject<ExhibitionMotion> }) {
  const shader = useRef<THREE.ShaderMaterial>(null);
  const fog = useRef<THREE.Fog>(null);
  const starField = useRef<THREE.Points>(null);
  const starMaterial = useRef<THREE.ShaderMaterial>(null);
  const meteor = useRef<THREE.Group>(null);
  const meteorTrail = useRef<THREE.Mesh>(null);
  const meteorMaterial = useRef<THREE.ShaderMaterial>(null);
  const meteorTime = useRef(0);
  const uniforms = useMemo(() => ({ sky: { value: new THREE.Color(SKY[0]) }, horizon: { value: new THREE.Color(HORIZON[0]) }, time: { value: 0 }, night: { value: 0 } }), []);
  const colors = useMemo(() => ({ sky: SKY.map(c => new THREE.Color(c)), horizon: HORIZON.map(c => new THREE.Color(c)) }), []);
  const stars = useMemo(() => {
    const count = 2600;
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    const speeds = new Float32Array(count);
    const sizes = new Float32Array(count);
    let seed = 1847;
    const random = () => {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    for (let i = 0; i < positions.length; i += 3) {
      const angle = random() * Math.PI * 2;
      const height = .025 + .85 * Math.pow(random(), 1.55);
      const radius = Math.sqrt(1 - height * height) * 100;
      positions[i] = Math.cos(angle) * radius;
      positions[i + 1] = height * 100;
      positions[i + 2] = Math.sin(angle) * radius;
      const star = i / 3;
      phases[star] = random() * Math.PI * 2;
      speeds[star] = .7 + random() * 1.4;
      sizes[star] = 2.9 + random() * 1.6;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
    geometry.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    return geometry;
  }, []);
  const starUniforms = useMemo(() => ({ time: { value: 0 }, opacity: { value: 0 } }), []);
  const meteorUniforms = useMemo(() => ({ opacity: { value: 0 } }), []);
  useEffect(() => () => stars.dispose(), [stars]);
  useFrame(({ camera }, dt) => {
    if (!shader.current) return;
    const p = motion.current.progress * (SKY.length - 1), a = Math.min(SKY.length - 1, Math.floor(p)), b = Math.min(SKY.length - 1, a + 1), t = p - a;
    shader.current.uniforms.sky.value.copy(colors.sky[a]).lerp(colors.sky[b], t);
    shader.current.uniforms.horizon.value.copy(colors.horizon[a]).lerp(colors.horizon[b], t);
    const night = THREE.MathUtils.smoothstep(motion.current.progress, .62, .96);
    const starlight = THREE.MathUtils.smoothstep(motion.current.progress, .54, .84);
    shader.current.uniforms.night.value = night;
    if (starField.current) starField.current.position.copy(camera.position);
    if (starMaterial.current) {
      starMaterial.current.uniforms.opacity.value = starlight;
      if (!motion.current.reduced) starMaterial.current.uniforms.time.value += Math.min(dt, .05);
    }
    if (meteor.current) {
      meteor.current.position.copy(camera.position);
      meteor.current.quaternion.copy(camera.quaternion);
    }
    if (meteorMaterial.current) {
      if (!motion.current.reduced && motion.current.visible && starlight > .25) meteorTime.current += Math.min(dt, .05);
      const cycle = meteorTime.current % 5.3;
      const phase = cycle / 1.35;
      meteorMaterial.current.uniforms.opacity.value = !motion.current.reduced && cycle < 1.35
        ? starlight * Math.sin(Math.PI * phase) : 0;
      if (meteorTrail.current) {
        const variation = Math.floor(meteorTime.current / 5.3) % 4;
        meteorTrail.current.position.set(18 - phase * 19 - variation * 3, 16 - phase * 6 + variation * 1.5, -80);
      }
    }
    if (fog.current) fog.current.color.copy(shader.current.uniforms.horizon.value);
    if (!motion.current.reduced) shader.current.uniforms.time.value += Math.min(dt, .05);
  });
  return <>
    <fog ref={fog} attach="fog" args={[HORIZON[0], 48, 150]} />
    <mesh scale={180} renderOrder={-1}>
      <sphereGeometry args={[1, 40, 24]} />
      <shaderMaterial ref={shader} uniforms={uniforms} side={THREE.BackSide} depthWrite={false} toneMapped={false}
        vertexShader={`varying vec3 v; void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`}
        fragmentShader={`varying vec3 v; uniform vec3 sky; uniform vec3 horizon; uniform float time; uniform float night;
          float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
          float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1)),f.x),f.y);}
          float fbm(vec2 p){float n=0.,a=.5;for(int i=0;i<5;i++){n+=a*noise(p);p=p*2.03+vec2(7.1,3.8);a*=.5;}return n;}
          void main(){vec3 d=normalize(v);float h=d.y;vec3 c=mix(horizon,sky,smoothstep(.005,.27,h));
          vec2 q=vec2(atan(d.x,-d.z)*3.,h*12.)+vec2(time*.0018,0.);
          float n=fbm(q+fbm(q*.6));
          float cloud=smoothstep(.49,.72,n)*smoothstep(.012,.065,h)*(1.-smoothstep(.48,.8,h));
          vec3 cloudColor=mix(vec3(.88,.90,.93),vec3(1.,.97,.90),smoothstep(.46,.68,n));
          c=mix(c,cloudColor,cloud*.65*(1.-night*.94));
          float sun=pow(max(0.,dot(d,normalize(vec3(-.4,.28,-1.)))),320.);c=mix(c,vec3(1.,.98,.88),sun*.75*(1.-night));
          // A soft lavender haze arrives with dusk; star points are drawn separately.
          float veil=smoothstep(.48,.73,fbm(q*.62+vec2(3.2,7.1)))*smoothstep(.03,.25,h)*night;
          c=mix(c,vec3(.78,.67,.88),veil*.16);
          gl_FragColor=vec4(c,1.);
          #include <colorspace_fragment>
          }`}/>
    </mesh>
    <points ref={starField} geometry={stars} renderOrder={1}>
      <shaderMaterial ref={starMaterial} uniforms={starUniforms} transparent depthWrite={false} fog={false} toneMapped={false}
        vertexShader={`attribute float aPhase; attribute float aSpeed; attribute float aSize;
          uniform float time; varying float vBrightness;
          void main(){vBrightness=.45+.55*(.5+.5*sin(time*aSpeed+aPhase));
          gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=aSize;}`}
        fragmentShader={`uniform float opacity; varying float vBrightness;
          void main(){float dotShape=1.-smoothstep(.28,.5,length(gl_PointCoord-vec2(.5)));
          gl_FragColor=vec4(1.,.975,.93,dotShape*vBrightness*opacity);
          #include <colorspace_fragment>
          }`} />
    </points>
    <group ref={meteor}>
      <mesh ref={meteorTrail} rotation={[0, 0, .31]} renderOrder={2}>
        <planeGeometry args={[4.5, .14]} />
        <shaderMaterial ref={meteorMaterial} uniforms={meteorUniforms} transparent depthWrite={false} depthTest={true} fog={false} toneMapped={false}
          blending={THREE.AdditiveBlending} side={THREE.DoubleSide}
          vertexShader={`varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`}
          fragmentShader={`uniform float opacity; varying vec2 vUv;
            void main(){float tail=pow(1.-vUv.x,1.5);float edge=1.-smoothstep(.2,.5,abs(vUv.y-.5));
            gl_FragColor=vec4(1.,.96,.84,tail*edge*opacity);
            #include <colorspace_fragment>
            }`} />
      </mesh>
    </group>
  </>;
}

// Recognisable exhibits sit beside later chapters in the same world.
export function ChapterExhibits({ motion }: { motion: RefObject<ExhibitionMotion> }) {
  const [sx,sy]=useArchitectureScale();
  const reel = useRef<THREE.Group>(null);
  const reelStand = useRef<THREE.Group>(null);
  const reelHovered = useRef(false);
  const reelCenter = useMemo(() => new THREE.Vector3(18.5*sx, 6.2*sy+.91, -23.5), [sx,sy]);
  const mailCenter = useMemo(() => new THREE.Vector3(41, 2.2, ISLAND_Z.contact), []);
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
    if (reel.current) reel.current.rotation.z += Math.min(delta, .05) * (reelHovered.current ? .24 : .09);
    if (mail.current) mail.current.rotation.y = -.31 + Math.sin(state.clock.elapsedTime * .25) * .045;
  });
  return <>
    <pointLight position={[41, 7, ISLAND_Z.contact + 3]} intensity={60} distance={25} decay={2} color="#fffdf3" />
    <group ref={reelStand} position={[18.5*sx,6.2*sy+.91,-23.5]} scale={.55} rotation={[0, -.25, 0]}
      onClick={event => {
        event.stopPropagation();
        window.dispatchEvent(new CustomEvent("portfolio:rooftop-select", { detail: { index: 0 } }));
      }}
      onPointerOver={event => { event.stopPropagation(); reelHovered.current = true; }}
      onPointerOut={event => { event.stopPropagation(); reelHovered.current = false; }}>
      <mesh position={[0, -1.65, 0]} receiveShadow><cylinderGeometry args={[2.25, 2.45, .3, 64]} /><meshStandardMaterial color="#f7ecd9" roughness={.5} /></mesh>
      <mesh position={[0, .1, 0]} castShadow><cylinderGeometry args={[.16, .26, 3.3, 20]} /><meshStandardMaterial color="#c8ae7f" metalness={.45} roughness={.3} /></mesh>
      <group ref={reel} position={[0, 2.35, 0]}>
        {[0, -.32].map(z => <mesh key={z} geometry={geometry.film} position={[0, 0, z]} castShadow><meshPhysicalMaterial color="#fff3dc" metalness={.08} roughness={.3} clearcoat={.6} /></mesh>)}
        {[0.1, -.32].map(z => <mesh key={z} position={[0,0,z]}><torusGeometry args={[1.44,.03,8,80]} /><meshStandardMaterial color="#c8ae7f" metalness={.5} roughness={.3} /></mesh>)}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -.12]}><cylinderGeometry args={[.25, .25, .62, 24]} /><meshStandardMaterial color="#f8edda" metalness={.4} roughness={.3} /></mesh>
      </group>
    </group>
    <group position={[41, 2.2, ISLAND_Z.contact]} scale={.9} ref={mail} rotation={[0, -.31, -.045]}>
      <mesh position={[0, -4.2, 0]} receiveShadow><cylinderGeometry args={[2.8, 3, .3, 64]} /><meshStandardMaterial color="#fff8e8" roughness={.45} /></mesh>
      <mesh position={[0, -2.4, -.1]} castShadow><cylinderGeometry args={[.16, .28, 3.5, 20]} /><meshStandardMaterial color="#c8ae7f" metalness={.45} roughness={.35} /></mesh>
      <mesh position={[0, .75, .02]} castShadow><boxGeometry args={[2.95, 1.9, .045]} /><meshStandardMaterial color="#ffffff" roughness={.6} /></mesh>
      {[.6, .88, 1.16].map(y => <mesh key={y} position={[0, y, .055]}><boxGeometry args={[1.65, .022, .015]} /><meshStandardMaterial color="#d7c7a7" roughness={.5} /></mesh>)}
      <mesh castShadow><boxGeometry args={[3.6, 2.15, .18]} /><meshPhysicalMaterial color="#fffdf3" roughness={.3} clearcoat={.5} /></mesh>
      <mesh geometry={geometry.envelope} position={[0, 1.07, -.04]} castShadow><meshStandardMaterial color="#f5e9cf" roughness={.4} /></mesh>
      <mesh geometry={geometry.envelope} position={[0, 1.07, .14]} rotation={[0, 0, Math.PI]}><meshStandardMaterial color="#f3e9d4" roughness={.4} /></mesh>
      <mesh position={[0, -.18, .3]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[.25, .25, .07, 32]} /><meshStandardMaterial color="#c4a269" metalness={.7} roughness={.25} /></mesh>
    </group>
  </>;
}
