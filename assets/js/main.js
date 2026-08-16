const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  document.body.classList.toggle('menu-open', isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

document.querySelectorAll('[data-coming-soon]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});

document.querySelectorAll('[data-video-card] video').forEach((video) => {
  const card = video.closest('[data-video-card]');
  // Keep a reliable visual preview in place until the visitor starts playback.
  // This avoids browser-specific black video frames during initial media loading.
  video.addEventListener('play', () => card?.classList.add('is-video-playing'), { once: true });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll('.section-reveal');
const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
  { threshold: 0.08 }
);
revealTargets.forEach((target) => revealObserver.observe(target));
