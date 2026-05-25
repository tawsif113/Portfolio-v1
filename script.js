document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const counters = Array.from(document.querySelectorAll('.metrics__value[data-target]'));

  const formatValue = (value, suffix = '') => `${Math.round(value)}${suffix}`;

  const runCounter = (el) => {
    const target = Number(el.dataset.target || '0');
    const suffix = el.dataset.suffix || '';
    const duration = prefersReducedMotion ? 0 : 1100;
    const start = performance.now();

    if (!Number.isFinite(target)) return;

    if (duration === 0) {
      el.textContent = formatValue(target, suffix);
      return;
    }

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = formatValue(value, suffix);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = formatValue(target, suffix);
      }
    };

    requestAnimationFrame(tick);
  };

  if (!counters.length) return;

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver((entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        runCounter(entry.target);
        obs.unobserve(entry.target);
      }
    }, { threshold: 0.35 });

    counters.forEach((counter) => observer.observe(counter));
  } else {
    counters.forEach(runCounter);
  }
});
