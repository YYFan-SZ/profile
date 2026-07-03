import './app.js';

const canvas = document.querySelector('#webgl-stage');

function tuneSceneForViewport() {
  if (!canvas) return;
  canvas.style.opacity = window.innerWidth <= 900 ? '0.48' : '0.92';
}

tuneSceneForViewport();
window.addEventListener('resize', tuneSceneForViewport, { passive: true });
