
(function () {
   const serviceList = document.querySelector('.popular-list');

   let dataSet = false;
   let swiper;

   function mobileSlider() {
      if (serviceList != null) {
         if (window.innerWidth <= 991 && dataSet == false) {
            swiper = new Swiper(serviceList, {
               slidesPerView: 'auto',
               spaceBetween: 30,
               loop: false,
               slideClass: 'popular-item',
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
