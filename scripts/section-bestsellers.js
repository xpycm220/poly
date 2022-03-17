
(function () {
   const bestsellersList = document.querySelector('.bestsellers-list');

   let dataSet = false;
   let swiper;

   function mobileSlider() {
      if (bestsellersList != null) {

         if (window.innerWidth <= 991 && dataSet == false) {
            swiper = new Swiper(bestsellersList, {
               slidesPerView: 'auto',
               spaceBetween: 30,
               loop: false,
               slideClass: 'goods-card',
            });

            dataSet = true;
         }

         if (window.innerWidth > 991) {
            dataSet = false;

            if (bestsellersList.classList.contains('swiper-initialized')) {
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