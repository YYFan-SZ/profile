import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './light-styles.css';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = matchMedia('(pointer: coarse)').matches;
const canvas = document.querySelector('#planet-stage');

function enrichLayout() {
  document.querySelector('#n8n-video')?.closest('#projects .grid > div')?.classList.add('n8n-feature-card');
  document.querySelectorAll('#top-nav .nav-item').forEach((item, index) => {
    item.dataset.navIndex = String(index + 1).padStart(2, '0');
  });

  document.querySelectorAll('main > section').forEach((section, index) => {
    section.dataset.gallery = `${String(index + 1).padStart(2, '0')} / ${String(section.id || 'SECTION').toUpperCase()}`;
  });

  document.body.insertAdjacentHTML('beforeend', `
    <div class="frame-corner frame-corner--tl" aria-hidden="true"></div>
    <div class="frame-corner frame-corner--br" aria-hidden="true"></div>
    <div class="page-coordinate" aria-hidden="true">PORTFOLIO INDEX<br>ZYF / 2026 / SZ</div>`);
}

function createIridescentPlanet() {
  if (!canvas || reduceMotion) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 0, 9.4);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !coarsePointer, powerPreference: 'high-performance' });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, coarsePointer ? 1.1 : 1.7));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.22;

  const installation = new THREE.Group();
  installation.position.set(innerWidth > 1100 ? 3.35 : 2.45, 1.0, -0.8);
  installation.scale.setScalar(1.15);
  installation.rotation.set(-0.08, -0.18, -0.12);
  scene.add(installation);

  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(1.56, 96, 96),
    new THREE.MeshPhysicalMaterial({
      color: 0xe8dcff,
      emissive: 0x9d58ff,
      emissiveIntensity: 0.14,
      metalness: 0.12,
      roughness: 0.12,
      transmission: 0.25,
      thickness: 1.4,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      iridescence: 1,
      iridescenceIOR: 1.35,
      iridescenceThicknessRange: [120, 520],
    }),
  );
  planet.renderOrder = 2;
  installation.add(planet);

  const surfaceUniforms = { uTime: { value: 0 } };
  const surface = new THREE.Mesh(
    new THREE.SphereGeometry(1.585, 96, 96),
    new THREE.ShaderMaterial({
      uniforms: surfaceUniforms,
      transparent: true,
      depthWrite: false,
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vWorld;
        void main(){
          vNormal = normalize(normalMatrix * normal);
          vWorld = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vWorld;
        void main(){
          vec3 viewDir = vec3(0.0, 0.0, 1.0);
          float fresnel = pow(1.0 - max(dot(normalize(vNormal), viewDir), 0.0), 2.4);
          float wave = sin(vWorld.y * 6.8 + vWorld.x * 2.8 + uTime * 0.55) * 0.5 + 0.5;
          float ribbons = sin(vWorld.x * 8.0 - vWorld.z * 5.0 - uTime * 0.38) * 0.5 + 0.5;
          vec3 violet = vec3(0.56, 0.24, 1.0);
          vec3 cyan = vec3(0.12, 0.94, 0.88);
          vec3 magenta = vec3(1.0, 0.22, 0.68);
          vec3 gold = vec3(1.0, 0.73, 0.22);
          vec3 color = mix(violet, cyan, wave);
          color = mix(color, magenta, ribbons * 0.52);
          color = mix(color, gold, pow(max(vNormal.y, 0.0), 3.0) * 0.34);
          float alpha = 0.12 + fresnel * 0.58 + wave * 0.055;
          gl_FragColor = vec4(color, alpha);
        }`,
    }),
  );
  surface.renderOrder = 3;
  installation.add(surface);

  const meridians = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.61, 4),
    new THREE.MeshBasicMaterial({ color: 0x65507f, wireframe: true, transparent: true, opacity: 0.045 }),
  );
  installation.add(meridians);

  const ringMaterial = new THREE.ShaderMaterial({
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    vertexShader: `varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
    fragmentShader: `
      varying vec2 vUv;
      void main(){
        float edge = smoothstep(0.0,.16,vUv.y) * smoothstep(1.0,.84,vUv.y);
        float bands = .38 + .62 * step(.45, fract(vUv.y * 13.0));
        vec3 a = vec3(.62,.46,.91); vec3 b = vec3(.42,.78,.71);
        vec3 color = mix(a,b,vUv.x);
        gl_FragColor = vec4(color, edge * bands * .24);
      }`,
  });
  const saturnRing = new THREE.Mesh(new THREE.RingGeometry(1.96, 2.78, 192, 8), ringMaterial);
  saturnRing.rotation.set(1.25, 0.18, -0.2);
  installation.add(saturnRing);

  const orbitGroup = new THREE.Group();
  [2.25, 2.82, 3.22].forEach((radius, index) => {
    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(radius, index === 1 ? 0.012 : 0.006, 8, 220),
      new THREE.MeshBasicMaterial({ color: [0x8265b3, 0x62b6a6, 0xf1a179][index], transparent: true, opacity: [0.28, 0.2, 0.15][index] }),
    );
    orbit.rotation.set(0.88 + index * 0.35, 0.22 + index * 0.51, 0.12 - index * 0.18);
    orbitGroup.add(orbit);
  });
  installation.add(orbitGroup);

  const satelliteGroup = new THREE.Group();
  const colors = [0x8f54ff, 0x31e7da, 0xff5fbd, 0xffc94d, 0xffffff];
  for (let index = 0; index < 42; index += 1) {
    const angle = (index / 42) * Math.PI * 2;
    const radius = 2.3 + (index % 4) * 0.27;
    const satellite = new THREE.Mesh(
      new THREE.SphereGeometry(0.025 + (index % 3) * 0.022, 16, 16),
      new THREE.MeshBasicMaterial({ color: colors[index % colors.length] }),
    );
    satellite.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.7) * 1.12, Math.sin(angle) * radius);
    satellite.userData.phase = angle;
    satelliteGroup.add(satellite);
  }
  installation.add(satelliteGroup);

  const sectionIds = ['hero', 'projects', 'experience', 'practice', 'content', 'contact'];
  const sectionLatitudes = [.12, -.24, .3, -.18, .22, -.08];
  const navigationSurface = new THREE.Group();
  const surfaceMarkers = [];
  const markerPalette = [0xffffff, 0x8f54ff, 0x31e7da, 0xff5fbd, 0xffc94d, 0x8f54ff];
  sectionIds.forEach((section, index) => {
    const longitude = (index / sectionIds.length) * Math.PI * 2;
    const latitude = sectionLatitudes[index];
    const radius = 1.69;
    const marker = new THREE.Mesh(
      new THREE.SphereGeometry(.045, 18, 18),
      new THREE.MeshBasicMaterial({ color: markerPalette[index], transparent: true, opacity: .9 }),
    );
    marker.position.set(
      Math.sin(longitude) * Math.cos(latitude) * radius,
      Math.sin(latitude) * radius,
      Math.cos(longitude) * Math.cos(latitude) * radius,
    );
    marker.userData.section = section;
    marker.userData.phase = index * .8;
    navigationSurface.add(marker);
    surfaceMarkers.push(marker);
  });

  const routePoints = [];
  for (let index = 0; index <= 120; index += 1) {
    const progress = index / 120;
    const angle = progress * Math.PI * 2;
    const latitude = Math.sin(angle * 2.0 + .35) * .28;
    const radius = 1.67;
    routePoints.push(new THREE.Vector3(
      Math.sin(angle) * Math.cos(latitude) * radius,
      Math.sin(latitude) * radius,
      Math.cos(angle) * Math.cos(latitude) * radius,
    ));
  }
  const routeCurve = new THREE.CatmullRomCurve3(routePoints, true, 'centripetal');
  const route = new THREE.Mesh(
    new THREE.TubeGeometry(routeCurve, 180, .008, 6, true),
    new THREE.MeshBasicMaterial({ color: 0x67e8dd, transparent: true, opacity: .48, blending: THREE.AdditiveBlending, depthWrite: false }),
  );
  navigationSurface.add(route);
  const routeBeacon = new THREE.Mesh(
    new THREE.SphereGeometry(.028, 14, 14),
    new THREE.MeshBasicMaterial({ color: 0xffffff, blending: THREE.AdditiveBlending }),
  );
  navigationSurface.add(routeBeacon);
  installation.add(navigationSurface);
  let activeMarkerSection = 'hero';

  const auraCount = coarsePointer ? 520 : 1400;
  const auraPositions = new Float32Array(auraCount * 3);
  const auraColors = new Float32Array(auraCount * 3);
  const auraPalette = [0x8f54ff, 0x31e7da, 0xff5fbd, 0xffc94d, 0xffffff].map((value) => new THREE.Color(value));
  for (let index = 0; index < auraCount; index += 1) {
    const direction = new THREE.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5).normalize();
    const radius = 1.7 + Math.pow(Math.random(), 1.9) * 1.65;
    direction.multiplyScalar(radius);
    auraPositions.set([direction.x, direction.y, direction.z], index * 3);
    const color = auraPalette[index % auraPalette.length].clone().lerp(auraPalette[(index + 1) % auraPalette.length], Math.random() * .35);
    auraColors.set([color.r, color.g, color.b], index * 3);
  }
  const auraGeometry = new THREE.BufferGeometry();
  auraGeometry.setAttribute('position', new THREE.BufferAttribute(auraPositions, 3));
  auraGeometry.setAttribute('color', new THREE.BufferAttribute(auraColors, 3));
  const aura = new THREE.Points(auraGeometry, new THREE.PointsMaterial({
    size: coarsePointer ? .026 : .021, vertexColors: true, transparent: true, opacity: .74,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
  }));
  installation.add(aura);

  const dustCount = coarsePointer ? 120 : 320;
  const positions = new Float32Array(dustCount * 3);
  for (let index = 0; index < dustCount; index += 1) {
    positions[index * 3] = (Math.random() - 0.5) * 16;
    positions[index * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[index * 3 + 2] = (Math.random() - 0.5) * 9 - 2;
  }
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const dust = new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: 0x8c799e, size: 0.014, transparent: true, opacity: 0.28 }));
  scene.add(dust);

  scene.add(new THREE.HemisphereLight(0xffffff, 0xd8cdea, 2.8));
  const key = new THREE.DirectionalLight(0xffffff, 4.5);
  key.position.set(-4, 5, 7);
  scene.add(key);
  const rim = new THREE.PointLight(0x8ee2d0, 18, 16, 2);
  rim.position.set(4, -2, 4);
  scene.add(rim);
  const warm = new THREE.PointLight(0xffb294, 10, 12, 2);
  warm.position.set(-3, -2, 3);
  scene.add(warm);

  const pointer = new THREE.Vector2();
  const pointerTarget = new THREE.Vector2();
  addEventListener('pointermove', (event) => pointerTarget.set((event.clientX / innerWidth - 0.5) * 2, (event.clientY / innerHeight - 0.5) * 2), { passive: true });

  let scrollProgress = 0;
  let jumpTransition = null;
  let jumpRotationOffset = 0;
  const rotateToSection = (section, duration = 760, strength = .42) => {
    const sectionIndex = Math.max(0, sectionIds.indexOf(section));
    const fullTurn = Math.PI * 2;
    const desiredAngle = -(sectionIndex / sectionIds.length) * fullTurn;
    const currentAngle = ((jumpRotationOffset % fullTurn) + fullTurn) % fullTurn;
    const desiredNormalized = ((desiredAngle % fullTurn) + fullTurn) % fullTurn;
    let delta = desiredNormalized - currentAngle;
    delta = ((delta + Math.PI) % fullTurn + fullTurn) % fullTurn - Math.PI;
    jumpTransition = {
      started: performance.now(), from: jumpRotationOffset, to: jumpRotationOffset + delta,
      direction: delta >= 0 ? 1 : -1, duration, strength, section,
    };
  };
  addEventListener('planet:section', (event) => {
    const section = event.detail?.section || 'hero';
    activeMarkerSection = section;
    if (jumpTransition?.section !== section) rotateToSection(section);
  });
  ScrollTrigger.create({ trigger: document.documentElement, start: 'top top', end: 'bottom bottom', onUpdate: (self) => { scrollProgress = self.progress; } });
  addEventListener('planet:navigate', (event) => {
    const direction = event.detail?.direction || 1;
    const sectionIndex = Math.max(0, sectionIds.indexOf(event.detail?.section));
    const desiredAngle = -(sectionIndex / sectionIds.length) * Math.PI * 2;
    const fullTurn = Math.PI * 2;
    const currentAngle = ((jumpRotationOffset % fullTurn) + fullTurn) % fullTurn;
    const desiredNormalized = ((desiredAngle % fullTurn) + fullTurn) % fullTurn;
    let delta = desiredNormalized - currentAngle;
    if (direction > 0 && delta <= 0) delta += fullTurn;
    if (direction < 0 && delta >= 0) delta -= fullTurn;
    jumpTransition = {
      started: performance.now(),
      from: jumpRotationOffset,
      to: jumpRotationOffset + delta + direction * fullTurn,
      direction,
      duration: 1150,
      strength: 1,
      section: event.detail?.section || 'hero',
    };
    activeMarkerSection = event.detail?.section || 'hero';
  });

  const timer = new THREE.Timer();
  timer.connect(document);
  const render = () => {
    timer.update();
    const elapsed = timer.getElapsed();
    surfaceUniforms.uTime.value = elapsed;
    pointer.lerp(pointerTarget, 0.045);
    let jumpProgress = 0;
    let jumpImpulse = 0;
    let jumpLean = 0;
    let jumpDirection = 1;
    if (jumpTransition) {
      jumpProgress = Math.min((performance.now() - jumpTransition.started) / (jumpTransition.duration || 1150), 1);
      const eased = jumpProgress < .5
        ? 4 * jumpProgress * jumpProgress * jumpProgress
        : 1 - Math.pow(-2 * jumpProgress + 2, 3) / 2;
      jumpRotationOffset = THREE.MathUtils.lerp(jumpTransition.from, jumpTransition.to, eased);
      jumpImpulse = Math.sin(jumpProgress * Math.PI) * (jumpTransition.strength ?? 1);
      jumpDirection = jumpTransition.direction;
      jumpLean = Math.sin(jumpProgress * Math.PI * 2) * jumpDirection * (jumpTransition.strength ?? 1);
      if (jumpProgress >= 1) jumpTransition = null;
    }
    planet.rotation.y = elapsed * 0.16 + scrollProgress * Math.PI * 1.2 + jumpRotationOffset;
    planet.rotation.x = Math.sin(elapsed * .22) * .055 + jumpLean * .035;
    surface.rotation.y = elapsed * .11 + jumpRotationOffset * .82;
    surface.rotation.x = -jumpLean * .025;
    meridians.rotation.y = -elapsed * 0.035 - jumpRotationOffset * .32;
    meridians.rotation.z = elapsed * 0.018 + jumpLean * .045;
    saturnRing.rotation.z = -0.2 + Math.sin(elapsed * 0.22) * 0.035 + jumpLean * .055;
    orbitGroup.rotation.y = elapsed * 0.035 + pointer.x * 0.08 + jumpRotationOffset * .22;
    orbitGroup.rotation.x = pointer.y * 0.035 + jumpLean * .06;
    satelliteGroup.rotation.y = elapsed * 0.12 + jumpRotationOffset * .48;
    aura.rotation.y = -elapsed * 0.028 - jumpRotationOffset * .16;
    aura.rotation.z = elapsed * 0.012 + jumpLean * .08;
    navigationSurface.rotation.y = planet.rotation.y;
    navigationSurface.rotation.x = planet.rotation.x;
    routeBeacon.position.copy(routeCurve.getPointAt((elapsed * .035 + jumpProgress * .18) % 1));
    surfaceMarkers.forEach((marker) => {
      const active = marker.userData.section === activeMarkerSection;
      const pulse = 1 + Math.sin(elapsed * 2.4 + marker.userData.phase) * .14;
      marker.scale.setScalar((active ? 2.35 : .9) * pulse * (1 + jumpImpulse * .22));
      marker.material.opacity = active ? 1 : .62;
    });
    aura.scale.setScalar(1 + jumpImpulse * .2);
    key.intensity = 4.5 + jumpImpulse * 2.8;
    rim.intensity = 18 + jumpImpulse * 14;
    warm.intensity = 10 + jumpImpulse * 7;
    satelliteGroup.children.forEach((dot) => dot.scale.setScalar(0.8 + Math.sin(elapsed * 1.6 + dot.userData.phase) * 0.25));
    const isHome = document.body.classList.contains('planet-view-home');
    const isHovering = document.body.classList.contains('planet-nav-hover');
    const wide = innerWidth > 1100;
    const narrow = innerWidth < 700;
    const targetX = narrow
      ? (isHome ? 1.42 : isHovering ? 1.5 : 1.85)
      : isHome ? (wide ? 2.78 : 2.02) : isHovering ? (wide ? 3.55 : 2.58) : (wide ? 4.45 : 3.22);
    const sectionY = {
      projects: 1.35,
      experience: .72,
      practice: 0,
      content: -.72,
      contact: -1.42,
    }[activeMarkerSection] ?? 0;
    const targetY = isHome ? (narrow ? -1.55 : -.22) : sectionY;
    // Keep the decoration secondary on phones: the desktop scale overwhelms the
    // hero copy and leaves too little breathing room in a narrow viewport.
    const targetScale = narrow
      ? (isHome ? .68 : isHovering ? .5 : .34)
      : (isHome ? 1.15 : isHovering ? .82 : .48);
    installation.position.x += (targetX - installation.position.x) * .055;
    installation.position.y += (targetY + Math.sin(elapsed * .45) * .045 - installation.position.y) * .055;
    const dimensionalScale = targetScale * (1 + jumpImpulse * .16);
    const nextScale = installation.scale.x + (dimensionalScale - installation.scale.x) * .075;
    installation.scale.setScalar(nextScale);
    installation.position.z += ((-.8 + jumpImpulse * .52) - installation.position.z) * .12;
    installation.rotation.x += ((-.08 + jumpLean * .1) - installation.rotation.x) * .12;
    installation.rotation.y += ((-.18 + jumpImpulse * jumpDirection * .16) - installation.rotation.y) * .12;
    installation.rotation.z += ((isHome ? -.12 : isHovering ? -.04 : .08) + jumpLean * .06 - installation.rotation.z) * .09;
    camera.position.z += ((9.4 - jumpImpulse * .22) - camera.position.z) * .1;
    camera.position.x += (pointer.x * 0.13 - camera.position.x) * 0.025;
    camera.position.y += (-pointer.y * 0.09 - camera.position.y) * 0.025;
    dust.rotation.y = elapsed * 0.003;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();

  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, coarsePointer ? 1.1 : 1.7));
  }, { passive: true });
  document.body.classList.add('planet-ready');
}

function createGalleryMotion() {
  const selectors = [
    '#projects > .reveal > .grid > div',
    '#experience .scrapbook-card',
    '#practice > .reveal > .grid > div',
    '#content > .reveal > .grid > div',
    '#contact > .reveal > .grid > div',
  ];
  const cards = [...document.querySelectorAll(selectors.join(','))];
  cards.forEach((card, index) => {
    card.classList.add('exhibition-card');
    card.dataset.exhibit = `OBJ.${String(index + 1).padStart(3, '0')}`;
    if (!coarsePointer && !reduceMotion) {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty('--light-x', `${(x + 0.5) * 100}%`);
        card.style.setProperty('--light-y', `${(y + 0.5) * 100}%`);
        gsap.to(card, { rotateY: x * 3.2, rotateX: y * -3.2, z: 18, duration: 0.48, ease: 'power2.out', overwrite: true });
      });
      card.addEventListener('pointerleave', () => gsap.to(card, { rotateY: 0, rotateX: 0, z: 0, duration: 0.7, ease: 'power3.out', overwrite: true }));
    }
  });

  if (reduceMotion) return;
  gsap.from('#hero .relative.group', { clipPath: 'inset(0 100% 0 0)', x: -24, duration: 1.05, ease: 'power4.inOut' });
  gsap.from('#hero h1, #hero p, #hero .inline-flex', { y: 28, opacity: 0, stagger: 0.09, duration: 0.75, delay: 0.18, ease: 'power3.out' });

  cards.forEach((card) => {
    gsap.fromTo(card, { y: 42, opacity: 0, clipPath: 'inset(0 0 14% 0)' }, {
      y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.82, ease: 'power3.out',
      scrollTrigger: { trigger: card, start: 'top 90%', once: true },
    });
  });
  document.querySelectorAll('section h2').forEach((heading) => {
    gsap.fromTo(heading, { yPercent: 70, opacity: 0 }, {
      yPercent: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: heading, start: 'top 92%', once: true },
    });
  });
}

function manageVideos() {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.4) entry.target.play().catch(() => {});
    else entry.target.pause();
  }), { threshold: [0, 0.4, 0.75] });
  document.querySelectorAll('video').forEach((video) => observer.observe(video));
}

enrichLayout();
createIridescentPlanet();
createGalleryMotion();
manageVideos();
addEventListener('load', () => ScrollTrigger.refresh());











