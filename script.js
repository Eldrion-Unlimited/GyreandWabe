document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();

      const header = document.querySelector(".site-header");
      const headerOffset = header ? header.offsetHeight + 16 : 0;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });

  const animatedCards = document.querySelectorAll(
    ".collection-card, .authority-card, .stat-card, .detail-card, .detail-image-card, .spec-card"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    animatedCards.forEach((card) => {
      card.classList.add("fade-up");
      observer.observe(card);
    });
  }

  const heroVisual = document.querySelector(".hero-visual");

  if (heroVisual && window.innerWidth > 960) {
    window.addEventListener("mousemove", (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 14;
      const y = (event.clientY / window.innerHeight - 0.5) * 14;

      heroVisual.style.transform = `translate3d(${x * 0.5}px, ${y * 0.5}px, 0)`;
    });

    window.addEventListener("mouseleave", () => {
      heroVisual.style.transform = "translate3d(0, 0, 0)";
    });
  }

  const mainProductImage = document.getElementById("mainProductImage");
  const thumbs = document.querySelectorAll(".thumb");

  if (mainProductImage && thumbs.length) {
    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const nextImage = thumb.getAttribute("data-image");
        if (!nextImage) return;

        mainProductImage.src = nextImage;

        thumbs.forEach((item) => item.classList.remove("active"));
        thumb.classList.add("active");
      });
    });
  }
});
