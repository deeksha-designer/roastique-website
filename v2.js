const navTrigger = document.querySelector('.nav-trigger');
const megaMenu = document.querySelector('.mega-menu');
const scrollScene = document.querySelector('[data-scroll-scene]');
const menuSteps = [...document.querySelectorAll('[data-menu-step]')];
const menuVisuals = [...document.querySelectorAll('.menu-visual-stack .menu-visual')];
const menuTitle = document.querySelector('[data-menu-title]');
const testimonialCards = [...document.querySelectorAll('.testimonial-card')];

const setMegaMenu = (open) => {
  if (!navTrigger || !megaMenu) return;
  navTrigger.setAttribute('aria-expanded', String(open));
  megaMenu.setAttribute('aria-hidden', String(!open));
  megaMenu.classList.toggle('is-open', open);
};

navTrigger?.addEventListener('click', () => setMegaMenu(navTrigger.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { setMegaMenu(false); navTrigger?.focus(); } });
document.addEventListener('click', (event) => { if (megaMenu?.classList.contains('is-open') && !megaMenu.contains(event.target) && event.target !== navTrigger) setMegaMenu(false); });

if ('IntersectionObserver' in window && menuSteps.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const index = menuSteps.indexOf(entry.target);
      menuSteps.forEach((step, i) => step.classList.toggle('is-active', i === index));
      menuVisuals.forEach((visual, i) => visual.classList.toggle('is-active', i === index));
      if (menuTitle) menuTitle.textContent = entry.target.dataset.title;
    });
  }, { rootMargin: '-38% 0px -38% 0px', threshold: 0 });
  menuSteps.slice(0, menuVisuals.length).forEach((step) => observer.observe(step));
}

if (testimonialCards.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let activeTestimonial = 0;
  setInterval(() => {
    testimonialCards[activeTestimonial].classList.remove('is-active');
    activeTestimonial = (activeTestimonial + 1) % testimonialCards.length;
    testimonialCards[activeTestimonial].classList.add('is-active');
  }, 4200);
}

const heroVideo = document.querySelector('.hero video');
if (heroVideo && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => entry.isIntersecting ? heroVideo.play().catch(() => {}) : heroVideo.pause(), { threshold: .05 }).observe(heroVideo);
}
