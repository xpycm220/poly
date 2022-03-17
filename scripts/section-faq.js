$('.faq__head').click(function () {
   $(this).parents('.faq__item').find('.faq__inner').slideToggle();
   $(this).toggleClass('active');
});