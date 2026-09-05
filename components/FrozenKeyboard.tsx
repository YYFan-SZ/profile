"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Html,
  Lightformer,
} from "@react-three/drei";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useSeason } from "@/components/SeasonProvider";
import { useLanguage } from "@/components/LanguageProvider";
import * as THREE from "three";
import { ExhibitionStage, useExhibitionMotion, type ExhibitionMotion } from "@/components/ExhibitionStage";
import GrandPianoShell from "@/components/GrandPianoShell";

// Per-section keyboard "states" — same idea as Naresh's animated-background-
// config.ts, but for our R3F keyboard. Values are tweened toward via lerp
// inside useFrame; the active section is detected via IntersectionObserver
// on elements carrying data-kb-section.
type KeyboardState = {
  yaw: number; // rotation.y
  pitch: number; // rotation.x
  roll: number; // rotation.z
  posX: number;
  posY: number;
  posZ: number;
  scale: number;
};

const SECTION_STATES: Record<string, KeyboardState> = {
  hero: {
    yaw: Math.PI * 0.15,
    pitch: Math.PI * 0.18,
    roll: Math.PI * 0.025,
    posX: 2.15,
    posY: 0,
    posZ: 0,
    scale: 1,
  },
  stack: {
    // Keep the instrument centered but slightly lower than the copy above it.
    yaw: Math.PI * 0.15,
    pitch: Math.PI * 0.12,
    roll: Math.PI * 0.025,
    posX: 0,
    posY: -0.34,
    posZ: 0,
    scale: 1.0,
  },
  projects: {
    yaw: Math.PI * 0.18,
    pitch: Math.PI * 0.12,
    roll: -Math.PI * 0.025,
    // Portfolio copy stays on the right, leaving the full instrument visible
    // on the left like a split exhibition layout.
    posX: -3.2,
    posY: 0.05,
    posZ: 0,
    scale: 0.7,
  },
  // Project 1 — text is left-aligned, so the keyboard slides to the RIGHT,
  // near the giant "01" watermark.
  project1: {
    yaw: 0,
    pitch: 0.7,
    roll: 0.2,
    posX: 1.5,
    posY: 0.2,
    posZ: 0,
    scale: 0.85,
  },
  // Project 2 — text is right-aligned, keyboard moves to the LEFT near "02".
  project2: {
    yaw: 0.5,
    pitch: 0.8,
    roll: -0.3,
    posX: -1.9,
    posY: 0.2,
    posZ: 0,
    scale: 0.85,
  },
  // Project 3 — left-aligned again, keyboard right.
  project3: {
    yaw: 0,
    pitch: 0.7,
    roll: 0.2,
    posX: 1.5,
    posY: 0.2,
    posZ: 0,
    scale: 0.85,
  },
  // Project 4 — right-aligned, keyboard left.
  project4: {
    yaw: 0.5,
    pitch: 0.8,
    roll: -0.3,
    posX: -1.9,
    posY: 0.2,
    posZ: 0,
    scale: 0.85,
  },
  experience: {
    yaw: Math.PI * 0.3,
    pitch: Math.PI * 0.08,
    roll: 0,
    // Practice copy sits in the right reading column; the keyboard anchors
    // the matching left display zone.
    posX: -2.35,
    posY: 0.05,
    posZ: 0,
    scale: 0.8,
  },
  content: {
    // Mirror the angle for the right-hand display zone: the keyboard opens
    // toward the right instead of pointing back across the reading column.
    yaw: -Math.PI * 0.24,
    pitch: Math.PI * 0.1,
    roll: Math.PI * 0.018,
    // Content copy occupies the left reading column; the keyboard anchors
    // the matching right display zone.
    posX: 2.65,
    posY: 0.05,
    posZ: 0,
    scale: 0.86,
  },
  // Contact — mirrors the hero pose (same yaw/pitch/roll and scale) but
  // pushed to the right so the "¿Hablamos?" copy can sit on the left. The
  // Keyboard component also reuses the hero-style cinematic idle swing
  // while this section is active.
  contact: {
    yaw: Math.PI * 0.15,
    pitch: Math.PI * 0.18,
    roll: Math.PI * 0.025,
    posX: 2.0,
    // Keep the entire keyboard above the line that introduces the 3D room.
    posY: 0.82,
    posZ: 0,
    scale: 0.78,
  },
  // The 3D-room invitation begins after the contact details. It deliberately
  // reuses the contact composition so the keyboard remains parked there
  // instead of travelling down into the room-entry area.
  room: {
    yaw: Math.PI * 0.15,
    pitch: Math.PI * 0.18,
    roll: Math.PI * 0.025,
    posX: 2.0,
    posY: 0.82,
    posZ: 0,
    scale: 0.78,
  },
};

// Mobile lives in the hero only (the canvas scrolls away with it), so there is
// no per-section choreography — the keyboard sits centered with a permanent
// cinematic idle swing and reacts to taps instead of hover.
const MOBILE_STATE: KeyboardState = {
  yaw: Math.PI * 0.16,
  pitch: Math.PI * 0.15,
  roll: 0.02,
  posX: -1.2,
  posY: 0,
  posZ: 0,
  scale: 1.18,
};

// Track which data-kb-section element is currently most prominent on-screen.
// Returns the section id (React state, for conditional overlay rendering) +
// a mutable Set of "highlighted" keyboard slugs read off the same element's
// data-kb-highlights attribute. The Set is a ref so per-frame reads inside
// useFrame don't trigger re-renders — Keycap mutates position/emissive
// based on `highlightsRef.current.has(slug)`.
function useActiveSection(): [
  string,
  React.RefObject<string>,
  React.RefObject<Set<string>>
] {
  const [section, setSection] = useState<string>("hero");
  const ref = useRef<string>("hero");
  const highlightsRef = useRef<Set<string>>(new Set());
  useEffect(() => {
    if (typeof window === "undefined") return;
    const visibility = new Map<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target, entry.intersectionRatio);
        }
        let bestRatio = 0;
        let bestEl: HTMLElement | null = null;
        let bestSection = ref.current;
        for (const [el, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestEl = el as HTMLElement;
            bestSection = bestEl.dataset.kbSection ?? bestSection;
          }
        }
        // Always refresh highlights from the most-visible element, even if
        // the section id didn't change — lets page tweak highlights by
        // updating just the data attribute.
        const raw = bestEl?.dataset.kbHighlights ?? "";
        highlightsRef.current = new Set(
          raw.split(",").map((s) => s.trim()).filter(Boolean)
        );
        if (bestSection !== ref.current) {
          ref.current = bestSection;
          setSection(bestSection);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    const targets = document.querySelectorAll<HTMLElement>("[data-kb-section]");
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return [section, ref, highlightsRef];
}

// Taglines are now resolved via the i18n dictionary (keyboard.taglines.<slug>),
// keyed by the simple-icons slug on each key. See lib/i18n.ts.

function makeRoundedRectShape(
  width: number,
  depth: number,
  cornerRadius: number
): THREE.Shape {
  const shape = new THREE.Shape();
  const w = width / 2;
  const d = depth / 2;
  const r = Math.min(cornerRadius, w, d);
  shape.moveTo(-w + r, -d);
  shape.lineTo(w - r, -d);
  shape.quadraticCurveTo(w, -d, w, -d + r);
  shape.lineTo(w, d - r);
  shape.quadraticCurveTo(w, d, w - r, d);
  shape.lineTo(-w + r, d);
  shape.quadraticCurveTo(-w, d, -w, d - r);
  shape.lineTo(-w, -d + r);
  shape.quadraticCurveTo(-w, -d, -w + r, -d);
  return shape;
}

function createExtrudedBox(
  width: number,
  depth: number,
  height: number,
  cornerRadius: number,
  bevelSize: number,
  topScale = 1
): THREE.BufferGeometry {
  const shape = makeRoundedRectShape(width, depth, cornerRadius);
  const extrudeDepth = Math.max(0.001, height - 2 * bevelSize);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: extrudeDepth,
    bevelEnabled: bevelSize > 0,
    bevelThickness: bevelSize,
    bevelSize: bevelSize,
    bevelSegments: 2,
    steps: 1,
    curveSegments: 12,
  });
  geometry.rotateX(-Math.PI / 2);
  geometry.translate(0, -height / 2 + bevelSize, 0);

  if (topScale !== 1) {
    const pos = geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const t = (y + height / 2) / height;
      const factor = THREE.MathUtils.lerp(1, topScale, t);
      pos.setX(i, pos.getX(i) * factor);
      pos.setZ(i, pos.getZ(i) * factor);
    }
    pos.needsUpdate = true;
    geometry.computeVertexNormals();
  }
  return geometry;
}

const PIANO_PROJECT_LABELS: readonly (string | null)[] = ["五迷", "途说", "梦小渡", "Reset", "工具", null, null, null, null, null];
const PIANO_ABILITY_LABELS: readonly (string | null)[] = [
  "产品开发",
  null,
  "内容运营",
  null,
  "流程自动化",
  null,
  "视觉表达",
  null,
  "沟通协作",
  null,
];
const PIANO_ABILITY_LABELS_EN: Record<string, string> = {
  "产品开发": "Product",
  "内容运营": "Content",
  "流程自动化": "Automation",
  "视觉表达": "Visuals",
  "沟通协作": "Collaboration",
};
const PIANO_ABILITY_INDEXES: readonly (number | null)[] = [
  0,
  null,
  1,
  null,
  2,
  null,
  3,
  null,
  4,
  null,
];

const WHITE_KEY_COUNT = 52;
const WHITE_KEY_WIDTH = 0.063;
const WHITE_KEY_DEPTH = 0.86;
const WHITE_KEY_HEIGHT = 0.08;
const WHITE_KEY_GAP = 0.0016;
const WHITE_KEY_STEP = WHITE_KEY_WIDTH + WHITE_KEY_GAP;
const BLACK_KEY_WIDTH = 0.034;
const BLACK_KEY_DEPTH = 0.54;
const BLACK_KEY_HEIGHT = 0.12;
const BLACK_KEY_Z = -0.12;
const BASE_WIDTH = WHITE_KEY_COUNT * WHITE_KEY_STEP - WHITE_KEY_GAP + 0.16;
const BASE_DEPTH = 1.65;
const BASE_HEIGHT = 0.26;
const PRESS_DEPTH = 0.075;

// A compact piano-like layout: black keys sit between white keys, while the
// existing skill icons remain on the white keys only.
const BLACK_KEY_AFTER_WHITE = Array.from({ length: 51 }, (_, i) => i)
  .filter(i => [0, 2, 3, 5, 6].includes(i % 7));

// Mechanical keyboard "tock" synthesized on the fly. Mixes a short bandpass-
// filtered noise burst (the click) with a fast low-frequency thump. One
// AudioContext per tab, lazily created on first play.
// Browsers block audio until a real user gesture (click/keydown) — pointerover
// does not count in Chrome. A one-shot unlock listener resumes the context on
// the first real interaction so every subsequent hover plays immediately.
let audioCtx: AudioContext | null = null;
let audioUnlockInstalled = false;
function installAudioUnlock() {
  if (audioUnlockInstalled || typeof window === "undefined") return;
  audioUnlockInstalled = true;
  const unlock = () => {
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }
    window.removeEventListener("pointerdown", unlock);
    window.removeEventListener("keydown", unlock);
    window.removeEventListener("touchstart", unlock);
  };
  window.addEventListener("pointerdown", unlock, { once: false });
  window.addEventListener("keydown", unlock, { once: false });
  window.addEventListener("touchstart", unlock, { once: false });
}
// Two pre-decoded samples (press / release) — pick one at random on each
// hover for variety. Fetched + decoded once on first play; subsequent hovers
// just spawn a fresh BufferSource (cheap, can overlap).
const KEY_SOUND_URLS = [
  "/sounds/switch_press.mp3",
  "/sounds/switch_release.mp3",
] as const;
const keySoundBuffers: (AudioBuffer | null)[] = [null, null];
let keySoundsLoading: Promise<void> | null = null;
function loadKeySounds(ctx: AudioContext): Promise<void> {
  if (keySoundsLoading) return keySoundsLoading;
  keySoundsLoading = Promise.all(
    KEY_SOUND_URLS.map((url, i) =>
      fetch(url)
        .then((r) => r.arrayBuffer())
        .then((buf) => ctx.decodeAudioData(buf))
        .then((decoded) => {
          keySoundBuffers[i] = decoded;
        })
        .catch(() => {
          /* keep null; playKeyClick will pick the other sample */
        })
    )
  ).then(() => undefined);
  return keySoundsLoading;
}

function playKeyClick(seed = 0) {
  if (typeof window === "undefined") return;
  try {
    if (!audioCtx) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!Ctor) return;
      audioCtx = new Ctor();
      installAudioUnlock();
    }
    const ctx = audioCtx;
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
      return;
    }
    const trigger = () => {
      const available = keySoundBuffers.filter(
        (b): b is AudioBuffer => b !== null
      );
      if (available.length === 0) return;
      const buffer =
        available[Math.floor(Math.random() * available.length)];
      // Per-key playback rate detune (±4%) keeps repeated presses lively.
      const detune =
        1 + (((seed * 9301 + 49297) % 233280) / 233280 - 0.5) * 0.08;
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      src.playbackRate.value = detune;
      const gain = ctx.createGain();
      gain.gain.value = 0.7;
      src.connect(gain);
      gain.connect(ctx.destination);
      src.start();
    };
    if (keySoundBuffers.some((b) => b !== null)) {
      trigger();
    } else {
      loadKeySounds(ctx).then(trigger);
    }
  } catch {
    // Audio failure must never break the 3D scene.
  }
}

function Keycap({
  geometry,
  position,
  isMobile,
  isBlack,
  onHoverChange,
  onClick,
  selected = false,
  label,
  hovered,
  activeSectionRef,
  wavePhase,
  accent,
  sceneMotion,
}: {
  geometry: THREE.BufferGeometry;
  position: [number, number, number];
  isMobile: boolean;
  isBlack: boolean;
  onHoverChange: (hovered: boolean) => void;
  onClick: () => void;
  selected?: boolean;
  label?: string;
  hovered: boolean;
  // Current section id (ref so we don't re-render when it flips). Used by
  // the contact section to trigger idle random bobs.
  activeSectionRef: React.RefObject<string>;
  // Per-key phase so neighbouring highlighted keys bob out of sync and
  // look like a wave rather than a synchronised jump.
  wavePhase: number;
  // Season accent colour — highlighted keys glow in this colour, so the
  // bouncing keys feel "part of" the current theme.
  accent: string;
  sceneMotion?: React.RefObject<ExhibitionMotion>;
}) {
  const pressRef = useRef<THREE.Group>(null);
  const pressY = useRef(0);
  const liftAmp = useRef(0); // smoothed 0..1 gate for the bounce + glow
  const contactAmp = useRef(0); // smoothed 0..1 gate for the random idle bob
  const matRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const baseEmissive = sceneMotion ? .06 : .3;

  // Derive a stable pseudo-random rhythm from the key position. This keeps
  // neighbouring keycaps independent without changing values during render.
  const randomBob = useMemo(
    () => {
      const seed = position[0] * 12.9898 + position[2] * 78.233 + (isBlack ? 37.719 : 0);
      const stableNoise = (offset: number) => {
        const value = Math.sin(seed + offset) * 43758.5453;
        return value - Math.floor(value);
      };
      return {
        freq: 0.6 + stableNoise(0.17) * 0.6,
        phase: stableNoise(1.31) * Math.PI * 2,
        threshold: 0.45 + stableNoise(2.73) * 0.2,
      };
    },
    [isBlack, position]
  );

  // Stable THREE.Color objects so useFrame can lerp in place (no garbage
  // per-tick). Recomputed whenever the season accent changes.
  const whiteColor = useMemo(() => new THREE.Color("#ffffff"), []);
  const keyBaseColor = useMemo(
    () => new THREE.Color(sceneMotion ? (isBlack ? "#29251f" : "#fff8e9") : (isBlack ? "#2a2521" : "#fffdf5")),
    [isBlack, sceneMotion]
  );
  const accentColor = useMemo(() => new THREE.Color(accent), [accent]);
  // Tinted white for the plastic body — keeps the "white keycap with a
  // hint of the season" look without going cartoonishly saturated.
  const bodyTint = useMemo(() => {
    const c = new THREE.Color(accent);
    c.lerp(keyBaseColor, 0.72);
    return c;
  }, [accent, keyBaseColor]);

  useFrame((state) => {
    if (!pressRef.current) return;
    const pressed = hovered || selected ? -PRESS_DEPTH : 0;
    const t = state.clock.elapsedTime;

    // Project wave: 1 while this key's slug is in the active section's
    // highlights, fading out when it leaves. Produces the synchronised
    // travelling bounce on project sections.
    const isHighlighted = selected;
    liftAmp.current = THREE.MathUtils.lerp(
      liftAmp.current,
      isHighlighted ? 1 : 0,
      0.08
    );
    // Piano keys should breathe without climbing over the raised black keys.
    // White keys get a tiny musical lift; black keys stay almost still.
    const bobAmplitude = isBlack ? 0.008 : 0.028;
    const bob = sceneMotion ? 0 :
      Math.sin(t * 2.2 + wavePhase) * bobAmplitude * liftAmp.current;

    // Contact idle: each keycap pops up at its own random cadence. We use
    // a thresholded sine so every key spends most of its time at rest and
    // only jumps briefly when its sine crosses the threshold — creates the
    // Naresh-style "random keys popping" effect without anything global.
    const isContact =
      activeSectionRef.current === "contact" ||
      activeSectionRef.current === "room";
    contactAmp.current = THREE.MathUtils.lerp(
      contactAmp.current,
      isContact ? 1 : 0,
      0.06
    );
    const sineRaw = Math.sin(t * randomBob.freq + randomBob.phase);
    const popRaw = Math.max(0, sineRaw - randomBob.threshold);
    // Normalise the pop so keys with higher thresholds don't end up flat.
    const popNorm = popRaw / (1 - randomBob.threshold);
    const randomPop = sceneMotion ? 0 :
      popNorm * (isBlack ? 0.004 : 0.012) * contactAmp.current;

    const target = pressed + bob + randomPop;
    pressY.current = THREE.MathUtils.lerp(pressY.current, target, sceneMotion?.current.reduced ? 1 : .22);
    pressRef.current.position.y = pressY.current;

    if (matRef.current) {
      // Emissive intensity pulses with the bob so glow brightens on the
      // upswing of the wave.
      const pulse = (bob / bobAmplitude + 1) * 0.5; // 0..1 from the sine
      const targetIntensity =
        baseEmissive + liftAmp.current * (0.45 + pulse * 0.55);
      matRef.current.emissiveIntensity = THREE.MathUtils.lerp(
        matRef.current.emissiveIntensity,
        targetIntensity,
        0.15
      );
      // Emissive COLOUR lerps white → season accent so highlighted keys
      // glow in the current theme (blue in winter, green in spring, …).
      matRef.current.emissive
        .copy(isBlack ? keyBaseColor : whiteColor)
        .lerp(accentColor, liftAmp.current);
      // Body tint pushes clearly toward the accent so the key reads as
      // "tinted white" (e.g. an icy blue-white in winter) rather than pure
      // plastic when lifted.
      matRef.current.color.copy(keyBaseColor).lerp(bodyTint, liftAmp.current);
    }
  });

  const handleOver = useCallback(
    (e: { stopPropagation: () => void }) => {
      e.stopPropagation();
      onHoverChange(true);
    },
    [onHoverChange]
  );
  const handleOut = useCallback(() => onHoverChange(false), [onHoverChange]);

  // Touch devices never fire hover, so on mobile we drive the same press +
  // SFX path from pointer down/up — a momentary tap-to-bounce.
  const handleDown = useCallback(
    (e: { stopPropagation: () => void }) => {
      e.stopPropagation();
      onHoverChange(true);
    },
    [onHoverChange]
  );
  const handleUp = useCallback(() => onHoverChange(false), [onHoverChange]);
  const handleClick = useCallback(
    (e: { stopPropagation: () => void }) => {
      e.stopPropagation();
      onClick();
    },
    [onClick]
  );

  const iconY = (isBlack ? BLACK_KEY_HEIGHT : WHITE_KEY_HEIGHT) / 2 + 0.002;

  return (
    <group position={position}>
      <group ref={pressRef}>
        <mesh
          geometry={geometry}
          castShadow
          receiveShadow
          onPointerOver={isMobile ? undefined : handleOver}
          onPointerOut={isMobile ? undefined : handleOut}
          onPointerDown={isMobile ? handleDown : undefined}
          onPointerUp={isMobile ? handleUp : undefined}
          onPointerCancel={isMobile ? handleUp : undefined}
          onClick={handleClick}
        >
          <meshPhysicalMaterial
            ref={matRef}
            color={keyBaseColor}
            transmission={0}
            roughness={isBlack ? 0.24 : 0.32}
            clearcoat={isMobile ? 0 : isBlack ? 0.22 : 0.5}
            clearcoatRoughness={0.18}
            metalness={isBlack ? 0.08 : 0}
            emissive="#ffffff"
            emissiveIntensity={0.3}
          />
        </mesh>
        {label && !sceneMotion && (
          <Html
            position={[0, iconY + 0.012, 0.38]}
            center
            distanceFactor={sceneMotion ? 12 : 5}
            style={{
              pointerEvents: "none",
              color: sceneMotion ? "#876338" : "#8b6048",
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: sceneMotion ? "14px" : "8px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
              textShadow: "0 1px 0 rgba(255, 255, 255, 0.85)",
            }}
          >
            {label}
          </Html>
        )}
      </group>
    </group>
  );
}

function Keyboard({ mobile, motion }: { mobile: boolean; motion?: React.RefObject<ExhibitionMotion> }) {
  const ref = useRef<THREE.Group>(null);
  const isMobile = mobile;
  const { palette } = useSeason();
  const { lang } = useLanguage();
  const [activeSection, activeSectionRef] = useActiveSection();
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  // Mutable holders for the smoothed target — kept off React state so
  // useFrame can read them every tick without triggering re-renders.
  const current = useRef<KeyboardState>({ ...SECTION_STATES.hero });
  const positioned = useRef(false);

  useEffect(() => {
    const onProjectSelect = (event: Event) => {
      const index = (event as CustomEvent<{ index?: number }>).detail?.index;
      if (typeof index === "number") setSelectedProjectIndex(index);
    };
    window.addEventListener("portfolio:select", onProjectSelect);
    const onProjectClear = () => {
      setSelectedProjectIndex(null);
    };
    window.addEventListener("portfolio:clear", onProjectClear);
    return () => {
      window.removeEventListener("portfolio:select", onProjectSelect);
      window.removeEventListener("portfolio:clear", onProjectClear);
    };
  }, []);
  // Accumulated spin (radians) added on top of the target yaw while it
  // decays to zero — produces a flip between project sections.
  const spinRef = useRef(0);
  const prevSectionId = useRef<string>("hero");

  // When scrolling between two project sections, kick off a spin. Direction
  // alternates per target project so consecutive flips don't look identical.
  useEffect(() => {
    if (motion) return;
    if (mobile) return; // no project→project flips on mobile (hero-only)
    const prev = prevSectionId.current;
    prevSectionId.current = activeSection;
    if (prev === activeSection) return;
    const wasProject = prev.startsWith("project");
    const isProject = activeSection.startsWith("project");
    if (!wasProject || !isProject) return;
    const n = parseInt(activeSection.replace("project", ""), 10) || 0;
    const dir = n % 2 === 0 ? 1 : -1;
    spinRef.current += Math.PI * 2 * dir;
  }, [activeSection, mobile, motion]);

  // Drive global cursor + click SFX from the single Keyboard instance.
  useEffect(() => {
    document.body.style.cursor = hoveredKey ? "pointer" : "auto";
    if (hoveredKey) {
      const keyIndex = Number(hoveredKey.split("-").pop());
      playKeyClick(Number.isFinite(keyIndex) ? keyIndex : 0);
    }
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hoveredKey]);

  useEffect(() => {
    if (ref.current) ref.current.rotation.order = "YXZ";
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    if (motion && !motion.current.visible) return;
    const t = state.clock.elapsedTime;
    const target = motion ? motion.current.piano : mobile
      ? MOBILE_STATE
      : SECTION_STATES[activeSectionRef.current] ?? SECTION_STATES.hero;
    // A slower, frame-rate-independent follow keeps section changes fluid:
    // the keyboard has time to settle into a new composition instead of
    // snapping across the screen as soon as the observer changes sections.
    const k = motion?.current.reduced ? 1 : 1 - Math.exp(-3.2 * delta);
    const c = current.current;
    if (!positioned.current) { Object.assign(c, target); positioned.current = true; }
    c.yaw = THREE.MathUtils.lerp(c.yaw, target.yaw, k);
    c.pitch = THREE.MathUtils.lerp(c.pitch, target.pitch, k);
    c.roll = THREE.MathUtils.lerp(c.roll, target.roll, k);
    c.posX = THREE.MathUtils.lerp(c.posX, target.posX, k);
    c.posY = THREE.MathUtils.lerp(c.posY, target.posY, k);
    c.posZ = THREE.MathUtils.lerp(c.posZ, target.posZ, k);
    c.scale = THREE.MathUtils.lerp(c.scale, target.scale, k);

    // Decay the project-transition spin frame-rate independently so the
    // flip settles at roughly the same pace regardless of refresh rate.
    spinRef.current *= Math.exp(-3.2 * delta);
    if (Math.abs(spinRef.current) < 0.003) spinRef.current = 0;
    // Normalised magnitude (0..1) — used for a subtle "pop" on scale & a
    // small hop on Y so the flip reads as a tiny jump-and-turn.
    const spinNorm = Math.min(1, Math.abs(spinRef.current) / (Math.PI * 2));

    // Idle motion layered on top. Hero, contact, and the room-entry boundary
    // share a wide cinematic yoyo. The two editorial middle sections get a
    // slower, smaller sway so they feel alive without competing with copy.
    const sectionId = activeSectionRef.current;
    const isShowcase =
      mobile ||
      sectionId === "hero" ||
      sectionId === "contact" ||
      sectionId === "room";
    const isEditorial = sectionId === "content" || sectionId === "experience";
    const still = motion?.current.reduced;
    const yawSwing = still ? 0 : motion ? .008 : isShowcase ? 0.5 : isEditorial ? 0.11 : 0.025;
    const pitchSwing = still ? 0 : motion ? 0 : isShowcase ? 0.07 : isEditorial ? 0.024 : 0.0;
    const rollSwing = still ? 0 : motion ? 0 : isShowcase ? 0.05 : isEditorial ? 0.018 : 0.0;
    const period = motion ? 22 : isShowcase ? 9 : isEditorial ? 14.5 : 20;
    const w = (Math.PI * 2) / period;
    ref.current.rotation.y =
      c.yaw + Math.sin(t * w) * yawSwing + spinRef.current;
    ref.current.rotation.x = c.pitch + Math.sin(t * w * 0.6) * pitchSwing;
    ref.current.rotation.z = c.roll + Math.sin(t * w * 0.8) * rollSwing;
    ref.current.position.x = c.posX;
    const editorialLift = isEditorial
      ? Math.sin(t * 0.48) * 0.05 + Math.sin(t * 0.82 + 0.7) * 0.014
      : Math.sin(t * 0.6) * 0.04;
    ref.current.position.y = c.posY + (still || motion ? 0 : editorialLift) + spinNorm * 0.35;
    ref.current.position.z = c.posZ;
    ref.current.scale.setScalar(c.scale * (1 - spinNorm * 0.12));
  });

  const whiteKeyGeom = useMemo(
    () =>
      createExtrudedBox(
        WHITE_KEY_WIDTH,
        WHITE_KEY_DEPTH,
        WHITE_KEY_HEIGHT,
        0.003,
        0.002,
        0.98
      ),
    []
  );
  const blackKeyGeom = useMemo(
    () =>
      createExtrudedBox(
        BLACK_KEY_WIDTH,
        BLACK_KEY_DEPTH,
        BLACK_KEY_HEIGHT,
        0.002,
        0.001,
        0.92
      ),
    []
  );
  const baseGeom = useMemo(
    () => createExtrudedBox(BASE_WIDTH, BASE_DEPTH, BASE_HEIGHT, 0.12, 0.02, 1),
    []
  );

  useEffect(() => {
    return () => {
      whiteKeyGeom.dispose();
      blackKeyGeom.dispose();
      baseGeom.dispose();
    };
  }, [whiteKeyGeom, blackKeyGeom, baseGeom]);

  const keycaps: React.ReactNode[] = [];
  const whiteKeyY = BASE_HEIGHT / 2 + WHITE_KEY_HEIGHT / 2 + 0.006;
  const blackKeyY = BASE_HEIGHT / 2 + BLACK_KEY_HEIGHT / 2 + 0.008;

  for (let index = 0; index < WHITE_KEY_COUNT; index++) {
      const x = (index - (WHITE_KEY_COUNT - 1) / 2) * WHITE_KEY_STEP;
      const id = `white-${index}`;
      const slot = Math.min(4, Math.floor(index / (WHITE_KEY_COUNT / 5)));
      const showLabel = index === Math.floor((slot + .5) * WHITE_KEY_COUNT / 5);
      const projectLabel = PIANO_PROJECT_LABELS[slot];
      const abilityLabelRaw = PIANO_ABILITY_LABELS[slot * 2];
      const abilityLabel = abilityLabelRaw && lang === "en" ? PIANO_ABILITY_LABELS_EN[abilityLabelRaw] : abilityLabelRaw;
      const abilityIndex = PIANO_ABILITY_INDEXES[slot * 2];
      keycaps.push(
        <Keycap
          key={id}
          geometry={whiteKeyGeom}
          position={[x, whiteKeyY, 0]}
          isMobile={isMobile}
          isBlack={false}
          hovered={hoveredKey === id}
          selected={selectedProjectIndex === slot && showLabel}
          label={
            !showLabel ? undefined : activeSection === "stack"
              ? abilityLabel ?? undefined
              : activeSection === "projects"
                ? projectLabel ?? undefined
                : undefined
          }
          activeSectionRef={activeSectionRef}
          sceneMotion={motion}
          wavePhase={index * 0.55}
          accent={motion ? "#c49c62" : palette.accent}
          onHoverChange={(h) =>
            setHoveredKey((prev) => (h ? id : prev === id ? null : prev))
          }
          onClick={() => {
            if (activeSection === "stack" && abilityLabel && abilityIndex !== null) {
              window.dispatchEvent(
                new CustomEvent("portfolio:ability", {
                  detail: { index: abilityIndex, label: abilityLabel },
                })
              );
              return;
            }
            // Project keys are only actionable inside the portfolio section.
            // The same 3D keyboard stays visible across the page, but tapping
            // it in practice/content/contact should never move the page away.
            if (activeSection !== "projects") {
              setSelectedProjectIndex(null);
              return;
            }
            if (!projectLabel) {
              setSelectedProjectIndex(null);
              return;
            }
            setSelectedProjectIndex(slot);
            window.dispatchEvent(
              new CustomEvent("portfolio:focus", { detail: { index: slot } })
            );
          }}
        />
      );
  }

  BLACK_KEY_AFTER_WHITE.forEach((afterWhiteIndex, index) => {
    const x =
      (afterWhiteIndex + 0.5 - (WHITE_KEY_COUNT - 1) / 2) * WHITE_KEY_STEP;
    const id = `black-${index}`;
    keycaps.push(
      <Keycap
        key={id}
        geometry={blackKeyGeom}
        position={[x, blackKeyY, BLACK_KEY_Z]}
        isMobile={isMobile}
        isBlack
        hovered={hoveredKey === id}
        activeSectionRef={activeSectionRef}
        sceneMotion={motion}
        wavePhase={index * 0.72 + 0.3}
        accent={motion ? "#c49c62" : palette.accent}
        onHoverChange={(h) =>
          setHoveredKey((prev) => (h ? id : prev === id ? null : prev))
        }
        onClick={() => setSelectedProjectIndex(null)}
      />
    );
  });

  return (
    <>
      <group ref={ref}>
        <mesh geometry={baseGeom} castShadow receiveShadow>
          {/* Solid matte plastic — color prop controls the tone directly.
              No transmission/clearcoat so the white environment doesn't
              wash it out to grey. */}
          <meshStandardMaterial
            color={motion ? "#fff4de" : palette.keyboardBase}
            roughness={motion ? 0.36 : 0.6}
            metalness={motion ? 0.22 : 0}
          />
        </mesh>
        {motion && <mesh geometry={baseGeom} position={[0, -.115, 0]} scale={[1.018, .09, 1.018]} castShadow>
          <meshStandardMaterial color="#c8a66a" roughness={.32} metalness={.68} />
        </mesh>}
        {motion && <GrandPianoShell />}
        {keycaps}
      </group>
      {/* Callout lives OUTSIDE the animated keyboard group so the keyboard's
          yaw/pitch/scale don't warp the text. Placed in world space, to the
          left of the tilted keyboard, with its own matching isometric yaw +
          a small roll so the baseline rises left-to-right like Naresh's. */}
    </>
  );
}

function CanvasActivity({ mobile }: { mobile: boolean }) {
  const { gl, setFrameloop } = useThree();
  useEffect(() => {
    let inView = true;
    const update = () => setFrameloop(!document.hidden && inView ? "always" : "never");
    const observer = mobile ? new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    }, { rootMargin: "150px" }) : null;
    observer?.observe(gl.domElement);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, [gl, mobile, setFrameloop]);
  return null;
}

function ExhibitionWorld({ mobile, backgroundOnly, pianoOnly }: {
  mobile: boolean; backgroundOnly: boolean; pianoOnly: boolean;
}) {
  const motion = useExhibitionMotion(mobile, backgroundOnly);
  return <>
    <ExhibitionStage motion={motion} mobile={mobile} backgroundOnly={backgroundOnly} pianoOnly={pianoOnly} />
    {!backgroundOnly && <Keyboard mobile={mobile} motion={motion} />}
  </>;
}

export default function FrozenKeyboard({
  mobile = false,
  exhibition = false,
  backgroundOnly = false,
  pianoOnly = false,
}: {
  mobile?: boolean;
  exhibition?: boolean;
  backgroundOnly?: boolean;
  pianoOnly?: boolean;
}) {
  return (
    <Canvas
      shadows={exhibition && !mobile ? "percentage" : false}
      // Portrait gets a pulled-back, centered, less top-down camera so the
      // keyboard reads as a front-facing hero centerpiece instead of the
      // off-axis desktop composition.
      camera={
        exhibition
          ? { position: [0, 1.8, 13.2], fov: mobile ? (backgroundOnly ? 46 : 32) : 31 }
          : mobile
          ? { position: [0, 2.0, 9.0], fov: 26 }
          : { position: [1.5, 3.6, 11], fov: 22 }
      }
      dpr={mobile ? (backgroundOnly ? 1 : [1, 1.25]) : [1, 1.6]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <CanvasActivity mobile={mobile} />
      {/* Canvas is transparent so the FrozenBackground (snow + aurora) shows
          through behind/around the keyboard. */}

      {/* Local environment map built from Lightformer quads — no external
          HDR fetch, so the scene works offline. Gives the glass keycaps
          soft icy highlights without relying on drei's CDN. */}
      <Environment resolution={128} environmentIntensity={exhibition ? .55 : .25}>
        <Lightformer
          intensity={1.1}
          color="#ffffff"
          position={[0, 6, -4]}
          rotation={[0, 0, 0]}
          scale={[12, 6, 1]}
        />
        <Lightformer
          intensity={0.7}
          color="#ffffff"
          position={[-6, 2, 2]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[6, 4, 1]}
        />
        <Lightformer
          intensity={0.5}
          color="#ffffff"
          position={[6, 3, 1]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[6, 4, 1]}
        />
        <Lightformer
          intensity={0.35}
          color="#ffffff"
          position={[0, -4, 3]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[8, 8, 1]}
        />
      </Environment>
      {/* Naresh-style lighting: low ambient + strong single directional from
          upper-left gives crisp top-bright / sides-shadowed contrast. The
          hemisphere adds a subtle sky-ground gradient so the darkest faces
          still read as "the lower faces" instead of pitch-black. */}
      {!exhibition && <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[-5, 8, 3]} intensity={2.2} />
      <hemisphereLight
        intensity={0.25}
        color="#f7f0e3"
        groundColor="#3b2d24"
      />

      <Keyboard mobile={mobile} />
      </>}
      {exhibition && <ExhibitionWorld mobile={mobile} backgroundOnly={backgroundOnly} pianoOnly={pianoOnly} />}

    </Canvas>
  );
}
