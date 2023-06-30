import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

async function startStopStartSlider(sliderInstance, delay1, delay2) {
  while (true) {
    // Start the autoplay
    sliderInstance.autoplay.start();

    // Wait for the first delay and stop the autoplay
    await delay(delay1);
    sliderInstance.autoplay.stop();

    // Wait for the second delay and start the autoplay again
    await delay(delay2);
  }
}





let blogSliderRev = new Swiper(".swiper--blog__rev__container", {
  wrapperClass: "swiper--blog__wrapper",
  slideClass: "swiper--blog__slide",
  touchEventsTarget: "swiper--blog__wrapper",
  slidesPerView: "auto",
  direction: "horizontal",
  spaceBetween: 0,
  freeMode: true,
  freeModeMomentum: false,
  freeModeMomentumBounce: false,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
  loop: true,
  grabCursor: true,
});

blogSliderRev.on("touchEnd", function () {
  blogSliderRev.autoplay.start();
});

startStopStartSlider(blogSliderRev, 30000, 3000);

// slider 2
let blogSlider2 = new Swiper(".swiper--blog__rev__container2", {
  wrapperClass: "swiper--blog__wrapper2",
  slideClass: "swiper--blog__slide2",
  touchEventsTarget: "swiper--blog__wrapper2",
  slidesPerView: "auto",
  direction: "horizontal",
  spaceBetween: 0,
  freeMode: true,
  freeModeMomentum: false,
  freeModeMomentumBounce: false,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
  loop: true,
  grabCursor: true,
});

blogSlider2.on("touchEnd", function () {
  blogSlider2.autoplay.start();
});

startStopStartSlider(blogSlider2, 30000, 4000);
// slider 3
let blogSlider3 = new Swiper(".swiper--blog__rev__container3", {
  wrapperClass: "swiper--blog__wrapper3",
  slideClass: "swiper--blog__slide3",
  touchEventsTarget: "swiper--blog__wrapper3",
  slidesPerView: "auto",
  direction: "horizontal",
  spaceBetween: 0,
  freeMode: true,
  freeModeMomentum: false,
  freeModeMomentumBounce: false,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
  loop: true,
  grabCursor: true,
});

blogSlider3.on("touchEnd", function () {
  blogSlider3.autoplay.start();
});

startStopStartSlider(blogSlider3, 30000, 5000);

// review slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  grabCursor: true,
});
