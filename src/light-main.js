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
  // Preserve the iridescent finish without pushing the pale centre into white.
  renderer.toneMappingExposure = 1.26;

  const installation = new THREE.Group();
  installation.position.set(innerWidth > 1100 ? 3.35 : 2.45, 1.0, -0.8);
  installation.scale.setScalar(1.15);
  installation.rotation.set(-0.08, -0.18, -0.12);
  scene.add(installation);

  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(1.56, 96, 96),
    new THREE.MeshPhysicalMaterial({
      color: 0xeee8f7,
      emissive: 0x8063ab,
      emissiveIntensity: 0.16,
      metalness: 0.18,
      roughness: 0.2,
      transmission: 0.16,
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
          // Pearl tones retain the sense of luxury, while the added grey keeps
          // overlapping transparent layers comfortable to look at.
          vec3 violet = vec3(0.43, 0.31, 0.66);
          vec3 cyan = vec3(0.24, 0.72, 0.68);
          vec3 magenta = vec3(0.73, 0.38, 0.61);
          vec3 gold = vec3(0.78, 0.62, 0.38);
          vec3 color = mix(violet, cyan, wave);
          color = mix(color, magenta, ribbons * 0.52);
          color = mix(color, gold, pow(max(vNormal.y, 0.0), 3.0) * 0.34);
          float alpha = 0.14 + fresnel * 0.56 + wave * 0.06;
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
  const colors = [0x8269ad, 0x5eb6aa, 0xd780ab, 0xd6ad62, 0xf4eff7];
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

  const sectionIds = ['hero', 'projects', 'experience', 'content', 'contact'];
  const sectionLatitudes = [.12, -.24, .3, .22, -.08];
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
  const auraPalette = [0x8064aa, 0x5eb7aa, 0xd982ad, 0xd4ad62, 0xf1ecf3].map((value) => new THREE.Color(value));
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
    size: coarsePointer ? .026 : .021, vertexColors: true, transparent: true, opacity: .64,
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

  scene.add(new THREE.HemisphereLight(0xffffff, 0xddd1eb, 3.05));
  const key = new THREE.DirectionalLight(0xffffff, 4.8);
  key.position.set(-4, 5, 7);
  scene.add(key);
  const rim = new THREE.PointLight(0xa3e7db, 17, 16, 2);
  rim.position.set(4, -2, 4);
  scene.add(rim);
  const warm = new THREE.PointLight(0xf4c9b8, 10, 12, 2);
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
    key.intensity = 4.8 + jumpImpulse * 2.5;
    rim.intensity = 17 + jumpImpulse * 10;
    warm.intensity = 10 + jumpImpulse * 6;
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

function createExperienceArchiveModal() {
  const modal = document.querySelector('#experience-modal');
  const cards = [...document.querySelectorAll('[data-experience-detail]')];
  const cardCaptions = {
    startup: '负责视觉物料、公众号内容与活动传播落地。',
    youth: '协助赛事资料、团队与专家的多方对接。',
    honors: '奖学金、提案与演讲比赛的阶段积累。',
    volunteer: '赛事新媒体现场的转播与媒体支持。',
    sailing: '陪伴 30+ 成员推进任务、解决执行卡点。',
  };
  cards.forEach((card) => {
    const caption = cardCaptions[card.dataset.experienceDetail];
    if (!caption || card.querySelector('.archive-card__caption')) return;
    const node = document.createElement('span');
    node.className = 'archive-card__caption';
    node.textContent = caption;
    card.appendChild(node);
  });
  if (!modal || !cards.length) return;
  const details = {
    startup: ['01 / CAMPUS ARCHIVE', '创业协会', '宣传部部长 / 核心骨干', ['image/%E6%B5%B7%E6%8A%A5%E6%AD%A3%E9%9D%A2.jpg', 'image/%E6%B5%B7%E6%8A%A5%E8%83%8C%E9%9D%A2.jpg', 'image/KT%E6%9D%BF.jpg', 'image/%E6%8E%A8%E6%96%871.jpg', 'image/%E6%8E%A8%E6%96%872.jpg'], '我的工作', '负责协会<strong>公众号日常运营</strong>，独立完成活动海报、KT板、推文等<strong>全套视觉物料设计与图文撰写</strong>。', '代表项目', '深度参与「科研新星」特色活动<strong>全流程对接落地</strong>，搭建校内学术交流与实践对接平台。', ['公众号运营', '视觉设计', '活动落地']],
    youth: ['02 / CAMPUS ARCHIVE', '校团委科创部', '学生骨干', ['image/%E6%A0%A1%E5%9B%A2%E5%A7%94%E7%A7%91%E5%88%9B%E9%83%A8.jpg'], '关键经历', '经过<strong>5轮面试筛选</strong>进入科创部核心团队，协助统筹「挑战杯」、创新工程等校级重点科创赛事。', '全流程协作', '负责<strong>参赛材料审核、参赛团队与评审专家对接、现场会务协调</strong>等全环节工作。多线程同步推进任务，严格跟进时间节点，在参赛学生、指导老师、组委会三方间做好信息同步，保障赛事有序推进。', ['赛事流程', '多方沟通', '任务管理']],
    honors: ['03 / CAMPUS HIGHLIGHTS', '&#x95EA;&#x5149;&#x788E;&#x7247;&#x96C6;&#x9526;', '&#x6301;&#x7EED;&#x6295;&#x5165;&#xFF0C;&#x4E5F;&#x6301;&#x7EED;&#x7559;&#x4E0B;&#x7ED3;&#x679C;', ['image/%E6%BC%94%E8%AE%B2.jpg'], '&#x5B66;&#x4E1A;&#x4E0E;&#x601D;&#x60F3;&#x5EFA;&#x8BBE;', '&#x8363;&#x83B7; 3 &#x6B21;&#x6821;&#x7EA7;&#x5956;&#x5B66;&#x91D1;&#xFF1B;&#x83B7;&#x300C;&#x4F18;&#x79C0;&#x5171;&#x9752;&#x56E2;&#x5458;&#x300D;&#x3002;', '&#x7EC4;&#x7EC7;&#x4E0E;&#x8868;&#x8FBE;', '&#x7B56;&#x5212;&#x4E66;&#x5927;&#x8D5B;&#x4E09;&#x7B49;&#x5956;&#x3001;&#x63D0;&#x6848;&#x5F81;&#x96C6;&#x4E8C;&#x7B49;&#x5956;&#x3001;&#x6F14;&#x8BB2;&#x6BD4;&#x8D5B;&#x4E09;&#x7B49;&#x5956;&#x7B49;&#x3002;', ['CET-4&#xFF1A;527 &#x5206;', 'CET-6&#xFF1A;471 &#x5206;', '&#x519B;&#x8BAD;&#x5148;&#x8FDB;&#x4E2A;&#x4EBA;']],
    volunteer: ['01 / PRACTICE ARCHIVE', '十五运志愿服务', '第十五届全国运动会志愿者', ['image/%E5%BF%97%E6%84%BF%E8%80%85%E8%AF%81%E4%B9%A6.jpg'], '服务场景', '任职<strong>拳击赛事新媒体转播岗位</strong>，负责电视转播配套辅助工作，统筹媒体签到、新闻发布厅现场运营等事务。', '能力沉淀', '身处高强度、快节奏赛事现场，完成多岗位协同工作，锻炼<strong>应急处理与抗压能力</strong>。面对多线并行工作，优先梳理信息、划分任务轻重缓急有序落地，高效完成现场协调事务。', ['转播辅助', '媒体运营', '现场协调']],
    sailing: ['02 / PRACTICE ARCHIVE', '生财有术航海', '成长陪伴教练', ['image/%E7%94%9F%E8%B4%A2%E6%9C%89%E6%9C%AF.jpg'], '陪伴与协作', '每期负责对接<strong>30余名圈友</strong>，联动领队、志愿者统筹营地日常运营事务', '验证结果', '任职周期内所带小组获评<strong>A级评级</strong>，圆满达成<strong>小组全员上岸</strong>成果，锤炼了社群维护与沟通协调能力。', ['30+ 人小组', 'A级评级', '全员上岸']],
  };
  const expandedCopy = JSON.parse(new TextDecoder().decode(Uint8Array.from(atob('eyJzdGFydHVwIjoiPGg0PuW3peS9nOWxleW8gDwvaDQ+PHA+5Zu057uV5rS75Yqo5Lyg5pKt6ZyA5rGC5qKz55CG5L+h5oGv5bGC57qn77yM6YWN5ZCI5a6M5oiQ5rW35oql44CBS1Qg5p2/5ZKM5o6o5paH562J5LiN5ZCM6L295L2T55qE5YaF5a656KGU5o6l77yb5LuO6KeG6KeJ5ZGI546w5Yiw5Y+R5biD6IqC5aWP5L+d5oyB5LiA6Ie077yM5pa55L6/5ZCM5a2m5b+r6YCf5LqG6Kej5rS75Yqo6YeN54K544CCPC9wPjxoND7ljY/kvZzmlLbojrc8L2g0PjxwPuWcqOekvuWbouaXpeW4uOayn+mAmuS4reaMgee7rei/reS7o+eJqeaWmeS4juihqOi+vuaWueW8j++8jOW9ouaIkOS6huWwhuWIm+aEj+aLhuaIkOWPr+aJp+ihjOa4heWNleOAgeWGjeiQveWIsOWFt+S9k+S6pOS7mOeJqeeahOW3peS9nOS5oOaDr+OAgjwvcD4iLCJ5b3V0aCI6IjxoND7lt6XkvZzlsZXlvIA8L2g0PjxwPuWPguS4juaMkeaImOadr+OAgeWIm+aWsOW3peeoi+etiei1m+S6i+eahOi1hOaWmeaVtOeQhuS4jua1geeoi+WNj+S9nO+8jOi3n+i/m+S4jeWQjOeOr+iKgueahOaXtumXtOiKgueCue+8jOW5tuWcqOWboumYn+OAgeWPgui1m+WQjOWtpuWSjOebuOWFs+iAgeW4iOS5i+mXtOS/neaMgeS/oeaBr+WQjOatpeOAgjwvcD48aDQ+5Y2P5L2c5pS26I63PC9oND48cD7ov5nmrrXnu4/ljoborqnmiJHmm7Tnhp/mgonlpJrnur/nqIvku7vliqHnmoTmi4bliIbmlrnlvI/vvJrlhYjmmI7noa7mr4/kuKrnjq/oioLnmoTkuqTku5jmoIflh4bvvIzlho3pgJrov4fmuIXljZXlkozmsp/pgJrlh4/lsJHpgZfmvI/vvIzkv53or4Hkuovpobnog73mjInoioLlpY/mjqjov5vjgII8L3A+IiwiaG9ub3JzIjoiPGg0PuaIkOmVv+iEiee7nDwvaDQ+PHA+5aWW6aG55LiO6I2j6KqJ6K6w5b2V55qE5piv5LiA5q615oyB57ut5oqV5YWl55qE6L+H56iL77ya5pei5YyF5ous5a2m5Lia5LiO6KGo6L6+6IO95Yqb55qE56ev57Sv77yM5Lmf5p2l6Ieq5LiA5qyh5qyh562W5YiS44CB5o+Q5qGI5ZKM5YWs5byA5bGV56S65Lit55qE5aSN55uY44CCPC9wPjxoND7lrp7ot7XmlLbojrc8L2g0PjxwPumAmui/h+aKiumYtuauteebruagh+aLhuino+S4uuWPr+WujOaIkOeahOWwj+S7u+WKoe+8jOmAkOatpeW7uueri+S6huabtOeos+WumueahOaJp+ihjOiKguWlj++8jOW5tuaKiumYheivu+OAgeWGmeS9nOOAgeihqOi+vuWSjOmhueebruWNj+S9nOayiea3gOS4uuWPr+i/geenu+eahOiDveWKm+OAgjwvcD4iLCJ2b2x1bnRlZXIiOiI8aDQ+546w5Zy65bel5L2cPC9oND48cD7lnKjotZvkuovmlrDlqpLkvZPkuI7nlLXop4bovazmkq3ovoXliqnlnLrmma/kuK3vvIzphY3lkIjlqpLkvZPnrb7liLDjgIHmlrDpl7vlj5HluIPljoXnrYnnjrDlnLrkuovliqHvvJvpnaLlr7nlpJrkurrljY/lkIzlkozpq5jpopHlj5jljJbvvIzkvJjlhYjnoa7orqTkv6Hmga/jgIHliIbmuIXovbvph43nvJPmgKXlkI7lho3pgJDpobnlpITnkIbjgII8L3A+PGg0PuWunui3teaUtuiOtzwvaDQ+PHA+5aSn5Z6L6LWb5LqL6K6p5oiR5pu055u06KeC5Zyw55CG6Kej5LqG546w5Zy65rWB56iL55qE6YeN6KaB5oCn44CC5L+d5oyB5Y+K5pe25ZON5bqU44CB5YeG56Gu5Lyg6L6+5ZKM56iz5a6a6YWN5ZCI77yM5piv56Gu5L+d5q+P5LiA5Liq546v6IqC6aG655WF6L+Q6L2s55qE5Z+656GA44CCPC9wPiIsInNhaWxpbmciOiI8aDQ+6Zmq5Ly05pa55byPPC9oND48cD7lnKjoiKrmtbfpobnnm67kuK3lm7Tnu5XlsI/nu4TmiJDlkZjnmoTlrp7pmYXljaHngrnov5vooYzmsp/pgJrvvIznu5PlkIjpmLbmrrXku7vliqHjgIHlpI3nm5jorrDlvZXlkozml6XluLjlj43ppojvvIzluK7liqnlpKflrrbmiornm67moIfmi4bmiJDmm7TlrrnmmJPlvIDlp4vlkozmjIHnu63lrozmiJDnmoTlsI/mraXpqqTjgII8L3A+PGg0PuWunui3teaUtuiOtzwvaDQ+PHA+5LiOIDMwIOWkmuS9jeWciOWPi+WFseWQjOaOqOi/m+eahOi/h+eoi++8jOiuqeaIkeaMgee7ree7g+S5oOWAvuWQrOOAgeaPkOmXruS4jui3n+i/m++8muS4jeWPque7meWHuuW7uuiuru+8jOS5n+WFs+azqOavj+S4quS6uueahOaJp+ihjOiKguWlj+WSjOWQjue7reWPjemmiOOAgjwvcD4ifQ=='), (char) => char.charCodeAt(0))));
  const compactCopy = Object.fromEntries(Object.entries(expandedCopy).map(([key, html]) => [key, (html.match(/<p>([\s\S]*?)<\/p>/) || ['', ''])[1]]));
  let opener;
  const close = () => { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; opener?.focus(); };
  const open = (id, trigger) => {
    const d = details[id]; if (!d) return; opener = trigger;
    const archiveMedia = id === 'startup'
      ? '<div class="archive-media-grid"><button class="archive-media-card archive-media-card--flip" type="button" data-flip-poster aria-label="&#x70B9;&#x51FB;&#x67E5;&#x770B;&#x6D77;&#x62A5;&#x80CC;&#x9762;"><span class="archive-media-card__flip-inner"><span class="archive-media-card__front"><img src="image/%E6%B5%B7%E6%8A%A5%E6%AD%A3%E9%9D%A2.jpg" alt="&#x6D77;&#x62A5;&#x6B63;&#x9762;"></span><span class="archive-media-card__back"><img src="image/%E6%B5%B7%E6%8A%A5%E8%83%8C%E9%9D%A2.jpg" alt="&#x6D77;&#x62A5;&#x80CC;&#x9762;"></span></span><small>&#x70B9;&#x51FB;&#x7FFB;&#x8F6C;</small></button><div class="archive-media-card"><img src="image/KT%E6%9D%BF.jpg" alt="KT &#x677F;"></div><div class="archive-media-card archive-media-card--scroll"><img src="image/%E6%8E%A8%E6%96%871.jpg" alt="&#x516C;&#x4F17;&#x53F7;&#x957F;&#x56FE; 1"><small>&#x6ED1;&#x52A8;&#x67E5;&#x770B; &darr;</small></div><div class="archive-media-card archive-media-card--scroll"><img src="image/%E6%8E%A8%E6%96%872.jpg" alt="&#x516C;&#x4F17;&#x53F7;&#x957F;&#x56FE; 2"><small>&#x6ED1;&#x52A8;&#x67E5;&#x770B; &darr;</small></div></div>'
      : id === 'sailing'
        ? '<div class="experience-detail__media experience-detail__media--single experience-detail__media--sailing-full"><img class="experience-detail__sailing-image" src="' + d[3][0] + '" alt="' + d[1] + '&#x76F8;&#x5173;&#x56FE;&#x7247;" style="width:100% !important;height:auto !important;max-height:none !important;object-fit:contain !important;"></div>'
        : '<div class="experience-detail__media ' + (d[3].length === 1 ? 'experience-detail__media--single' : '') + '">' + d[3].map((src) => '<img src="' + src + '" alt="' + d[1] + '&#x76F8;&#x5173;&#x56FE;&#x7247;">').join('') + '</div>';
    const tags = d[8].map((tag) => '<li>' + tag + '</li>').join('');
    modal.innerHTML = '<div class="experience-modal__backdrop" data-modal-close></div><div class="experience-modal__dialog" tabindex="-1"><button class="experience-modal__close" type="button" data-modal-close aria-label="&#x5173;&#x95ED;&#x6863;&#x6848;"><i class="ph-bold ph-x"></i></button><article class="experience-detail experience-detail--' + id + (id === 'startup' ? ' experience-detail--archive' : '') + '">' + archiveMedia + '<div class="experience-detail__copy"><p>' + d[0] + '</p><h3 id="experience-modal-title">' + d[1] + '</h3><strong>' + d[2] + '</strong><div><h4>' + d[4] + '</h4><p>' + d[5] + '</p></div><div><h4>' + d[6] + '</h4><p>' + d[7] + '</p></div><ul>' + tags + '</ul></div></article></div>';
    modal.querySelector('[data-flip-poster]')?.addEventListener('click', (event) => event.currentTarget.classList.toggle('is-flipped'));
    modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; modal.querySelector('.experience-modal__dialog').focus();
  };
  cards.forEach((card) => card.addEventListener('click', () => open(card.dataset.experienceDetail, card)));
  modal.addEventListener('click', (event) => {
    const image = event.target.closest('.experience-detail__media img, .archive-media-grid img');
    if (image && !image.closest('[data-flip-poster]')) {
      event.stopPropagation();
      const overlay = document.querySelector('#lightbox-overlay');
      const lightboxImage = document.querySelector('#lightbox-image');
      const caption = document.querySelector('#lightbox-caption');
      if (overlay && lightboxImage && caption) {
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt || '';
        caption.textContent = image.alt || '';
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
      return;
    }
    if (event.target.closest('[data-modal-close]')) close();
  });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.classList.contains('is-open')) close(); });
}

createExperienceArchiveModal();
enrichLayout();
createIridescentPlanet();
createGalleryMotion();
manageVideos();
addEventListener('load', () => ScrollTrigger.refresh());












