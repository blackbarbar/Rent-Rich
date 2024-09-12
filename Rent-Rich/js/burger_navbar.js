document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const mobileLinks = document.querySelector(".mobile-links");
  const closeBtn = document.querySelector(".close-btn");
  const backdrop = document.querySelector(".backdrop");
  const links = document.querySelectorAll(".mobile-links a");

  burger.addEventListener("click", () => {
    mobileLinks.classList.toggle("active");
    backdrop.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileLinks.classList.remove("active");
    backdrop.classList.remove("active");
  });

  backdrop.addEventListener("click", () => {
    mobileLinks.classList.remove("active");
    backdrop.classList.remove("active");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      mobileLinks.classList.remove("active");
      backdrop.classList.remove("active");
    });
  });
});
