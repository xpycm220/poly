
(function () {
   const serviceList = document.querySelector('.service-list');

   let dataSet = false;
   let swiper;

   function mobileSlider() {
      if (serviceList != null) {
         if (window.innerWidth <= 991 && dataSet == false) {
            swiper = new Swiper(serviceList, {
               slidesPerView: 'auto',
               spaceBetween: 30,
               loop: false,
               slideClass: 'service-card',
            });

            dataSet = true;
         }

         if (window.innerWidth > 991) {
            dataSet = false;

            if (serviceList.classList.contains('swiper-initialized')) {
               swiper.destroy();
            }
         }
      }
   }

   mobileSlider();

   window.addEventListener('resize', () => {
      mobileSlider();
   });
})();

