document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    this.classList.toggle("change");

    let target = ".mobile-nav-links";
    if (this.classList.contains("change")) {
      // Slide in from the right
      gsap.to(target, { duration: 0.3, right: "0%", ease: "power3.out" });
    } else {
      // Slide out to the right
      gsap.to(target, { duration: 0.3, right: "-100%", ease: "power3.in" });
    }
  });
