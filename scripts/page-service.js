var mainSlider = new Swiper(".work-slider", {
   slidesPerView: "auto",
   spaceBetween: 20,
   loop: false,

   navigation: {
      nextEl: ".work-slider .swiper-button-next",
      prevEl: ".work-slider .swiper-button-prev",
   },

   breakpoints: {
      993: {
         slidesPerView: 2,
         spaceBetween: 30,
      },
   },
});