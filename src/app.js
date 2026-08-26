import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
const canvas = document.querySelector('#webgl-stage');

document.documentElement.classList.add('js-enhanced');

function createSpaceScene() {
  if (!canvas || reduceMotion) {
    document.body.classList.add('webgl-fallback');
    return;
  }

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x070711, 0.052);

  const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 0, 8.5);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: !coarsePointer,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio, coarsePointer ? 1.2 : 1.8));
  renderer.setSize(innerWidth, innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  const world = new THREE.Group();
  world.position.set(innerWidth > 900 ? 3.15 : 0, 0.2, 0);
  scene.add(world);

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.42, 4),
    new THREE.MeshPhysicalMaterial({
      color: 0x7657ff,
      emissive: 0x24115f,
      emissiveIntensity: 1.5,
      metalness: 0.55,
      roughness: 0.22,
      transmission: 0.14,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      flatShading: true,
    }),
  );
  core.rotation.set(-0.35, 0.5, 0.18);
  world.add(core);

  const wire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.68, 2),
    new THREE.MeshBasicMaterial({ color: 0x65f1dc, wireframe: true, transparent: true, opacity: 0.18 }),
  );
  world.add(wire);

  const rings = new THREE.Group();
  [2.02, 2.34, 2.62].forEach((radius, index) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius, 0.012 + index * 0.004, 8, 128),
      new THREE.MeshBasicMaterial({
        color: index === 1 ? 0x9f7cff : 0x5eead4,
        transparent: true,
        opacity: 0.35 - index * 0.06,
      }),
    );
    ring.rotation.set(0.7 + index * 0.42, 0.25 + index * 0.7, index * 0.5);
    rings.add(ring);
  });
  world.add(rings);

  const orbitNodes = new THREE.Group();
  for (let index = 0; index < 9; index += 1) {
    const node = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.12, 0),
      new THREE.MeshBasicMaterial({ color: index % 2 ? 0x5eead4 : 0xb69cff }),
    );
    const angle = (index / 9) * Math.PI * 2;
    const radius = 2.25 + (index % 3) * 0.25;
    node.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.7) * 1.15, Math.sin(angle) * radius);
    node.userData.phase = angle;
    orbitNodes.add(node);
  }
  world.add(orbitNodes);

  const particleCount = coarsePointer ? 420 : 1100;
  const positions = new Float32Array(particleCount * 3);
  for (let index = 0; index < particleCount; index += 1) {
    const radius = 5 + Math.random() * 18;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[index * 3 + 2] = radius * Math.cos(phi);
  }
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({ color: 0xb9abff, size: coarsePointer ? 0.025 : 0.035, transparent: true, opacity: 0.6 }),
  );
  scene.add(particles);

  scene.add(new THREE.HemisphereLight(0xa993ff, 0x070711, 1.8));
  const keyLight = new THREE.PointLight(0x8b5cf6, 42, 20, 2);
  keyLight.position.set(4, 4, 5);
  scene.add(keyLight);
  const cyanLight = new THREE.PointLight(0x5eead4, 32, 18, 2);
  cyanLight.position.set(-4, -2, 4);
  scene.add(cyanLight);

  const pointer = new THREE.Vector2();
  const pointerTarget = new THREE.Vector2();
  addEventListener('pointermove', (event) => {
    pointerTarget.set((event.clientX / innerWidth - 0.5) * 2, (event.clientY / innerHeight - 0.5) * 2);
  }, { passive: true });

  let scrollProgress = 0;
  ScrollTrigger.create({
    trigger: document.documentElement,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => { scrollProgress = self.progress; },
  });

  const clock = new THREE.Clock();
  let frameId;
  const render = () => {
    const elapsed = clock.getElapsedTime();
    pointer.lerp(pointerTarget, 0.045);
    core.rotation.y = elapsed * 0.13 + scrollProgress * Math.PI * 2.2;
    core.rotation.x = -0.35 + Math.sin(elapsed * 0.45) * 0.08 + pointer.y * 0.12;
    wire.rotation.y = -elapsed * 0.08 - scrollProgress * Math.PI;
    wire.rotation.z = elapsed * 0.045;
    rings.rotation.y = elapsed * 0.07 + pointer.x * 0.14;
    rings.rotation.x = scrollProgress * 1.4 + pointer.y * 0.08;
    orbitNodes.rotation.y = elapsed * 0.12;
    orbitNodes.children.forEach((node) => node.scale.setScalar(0.75 + Math.sin(elapsed * 2 + node.userData.phase) * 0.22));
    particles.rotation.y = elapsed * 0.008 + scrollProgress * 0.3;
    particles.rotation.x = pointer.y * 0.025;
    camera.position.x += (pointer.x * 0.24 - camera.position.x) * 0.025;
    camera.position.y += (-pointer.y * 0.18 - camera.position.y) * 0.025;
    camera.position.z = 8.5 + Math.sin(scrollProgress * Math.PI) * 1.1;
    world.position.y = 0.2 + Math.sin(elapsed * 0.7) * 0.12 - scrollProgress * 1.6;
    world.rotation.z = scrollProgress * 0.65;
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(render);
  };
  render();

  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(devicePixelRatio, coarsePointer ? 1.2 : 1.8));
    renderer.setSize(innerWidth, innerHeight);
    world.position.x = innerWidth > 900 ? 3.15 : 0;
  }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(frameId);
    else render();
  });
  document.body.classList.add('webgl-ready');
}

function addTilt() {
  if (coarsePointer || reduceMotion) return;
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty('--glow-x', `${(x + 0.5) * 100}%`);
      card.style.setProperty('--glow-y', `${(y + 0.5) * 100}%`);
      gsap.to(card, { rotateY: x * 6, rotateX: y * -6, x: x * 4, y: y * 4, duration: 0.45, ease: 'power2.out', overwrite: true });
    });
    card.addEventListener('pointerleave', () => {
      gsap.to(card, { rotateY: 0, rotateX: 0, x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, .55)', overwrite: true });
    });
  });
}

function addScrollMotion() {
  if (reduceMotion) return;
  gsap.from('.site-header', { y: -30, opacity: 0, duration: 0.8, ease: 'power3.out' });
  gsap.from('.hero-copy > *', { y: 34, opacity: 0, duration: 0.85, stagger: 0.1, delay: 0.2, ease: 'power3.out' });
  gsap.from('.hero-portrait', { x: 40, opacity: 0, scale: 0.92, duration: 1.15, delay: 0.35, ease: 'power3.out' });

  document.querySelectorAll('.section-heading').forEach((heading) => {
    gsap.from(heading.children, {
      y: 52,
      opacity: 0,
      filter: 'blur(8px)',
      stagger: 0.1,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: heading, start: 'top 84%', once: true },
    });
  });

  document.querySelectorAll('.project, .timeline-item, .content-card').forEach((card) => {
    gsap.from(card, {
      y: 72,
      opacity: 0,
      scale: 0.95,
      duration: 0.95,
      ease: 'power3.out',
      scrollTrigger: { trigger: card, start: 'top 90%', once: true },
    });
  });

  gsap.from('.contact > *:not(.contact-orbit)', {
    y: 50,
    opacity: 0,
    stagger: 0.12,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.contact', start: 'top 72%', once: true },
  });
}

function setupMedia() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.35) entry.target.play().catch(() => {});
      else entry.target.pause();
    });
  }, { threshold: [0, 0.35, 0.7] });
  document.querySelectorAll('video').forEach((video) => observer.observe(video));
}

function setupUI() {
  const meter = document.querySelector('#scroll-meter-fill');
  const updateMeter = () => {
    const maximum = document.documentElement.scrollHeight - innerHeight;
    meter.style.transform = `scaleY(${maximum > 0 ? scrollY / maximum : 0})`;
  };
  addEventListener('scroll', updateMeter, { passive: true });
  updateMeter();

  const copyButton = document.querySelector('.copy-button');
  const toast = document.querySelector('.toast');
  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copy);
      toast.classList.add('visible');
      setTimeout(() => toast.classList.remove('visible'), 1800);
    } catch {
      copyButton.querySelector('span').textContent = copyButton.dataset.copy;
    }
  });
}

createSpaceScene();
addTilt();
addScrollMotion();
setupMedia();
setupUI();
addEventListener('load', () => ScrollTrigger.refresh());
