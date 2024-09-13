document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const subPagesMenu = document.querySelector("#subpagesMenu");
  const mobileLinks = document.querySelector(".mobile-links");
  const subpages = document.querySelector(".subpages-links");
  const closeBtn = document.querySelector(".close-btn");
  const closeBtnSub = document.querySelector(".close-btn-sub");
  const backdrop = document.querySelector(".backdrop");
  const links = document.querySelectorAll(".mobile-links a");

  burger.addEventListener("click", () => {
    mobileLinks.classList.toggle("active");
    backdrop.classList.toggle("active");
  });

  subPagesMenu.addEventListener("click", () => {
    subpages.classList.toggle("enabled");
    backdrop.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileLinks.classList.remove("active");
    backdrop.classList.remove("active");
  });

  closeBtnSub.addEventListener("click", () => {
    subpages.classList.remove("enabled");
    backdrop.classList.remove("active");
  });

  backdrop.addEventListener("click", () => {
    mobileLinks.classList.remove("active");
    subpages.classList.remove("enabled");
    backdrop.classList.remove("active");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      mobileLinks.classList.remove("active");
      backdrop.classList.remove("active");
    });
  });
});
