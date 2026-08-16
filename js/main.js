document.addEventListener('DOMContentLoaded', () => {
  initNavIndicator();
  initScrollReveal();
});

function initNavIndicator() {
  const wrap = document.querySelector('.site-nav .wrap');
  const indicator = document.querySelector('.nav-indicator');
  const links = document.querySelectorAll('.nav-link');
  if (!wrap || !indicator || !links.length) return;

  const moveTo = (el) => {
    const wrapRect = wrap.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    indicator.style.left = (rect.left - wrapRect.left) + 'px';
    indicator.style.width = rect.width + 'px';
    indicator.style.top = (rect.bottom - wrapRect.top + 3) + 'px';
    indicator.style.opacity = '1';
  };

  const activeLink = document.querySelector('.nav-link.active') || links[0];
  moveTo(activeLink);

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => moveTo(link));
  });
  wrap.querySelector('ul').addEventListener('mouseleave', () => moveTo(activeLink));
  window.addEventListener('resize', () => moveTo(activeLink));
}

function initScrollReveal() {
  const items = document.querySelectorAll('.entry, .project');
  if (!items.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  items.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = Math.min(i * 60, 240) + 'ms';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  items.forEach((el) => observer.observe(el));
}
