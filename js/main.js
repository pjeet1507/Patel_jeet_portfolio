(() => {
  gsap.registerPlugin(ScrollTrigger);
  // mobile-navigation

  document
    .querySelector(".hamburger-menu")
    .addEventListener("click", function () {
      this.classList.toggle("change");

      let target = ".mobile-nav-links";
      if (this.classList.contains("change")) {
        gsap.to(target, { duration: 0.3, right: "0%", ease: "power3.out" });
      } else {
        gsap.to(target, { duration: 0.3, right: "-100%", ease: "power3.in" });
      }
    });
  //---------------------

  // scroll triger [background color]

  const colors = ["#7FBFD2", "#B8A2FE", "#6dcc7a", "#eb4d55"];
  const sections = gsap.utils.toArray("section");

  sections.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      //   markers: true,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
      onEnter: () =>
        gsap.to("body", { backgroundColor: colors[index], duration: 1 }),
      onLeaveBack: () =>
        gsap.to("body", {
          backgroundColor: colors[index - 1] || "white",
          duration: 1,
        }),
      onEnterBack: () =>
        gsap.to("body", { backgroundColor: colors[index], duration: 1 }),
    });
  });
  //---------------------------------
  // contact animation

  gsap.to(".con-title", {
    duration: 1,
    opacity: 1,
    y: 0,
    delay: 0.5,
  });
  gsap.to(".con-subtitle", {
    duration: 1,
    opacity: 1,
    y: 0,
    delay: 0.7,
  });
  //---------------------
})();
