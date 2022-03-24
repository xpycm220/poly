$(document).ready(function () {
   //Валидация
   $("input").attr("autocomplete", "off");

   $(".validate").each(function () {
      $(this).validate({
         rules: {
            name: "required",
            surname: "required",
            address: "required",
            tell: {
               required: true,
            },
            message: "required",
            email: {
               required: true,
               email: true
            },
         },
         errorPlacement: function (error, element) {
            error.insertAfter(element);
         },
         messages: {
            name: "Ваше имя?",
            surname: 'Ваша фамилия?',
            tell: "Ваш телефон?",
            address: "Ваш адрес?",
            message: "Текст вашего отзыва?",
            email: {
               required: "Ваш email?",
               email: "Не правильный адрес электронной почты"
            },
         },
         highlight: function (element) {
            $(element)
               .text('').addClass('error')
         },

         success: function (element) {
            element
               .text('').addClass('valid')
         }
      });
   });


   // Маска телефона
   if ($("input[type='tel']").length) {
      $(function ($) {
         $("input[type='tel']").mask("+7 (999) 999-99-99");
      });
   }
   //Select
   if ($('.main-select').length) {
      $('.main-select').niceSelect();
   }

   ////Фильтр
   $('.filter-btn').click(function () {
      showFilter();
   });

   $('.close-filter').click(function () {
      hideFilter();
   });

   function showFilter() {
      $('.filter').addClass('show');
      $('.price-filter__r').addClass('show');
      showOverlay();
   };

   function hideFilter() {
      $('.filter').removeClass('show');
      $('.price-filter__r').removeClass('show');
      hideOverlay();
   };

   /// меню
   //Оверлей
   function showOverlay() {
      $('html').css('overflow', 'hidden');
      $("body").append("<div class='overlay'></div>");
      $("header").css('padding-right', checkScrollWidth);
   };

   function hideOverlay() {
      $('html').css('overflow', 'auto');
      $('.overlay').remove();
      $("header").css('padding-right', '0');
   };

   $('body').on('click', '.overlay', function () {
      hideFilter();
      hideMobMenu();
      hideProfileMenu();
   });


   //Ширина скроллбара(что бы не прыгало при открытии меню)
   function checkScrollWidth() {
      let div = document.createElement('div');
      div.className = "sw";
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';

      document.body.append(div);
      var scrollWidth = div.offsetWidth - div.clientWidth;
      $('.sw').remove();

      return scrollWidth;
   }


   ////////////

   //Закрытие каталога в хедере при клике вне
   $(document).mouseup(function (e) {
      var div = $(".header");
      if (!div.is(e.target)
         && div.has(e.target).length === 0) {
         hideHeaderCatalog();
      }
   });

   $('.catalog-btn').on('click', function () {
      if ($(this).hasClass('active')) {
         hideHeaderCatalog();
      } else {
         showHeaderCatalog();
      }
   });

   function showHeaderCatalog() {
      $('.catalog-btn').addClass('active');
      $('.header-catalog').addClass('show');
   }

   function hideHeaderCatalog() {
      $('.catalog-btn').removeClass('active');
      $('.header-catalog').removeClass('show');
   }

   $('.mmenu-btn').on('click', function () {
      if ($(this).hasClass('active')) {
         hideMobMenu();
      } else {
         showMobMenu();
      }
   });

   $('.mobile-menu__close').click(function () {
      hideMobMenu();
   });

   function showMobMenu() {
      $('.mmenu-btn').addClass('active');
      $('.mobile-menu').addClass('show');
      showOverlay();
   }

   function hideMobMenu() {
      $('.mmenu-btn').removeClass('active');
      $('.mobile-menu').removeClass('show');
      hideOverlay();
   }

   $('.profile-btn').click(function () {
      showProfileMenu();
   });

   function showProfileMenu() {
      $('.sidebar').addClass('show');
      showOverlay();
   }

   function hideProfileMenu() {
      $('.sidebar').removeClass('show');
      hideOverlay();
   }

   //Липкая шапка
   $(function () {
      $(window).scroll(function () {
         var heightHeaderTop = $('.header-top').height();
         var ww = $(window).width();

         if (ww > 991) {
            if ($(this).scrollTop() >= heightHeaderTop) {
               $('.header-main').addClass('stickytop');
            }
            else {
               $('.header-main').removeClass('stickytop');
            }
         }
      });
   });

   //Добавить в избранное
   $('.add-favorite').click(function () {
      $(this).toggleClass('add');
   });

   //Прикрепить файлы
   $('.input-images').each(function () {
      $(this).imageUploader({
         label: 'Перетащите сюда файлы или выберите файл',
         maxSize: 5 * 1024 * 1024, //Макс размер
         maxFiles: 5, //Макс кол. файлов
         extensions: ['.jpg', '.jpeg', '.png', '.gif', '.svg'],
      });
   });


   //Popup   
   $('.btn-popup').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
   });

   // sendForm();
   function sendForm() {
      $.magnificPopup.open({
         items: {
            src: '#send-popup'
         },
         type: 'inline',
         mainClass: 'my-mfp-zoom-in',
         removalDelay: 300,
      }, 0);
   };

   new AirDatepicker('#picker', {
      // inline: true
   })
});
