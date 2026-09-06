"use client";
import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { heroCameraPosition, HERO_LOOK_AT, portalRadius } from "./exhibition-architecture";

// Measure the actual copy, then reserve its projected footprint inside the arch.
export function useEntranceLayout() {
  const {width,height}=useThree(s=>s.size);
  const aspect=width/Math.max(1,height), radius=portalRadius(aspect);
  const [opening,setOpening]=useState({x:radius-.65,y:11.85});
  useEffect(()=>{
    const profile=document.querySelector<HTMLElement>(".infinite-exhibition .hero-profile");
    if(!profile)return;
    let frame=0,alive=true;
    const measure=()=>{
      if(!alive)return;
      const rect=profile.getBoundingClientRect();
      if(width<768 || !rect.width){setOpening({x:radius-.65,y:11.85});return;}
      const camera=new THREE.PerspectiveCamera(31,aspect,.1,1000);
      const p=heroCameraPosition(aspect);
      camera.position.set(p[0],p[1],p[2]);
      camera.lookAt(HERO_LOOK_AT[0],HERO_LOOK_AT[1],HERO_LOOK_AT[2]);camera.updateMatrixWorld();
      const points:THREE.Vector3[]=[];
      const top=rect.top+window.scrollY-28,bottom=rect.bottom+window.scrollY+20;
      for(const x of [rect.left-28,rect.right+28])for(const y of [top,bottom])for(const z of [-8.48,-10.8]){
        const ray=new THREE.Vector3(x/width*2-1,1-y/height*2,.5).unproject(camera).sub(camera.position).normalize();
        const point=camera.position.clone().addScaledVector(ray,(z-camera.position.z)/ray.z);
        point.y+=1.75;points.push(point);
      }
      const innerX=Math.min(radius*1.14-.85,Math.max(radius-.65,...points.map(p=>Math.abs(p.x)+.6)));
      const innerY=Math.min(12.3*1.18-.85,Math.max(11.85,...points.map(p=>(p.y-.55)/Math.sqrt(Math.max(.015,1-(p.x/innerX)**2))+.2)));
      setOpening(old=>Math.abs(old.x-innerX)+Math.abs(old.y-innerY)<.02?old:{x:innerX,y:innerY});
    };
    const schedule=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(measure);};
    const observer=new ResizeObserver(schedule);observer.observe(profile);
    if(profile.parentElement)observer.observe(profile.parentElement);
    window.addEventListener("resize",schedule);document.fonts.ready.then(schedule);schedule();
    return()=>{alive=false;cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener("resize",schedule);};
  },[width,height,aspect,radius]);
  const join=opening.x*Math.sqrt(Math.max(0,1-((6.72-.55)/opening.y)**2));
  return {radius,innerX:opening.x,innerY:opening.y,join};
}
