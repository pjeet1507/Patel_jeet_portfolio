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

  const colors = ["#7FBFD2", "#B8A2FE", "#967BB6", "#6dcc7a", "#eb4d55"];
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

  // variables

  const playerCon = document.querySelector("#player-container");
  const player = document.querySelector("video");
  const videoControls = document.querySelector("#video-controls");
  const playButton = document.querySelector("#play-button");
  const pauseButton = document.querySelector("#pause-button");
  const stopButton = document.querySelector("#stop-button");
  const volumeSlider = document.querySelector("#change-vol");
  const fullScreen = document.querySelector("#full-screen");

  // functions

  //if JS is loaded, super. Remove the default controls
  player.controls = false;
  videoControls.classList.remove("hidden");

  function playVideo() {
    player.play();
  }

  function pauseVideo() {
    player.pause();
  }

  function stopVideo() {
    player.pause();
    player.currentTime = 1;
  }

  function changeVolume() {
    player.volume = volumeSlider.value;
    console.log(volumeSlider.value);
  }

  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitFullScreen) {
      document.webkitFullScreen();
    } else if (playerCon.webkitRequestFullScreen) {
      playerCon.webkitRequestFullScreen();
    } else {
      playerCon.requestFullscreen();
    }
  }

  function hideControls() {
    if (player.paused) {
      return;
    }
    videoControls.classList.add("hide");
  }

  function showControls() {
    videoControls.classList.remove("hide");
  }

  // Event Listeners

  playButton.addEventListener("click", playVideo);
  pauseButton.addEventListener("click", pauseVideo);
  stopButton.addEventListener("click", stopVideo);
  volumeSlider.addEventListener("change", changeVolume);
  fullScreen.addEventListener("click", toggleFullScreen);
  videoControls.addEventListener("mouseenter", showControls);
  videoControls.addEventListener("mouseleave", hideControls);
  player.addEventListener("mouseenter", showControls);
  player.addEventListener("mouseleave", hideControls);
})();
