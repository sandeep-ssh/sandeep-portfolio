/*!
 * Portfolio Core Script
 * Clean, framework-light, performance-first
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     THEME TOGGLE (LIGHT / DARK)
     =============================== */
  const toggle = document.getElementById("theme-toggle");
  const root = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
  } else {
    root.setAttribute("data-theme", "dark");
  }

  toggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ===============================
     NAVBAR SHRINK ON SCROLL
     =============================== */
  const navbar = document.getElementById("mainNav");

  if (navbar) {
    const handleScroll = () => {
      navbar.classList.toggle("navbar-shrink", window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
  }

  /* ===============================
     SMOOTH SCROLL (ANCHORS)
     =============================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  /* ===============================
     FADE-IN ON VIEWPORT (PERF)
     =============================== */
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".animate").forEach(el => observer.observe(el));
});
