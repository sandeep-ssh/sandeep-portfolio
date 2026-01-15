/*!
* Modernised for Cloud Portfolio
* Based on Start Bootstrap Freelancer
*/

window.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     NAVBAR SHRINK (MODERN STYLE)
     =============================== */
  const navbar = document.getElementById("mainNav");

  const navbarShrink = () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
  };

  navbarShrink();
  document.addEventListener("scroll", navbarShrink);

  /* ===============================
     SMOOTH SCROLLING
     =============================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* ===============================
     BOOTSTRAP SCROLLSPY
     =============================== */
  if (navbar) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -30%"
    });
  }

  /* ===============================
     COLLAPSE MOBILE MENU ON CLICK
     =============================== */
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelectorAll("#navbarResponsive .nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

});
