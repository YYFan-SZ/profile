"use client";

import { useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useEntranceLayout } from "@/lib/use-entrance-layout";

function Asset({ name, scale = [1, 1, 1] }: { name: string; scale?: [number, number, number] }) {
  const { scene } = useGLTF(`/models/exhibition/${name}.glb?v=integrated-piano-10`);
  const model = useMemo(() => {
    const copy = scene.clone(true);
    copy.traverse(object => {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
    return copy;
  }, [scene, name]);
  return <primitive object={model} scale={scale} dispose={null} />;
}

export function BlenderPiano() { return <Asset name="piano-shell" />; }
export function useArchitectureScale(): [number, number, number] {
  const width = useThree(s => s.size.width);
  const { radius, innerX, innerY } = useEntranceLayout();
  if (width < 768) return [1, 1, 1];
  return [Math.max(radius / 18, innerX / 17.4), Math.max(1, innerY / 11.85), 1];
}
export function BlenderStair() { return <Asset name="stair" scale={useArchitectureScale()} />; }

function ArchInlay() {
  const detail = useMemo(() => {
    const ivory = new THREE.MeshStandardMaterial({ color: "#f5ede1", roughness: .58, metalness: 0 });
    const gold = new THREE.MeshStandardMaterial({ color: "#e5d6bf", roughness: .6, metalness: .08 });
    const shadowGold = new THREE.MeshStandardMaterial({ color: "#d9cab4", roughness: .68, metalness: .04 });
    const point = (angle: number, across: number, z = -8.36) =>
      new THREE.Vector3(
        (17.4 + 3.12 * across) * Math.cos(angle),
        -1.2 + (11.85 + 2.664 * across) * Math.sin(angle),
        z,
      );
    const mouldings = [
      { across: .08, radius: .085, material: ivory },
      { across: .18, radius: .018, material: gold },
      { across: .82, radius: .018, material: gold },
      { across: .92, radius: .07, material: ivory },
    ].map(({ across, radius, material }) => ({
      geometry: new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(Array.from({ length: 129 }, (_, i) => point(Math.PI * i / 128, across))),
        256, radius, 8, false,
      ),
      material,
    }));
    const vineGeometry = new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3(Array.from({ length: 129 }, (_, i) => point(Math.PI * i / 128, .5, -8.3))),
      256, .025, 7, false,
    );

    // Shallow, beveled leaves catch the scene lighting like carved metalwork.
    const leaf = new THREE.Shape();
    leaf.moveTo(0, 0);
    leaf.bezierCurveTo(.32, .26, .88, .32, 1.36, 0);
    leaf.bezierCurveTo(.92, -.32, .34, -.26, 0, 0);
    const leafGeometry = new THREE.ExtrudeGeometry(leaf, {
      depth: .04, bevelEnabled: true, bevelSize: .02,
      bevelThickness: .02, bevelSegments: 3, curveSegments: 14,
    });
    const veinGeometry = new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(.12, 0, .09),
        new THREE.Vector3(.55, .015, .09),
        new THREE.Vector3(1.05, 0, .09),
      ]), 12, .014, 5, false,
    );
    const scrollGeometry = new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(.12, .06, .055),
        new THREE.Vector3(.35, .38, .055),
        new THREE.Vector3(.82, .48, .055),
        new THREE.Vector3(1.32, .31, .055),
        new THREE.Vector3(1.4, .08, .055),
        new THREE.Vector3(1.22, -.04, .055),
      ]), 32, .023, 6, false,
    );
    const ringGeometry = new THREE.TorusGeometry(.3, .04, 10, 40);
    const pearlGeometry = new THREE.SphereGeometry(.17, 18, 12);
    const sprigs = Array.from({ length: 26 }, (_, i) => {
      const angle = Math.PI * (i + .5) / 26;
      return {
        position: point(angle, .5, -8.27),
        rotation: Math.atan2(13.182 * Math.cos(angle), -18.96 * Math.sin(angle)) + (i % 2 ? .6 : -.6),
        material: i % 2 ? ivory : gold,
      };
    });
    const medallions = [.22, .78].map(fraction => {
      const angle = Math.PI * fraction;
      return {
        position: point(angle, .5, -8.22),
        rotation: Math.atan2(13.182 * Math.cos(angle), -18.96 * Math.sin(angle)),
      };
    });
    return { ivory, gold, shadowGold, mouldings, vineGeometry, leafGeometry, veinGeometry, scrollGeometry, ringGeometry, pearlGeometry, sprigs, medallions };
  }, []);

  useEffect(() => () => {
    detail.mouldings.forEach(({ geometry }) => geometry.dispose());
    detail.vineGeometry.dispose();
    detail.leafGeometry.dispose();
    detail.veinGeometry.dispose();
    detail.scrollGeometry.dispose();
    detail.ringGeometry.dispose();
    detail.pearlGeometry.dispose();
    detail.ivory.dispose();
    detail.gold.dispose();
    detail.shadowGold.dispose();
  }, [detail]);

  return <group>
    {detail.mouldings.map(({ geometry, material }, index) =>
      <mesh key={`moulding-${index}`} geometry={geometry} material={material} />)}
    <mesh geometry={detail.vineGeometry} material={detail.gold} />
    {detail.sprigs.map(({ position, rotation, material }, index) =>
      <group key={`sprig-${index}`} position={position} rotation={[0, 0, rotation]} scale={[.88, .85, 1]}>
        <mesh geometry={detail.leafGeometry} material={material} />
        <mesh geometry={detail.veinGeometry} material={detail.shadowGold} />
      </group>)}
    {detail.medallions.map(({ position, rotation }, index) =>
      <group key={`medallion-${index}`} position={position} rotation={[0, 0, rotation]}>
        <mesh geometry={detail.scrollGeometry} material={detail.shadowGold} />
        <mesh geometry={detail.scrollGeometry} material={detail.shadowGold} scale={[-1, 1, 1]} />
        <mesh geometry={detail.ringGeometry} material={detail.gold} position={[0, 0, .11]} />
        <mesh geometry={detail.pearlGeometry} material={detail.ivory} position={[0, 0, .15]} />
      </group>)}
  </group>;
}

export function BlenderArch() {
  const scale = useArchitectureScale();
  return <group scale={scale}>
    <Asset name="arch" />
    <ArchInlay />
  </group>;
}
