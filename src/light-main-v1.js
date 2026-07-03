import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './light-styles.css';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
const canvas = document.querySelector('#planet-stage');

function createPlanet() {
  if (!canvas || reduceMotion) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 0, 8.4);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !coarsePointer, powerPreference: 'high-performance' });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, coarsePointer ? 1.15 : 1.65));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  const installation = new THREE.Group();
  installation.position.set(innerWidth > 1050 ? 3.65 : 2.35, 1.05, -0.6);
  scene.add(installation);

  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(1.48, 72, 72),
    new THREE.MeshPhysicalMaterial({
      color: 0xded3ff,
      emissive: 0x7d67b8,
      emissiveIntensity: 0.06,
      metalness: 0.05,
      roughness: 0.48,
      clearcoat: 0.8,
      clearcoatRoughness: 0.25,
    }),
  );
  installation.add(planet);

  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.58, 48, 48),
    new THREE.MeshBasicMaterial({ color: 0xbba8f2, transparent: true, opacity: 0.08, side: THREE.BackSide }),
  );
  installation.add(atmosphere);

  const wire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.52, 3),
    new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.12 }),
  );
  installation.add(wire);

  const rings = new THREE.Group();
  [2.05, 2.32].forEach((radius, index) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius, index ? 0.016 : 0.025, 10, 160),
      new THREE.MeshBasicMaterial({ color: index ? 0x80cfc4 : 0xa58be8, transparent: true, opacity: index ? 0.46 : 0.58 }),
    );
    ring.rotation.set(1.18 + index * 0.3, 0.28 + index * 0.62, 0.1);
    rings.add(ring);
  });
  installation.add(rings);

  const satellites = new THREE.Group();
  const satelliteColors = [0xf4b8cc, 0x9eddd3, 0xffdc8f, 0xb49af0, 0xffffff];
  for (let index = 0; index < 10; index += 1) {
    const angle = (index / 10) * Math.PI * 2;
    const radius = 2.15 + (index % 3) * 0.28;
    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(0.04 + (index % 2) * 0.035, 16, 16),
      new THREE.MeshBasicMaterial({ color: satelliteColors[index % satelliteColors.length] }),
    );
    dot.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.65) * 0.95, Math.sin(angle) * radius);
    dot.userData.phase = angle;
    satellites.add(dot);
  }
  installation.add(satellites);

  const dustCount = coarsePointer ? 180 : 420;
  const dustPosition = new Float32Array(dustCount * 3);
  for (let index = 0; index < dustCount; index += 1) {
    dustPosition[index * 3] = (Math.random() - 0.5) * 15;
    dustPosition[index * 3 + 1] = (Math.random() - 0.5) * 11;
    dustPosition[index * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
  }
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPosition, 3));
  const dust = new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: 0xb7a5e2, size: 0.018, transparent: true, opacity: 0.34 }));
  scene.add(dust);

  scene.add(new THREE.HemisphereLight(0xffffff, 0xe7ddff, 2.4));
  const key = new THREE.DirectionalLight(0xffffff, 3.2);
  key.position.set(-3, 4, 5);
  scene.add(key);
  const lavender = new THREE.PointLight(0xb49af0, 14, 15, 2);
  lavender.position.set(4, -2, 3);
  scene.add(lavender);

  const pointer = new THREE.Vector2();
  const pointerTarget = new THREE.Vector2();
  addEventListener('pointermove', (event) => {
    pointerTarget.set((event.clientX / innerWidth - 0.5) * 2, (event.clientY / innerHeight - 0.5) * 2);
  }, { passive: true });

  let scrollProgress = 0;
  ScrollTrigger.create({ trigger: document.documentElement, start: 'top top', end: 'bottom bottom', onUpdate: (self) => { scrollProgress = self.progress; } });

  const timer = new THREE.Timer();
  timer.connect(document);
  const render = () => {
    timer.update();
    const elapsed = timer.getElapsed();
    pointer.lerp(pointerTarget, 0.04);
    planet.rotation.y = elapsed * 0.08 + scrollProgress * Math.PI * 1.5;
    planet.rotation.x = pointer.y * 0.06;
    wire.rotation.y = -elapsed * 0.045;
    wire.rotation.z = elapsed * 0.025;
    rings.rotation.y = elapsed * 0.045 + pointer.x * 0.08;
    satellites.rotation.y = elapsed * 0.09;
    satellites.children.forEach((dot) => dot.scale.setScalar(0.8 + Math.sin(elapsed * 1.8 + dot.userData.phase) * 0.22));
    installation.rotation.z = -0.12 + scrollProgress * 0.35;
    installation.position.y = 1.05 - scrollProgress * 2.4 + Math.sin(elapsed * 0.55) * 0.08;
    camera.position.x += (pointer.x * 0.16 - camera.position.x) * 0.025;
    camera.position.y += (-pointer.y * 0.1 - camera.position.y) * 0.025;
    dust.rotation.y = elapsed * 0.004;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();

  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, coarsePointer ? 1.15 : 1.65));
    installation.position.x = innerWidth > 1050 ? 3.65 : 2.35;
  }, { passive: true });

  document.body.classList.add('planet-ready');
}

function curateExhibition() {
  const cardSelectors = [
    '#projects > .reveal > .grid > div',
    '#experience .scrapbook-card',
    '#practice > .reveal > .grid > div',
    '#content > .reveal > .grid > div',
    '#contact > .reveal > .grid > div',
  ];
  const cards = [...document.querySelectorAll(cardSelectors.join(','))];
  cards.forEach((card, index) => {
    card.classList.add('exhibition-card');
    card.dataset.exhibit = `EXHIBIT ${String(index + 1).padStart(2, '0')}`;

    if (!coarsePointer && !reduceMotion) {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty('--light-x', `${(x + 0.5) * 100}%`);
        card.style.setProperty('--light-y', `${(y + 0.5) * 100}%`);
        gsap.to(card, { rotateY: x * 5, rotateX: y * -5, z: 16, duration: 0.42, ease: 'power2.out', overwrite: true });
      });
      card.addEventListener('pointerleave', () => gsap.to(card, { rotateY: 0, rotateX: 0, z: 0, duration: 0.75, ease: 'elastic.out(1,.6)', overwrite: true }));
    }
  });

  document.querySelectorAll('main > section').forEach((section, index) => {
    section.dataset.gallery = `0${index + 1} / ${String(section.id || 'SECTION').toUpperCase()}`;
  });

  if (!reduceMotion) {
    cards.forEach((card) => {
      gsap.fromTo(card, { y: 56, opacity: 0, scale: 0.94, rotateX: 4 }, {
        y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 0.95, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 88%', once: true },
      });
    });
    document.querySelectorAll('section h2').forEach((heading) => {
      gsap.fromTo(heading, { y: 30, opacity: 0, filter: 'blur(8px)' }, {
        y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: heading, start: 'top 90%', once: true },
      });
    });
  }
}

function manageVideos() {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.4) entry.target.play().catch(() => {});
    else entry.target.pause();
  }), { threshold: [0, 0.4, 0.75] });
  document.querySelectorAll('video').forEach((video) => observer.observe(video));
}

createPlanet();
curateExhibition();
manageVideos();
addEventListener('load', () => ScrollTrigger.refresh());
