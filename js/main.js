var storiesSlider = new Swiper(".stories-slider", {
  loop: true,
  effect: "slide",

  navigation: {
    nextEl: ".stories-slider__button_next",
    prevEl: ".stories-slider__button_prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
