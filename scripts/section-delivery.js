
(function () {
   const deliveryTariff = document.querySelector('.delivery-tariff');
   let dataSet = false;
   let swiper;

   function mobileSlider() {
      if (deliveryTariff != null) {
         if (window.innerWidth <= 991 && dataSet == false) {
            swiper = new Swiper(deliveryTariff, {
               slidesPerView: 'auto',
               spaceBetween: 30,
               loop: false,
               slideClass: 'tariff-card',
            });

            dataSet = true;
         }

         if (window.innerWidth > 991) {
            dataSet = false;

            if (deliveryTariff.classList.contains('swiper-initialized')) {
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

$(function () {
   $('.info-delivery__caption').on('click', 'li:not(.active)', function () {
      $(this)
         .addClass('active').siblings().removeClass('active')
         .closest('.info-delivery').find('.info-delivery__content')
         .removeClass('active').eq($(this).index()).addClass('active');
   });
});