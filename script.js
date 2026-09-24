(() => {
  const grid = document.querySelector(".incident-grid");
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll(".incident-card"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  grid.classList.add("reveal-ready");

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        cards.forEach((card, index) => {
          window.setTimeout(() => {
            card.classList.add("is-visible");
          }, index * 130);
        });

        currentObserver.unobserve(entry.target);
      }
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  observer.observe(grid);
})();
