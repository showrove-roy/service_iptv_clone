import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

let blogSliderRev = new Swiper('.swiper--blog__rev__container', {
    wrapperClass: 'swiper--blog__wrapper',
    slideClass: 'swiper--blog__slide',
    touchEventsTarget: 'swiper--blog__wrapper',
    slidesPerView: 'auto',
    direction: 'horizontal',
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

blogSliderRev.on('touchEnd', function() {  
 	blogSliderRev.autoplay.start(); 
});