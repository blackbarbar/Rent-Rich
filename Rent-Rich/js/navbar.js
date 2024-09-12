document.addEventListener("DOMContentLoaded", function () {
  const section1 = document.querySelector("#header");
  const navbar = document.querySelector(".navbar");

  if (!section1 || !navbar) {
    console.error("Elements not found: section1 or navbar");
    return; // Exit if elements are not found
  }

  function handleScroll() {
    const section1Bottom = section1.offsetTop + section1.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > section1Bottom) {
      navbar.classList.add("blurred");
    } else {
      navbar.classList.remove("blurred");
    }
  }

  // Attach the scroll event listener
  document.addEventListener("scroll", handleScroll);

  // Initial check in case the page is loaded with some scroll position
  handleScroll();
});
