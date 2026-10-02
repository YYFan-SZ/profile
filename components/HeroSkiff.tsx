"use client";

import { useEffect, useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { ExhibitionMotion } from "./ExhibitionStage";

// Keep the entire hull inside the opening shot, below the profile copy.
const POSITION = new THREE.Vector3(-7, -1.96, -6);

function boatOutline(length: number, width: number) {
  const shape = new THREE.Shape();
  shape.moveTo(-length, 0);
  shape.bezierCurveTo(-length * .62, -width, length * .46, -width, length, 0);
  shape.bezierCurveTo(length * .46, width, -length * .62, width, -length, 0);
  return shape;
}

/** A low sailboat on the hero water, clear of the piano platform and profile. */
export default function HeroSkiff({ motion }: { motion: RefObject<ExhibitionMotion> }) {
  const boat = useRef<THREE.Group>(null);
  const sails = useRef<THREE.Group>(null);
  const geometry = useMemo(() => {
    const hull = new THREE.ExtrudeGeometry(boatOutline(1.7, .62), {
      depth: .24, bevelEnabled: true, bevelSize: .055,
      bevelThickness: .045, bevelSegments: 3, curveSegments: 32,
    });
    hull.rotateX(-Math.PI / 2);
    const inset = new THREE.ShapeGeometry(boatOutline(1.44, .45), 32);
    inset.rotateX(-Math.PI / 2);
    const rimPoints = boatOutline(1.7, .62).getSpacedPoints(72)
      .map(point => new THREE.Vector3(point.x, .14, -point.y));
    const rim = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rimPoints, true), 96, .016, 6, true);
    const main = new THREE.Shape();
    main.moveTo(.13, .28);
    main.lineTo(1.04, .36);
    main.bezierCurveTo(.87, .78, .48, 1.16, .13, 1.31);
    main.closePath();
    const jib = new THREE.Shape();
    jib.moveTo(-.13, .4);
    jib.lineTo(-.72, .44);
    jib.quadraticCurveTo(-.35, .91, -.13, 1.14);
    jib.closePath();
    return { hull, inset, rim, mainSail: new THREE.ShapeGeometry(main, 20), jibSail: new THREE.ShapeGeometry(jib, 20) };
  }, []);

  useEffect(() => () => Object.values(geometry).forEach(part => part.dispose()), [geometry]);
  useFrame(({ camera, clock }) => {
    if (!boat.current) return;
    boat.current.visible = camera.position.distanceToSquared(POSITION) < 38 * 38;
    if (motion.current.reduced) {
      boat.current.position.copy(POSITION);
      boat.current.rotation.set(0, -.18, 0);
      if (sails.current) sails.current.rotation.y = 0;
      return;
    }
    if (!motion.current.visible) return;
    const time = clock.elapsedTime;
    boat.current.position.set(
      POSITION.x + Math.sin(time * .19) * .68,
      POSITION.y + Math.sin(time * 1.05) * .035,
      POSITION.z + Math.cos(time * .15) * .22,
    );
    boat.current.rotation.set(
      Math.sin(time * .82) * .012,
      -.18 + Math.sin(time * .19) * .045,
      Math.sin(time * .72) * .018,
    );
    if (sails.current) sails.current.rotation.y = Math.sin(time * .63) * .045;
  });

  return <group ref={boat} position={POSITION.toArray()} rotation={[0, -.18, 0]} scale={1.2}>
    <mesh geometry={geometry.hull} position={[0, -.15, 0]} castShadow>
      <meshPhysicalMaterial color="#e8d9be" roughness={.57} clearcoat={.12} />
    </mesh>
    <mesh geometry={geometry.inset} position={[0, .11, 0]}>
      <meshStandardMaterial color="#b9c9b9" roughness={.83} side={THREE.DoubleSide} />
    </mesh>
    <mesh geometry={geometry.rim}>
      <meshStandardMaterial color="#bda575" metalness={.28} roughness={.56} />
    </mesh>
    {[-.5, .48].map(x => <mesh key={x} position={[x, .21, 0]} castShadow>
      <boxGeometry args={[.14, .055, .82]} />
      <meshStandardMaterial color="#f7f1e7" roughness={.62} />
    </mesh>)}
    <mesh position={[.05, .73, 0]} castShadow>
      <cylinderGeometry args={[.028, .038, 1.25, 12]} />
      <meshStandardMaterial color="#bda575" metalness={.38} roughness={.5} />
    </mesh>
    <group ref={sails}>
      <mesh geometry={geometry.mainSail} position={[0, 0, .035]} castShadow>
        <meshStandardMaterial color="#a5c8ae" roughness={.8} side={THREE.DoubleSide} />
      </mesh>
      <mesh geometry={geometry.jibSail} position={[0, 0, .03]} castShadow>
        <meshStandardMaterial color="#fff3de" roughness={.82} side={THREE.DoubleSide} />
      </mesh>
    </group>
    <mesh position={[.57, .31, .035]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[.015, .015, .96, 8]} />
      <meshStandardMaterial color="#bda575" metalness={.38} roughness={.5} />
    </mesh>
  </group>;
}
