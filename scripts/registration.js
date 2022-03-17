$(function () {
   $('.info-delivery__caption').on('click', 'li:not(.active)', function () {
      $(this)
         .addClass('active').siblings().removeClass('active')
         .closest('.info-delivery').find('.info-delivery__content')
         .removeClass('active').eq($(this).index()).addClass('active');
   });
});

$('.registration-head').on('click', '.registration-head__item:not(.active)', function () {
   $(this).addClass('active').siblings().removeClass('active');
   $('.registration-body__item').removeClass('active').eq($(this).index()).addClass('active');
});
