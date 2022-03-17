var swiper = new Swiper(".production-preview", {
   spaceBetween: 20,
   slidesPerView: 5,
   freeMode: true,
   watchSlidesProgress: true,
   direction: 'vertical',

   breakpoints: {
      320: {
         direction: 'horizontal',
         autoHeight: false,
         slidesPerView: 4,
      },
      993: {
         direction: 'vertical',
         autoHeight: true,
         slidesPerView: 5
      },
   }
});

var swiper2 = new Swiper(".production-img", {
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   thumbs: {
      swiper: swiper,
   },
});

$('.review-card__text').showMore({
   minheight: 231,
   buttontxtmore: "Читать полностью",
   buttontxtless: "Скрыть",
});

//Скролл по клику
$(".scroll-link").click(function () {
   event.preventDefault();
   var minus = 130;
   var id = $(this).attr('href'),
      top = $(id).offset().top - minus;
   $('body,html').animate({ scrollTop: top }, 1000);
});


(function () {
   const reviewsList = document.querySelector('.reviews-list');

   let dataSet = false;
   let swiper;

   function mobileSlider() {
      if (reviewsList != null) {

         if (window.innerWidth <= 991 && dataSet == false) {
            swiper = new Swiper(reviewsList, {
               slidesPerView: 'auto',
               spaceBetween: 30,
               loop: false,
               slideClass: 'review-card',
            });

            dataSet = true;
         }

         if (window.innerWidth > 991) {
            dataSet = false;

            if (reviewsList.classList.contains('swiper-initialized')) {
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

$(".rate-in").rateYo({
   starWidth: "17px",
   normalFill: "#929292",
   ratedFill: "#059E05",
   spacing: "3px",
   numStars: 5,
   fullStar: true,
});

$('.show-feedback').click(function () {
   if ($(this).hasClass('show')) {
      $(this).removeClass('show');
      $(this).text('Оставить отзыв');
      $('.feedback-form').slideUp();
   } else {
      $(this).addClass('show');
      $(this).text('Скрыть отзыв');
      $('.feedback-form').slideDown();
   }
});
