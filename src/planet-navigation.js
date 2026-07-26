import './planet-navigation.css';

const items = [
  ['hero', '01', '首页'],
  ['projects', '02', '作品'],
  ['experience', '03', '实践'],
  ['content', '04', '内容'],
  ['contact', '05', '联系'],
];

const nav = document.createElement('nav');
nav.className = 'planet-nav planet-nav--home';
nav.dataset.active = 'hero';
nav.setAttribute('aria-label', '星球轨道导航');
nav.innerHTML = `
  <div class="planet-nav__halo" aria-hidden="true"></div>
  <div class="planet-nav__orbit planet-nav__orbit--a" aria-hidden="true"></div>
  <div class="planet-nav__orbit planet-nav__orbit--b" aria-hidden="true"></div>
  <button class="planet-nav__trigger" type="button" aria-label="展开星球导航" aria-expanded="true"><span>EXPLORE</span></button>
  ${items.map(([id, code, label]) => `<a class="planet-nav__link" href="#${id}" data-section="${id}"><i></i><span>${code}</span><strong>${label}</strong></a>`).join('')}
`;
document.body.appendChild(nav);

const links = [...nav.querySelectorAll('.planet-nav__link')];
const trigger = nav.querySelector('.planet-nav__trigger');
let activeSection = 'hero';
let touchExpanded = false;

const setExpanded = (expanded) => {
  nav.classList.toggle('is-expanded', expanded);
  document.body.classList.toggle('planet-nav-hover', expanded && activeSection !== 'hero');
  trigger.setAttribute('aria-expanded', String(expanded || activeSection === 'hero'));
};

const updateNavState = (sectionId) => {
  const nextSection = sectionId || 'hero';
  const sectionChanged = activeSection !== nextSection;
  activeSection = nextSection;
  nav.dataset.active = activeSection;
  document.body.dataset.planetSection = activeSection;
  links.forEach((link) => link.classList.toggle('active', link.dataset.section === activeSection));
  const isHome = activeSection === 'hero';
  nav.classList.toggle('planet-nav--home', isHome);
  nav.classList.toggle('planet-nav--collapsed', !isHome);
  document.body.classList.toggle('planet-view-home', isHome);
  if (sectionChanged) window.dispatchEvent(new CustomEvent('planet:section', { detail: { section: activeSection } }));
  if (isHome) {
    touchExpanded = false;
    setExpanded(false);
  } else if (!nav.matches(':hover') && !touchExpanded) {
    setExpanded(false);
  }
};

links.forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();
  const target = document.getElementById(link.dataset.section);
  if (!target) return;
  nav.classList.remove('is-jumping');
  void nav.offsetWidth;
  nav.classList.add('is-jumping');
  const linkIndex = links.indexOf(link);
  window.dispatchEvent(new CustomEvent('planet:navigate', {
    detail: { section: link.dataset.section, direction: linkIndex % 2 === 0 ? 1 : -1 },
  }));
  setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 110);
  touchExpanded = false;
  setTimeout(() => nav.classList.remove('is-jumping'), 1250);
}));

const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) updateNavState(visible.target.id);
}, { rootMargin: '-18% 0px -56% 0px', threshold: [0.08, 0.25, 0.5] });

items.forEach(([id]) => {
  const section = document.getElementById(id);
  if (section) sectionObserver.observe(section);
});

const syncHomeState = () => {
  const anchorY = innerHeight * 0.38;
  const nearest = items
    .map(([id]) => document.getElementById(id))
    .filter(Boolean)
    .reduce((current, section) => {
      if (!current) return section;
      return Math.abs(section.getBoundingClientRect().top - anchorY) < Math.abs(current.getBoundingClientRect().top - anchorY) ? section : current;
    }, null);
  if (nearest) updateNavState(nearest.id);
};

const expandFromHover = () => {
  if (activeSection !== 'hero') setExpanded(true);
};
nav.addEventListener('mouseenter', expandFromHover);
trigger.addEventListener('pointerenter', expandFromHover);
nav.addEventListener('focusin', expandFromHover);
nav.addEventListener('mouseleave', () => {
  if (!touchExpanded) setExpanded(false);
});
trigger.addEventListener('click', () => {
  if (activeSection === 'hero') return;
  touchExpanded = !touchExpanded;
  setExpanded(touchExpanded);
});
document.addEventListener('click', (event) => {
  if (touchExpanded && !nav.contains(event.target)) {
    touchExpanded = false;
    setExpanded(false);
  }
});
document.addEventListener('scroll', syncHomeState, { passive: true });

updateNavState('hero');





