import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

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

// review slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  grabCursor: true,
});
