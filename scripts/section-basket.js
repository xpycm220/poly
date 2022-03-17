
//Доставка
$('.delivery-nav__item').click(function () {
   $('.delivery-nav__item').removeClass('active');
   $(this).addClass('active');
   $(this).find('.radio__input').prop('checked', true);

   var target = $(this).data('target');
   $('.delivery-body__item').fadeOut(0);
   $('.' + target).fadeIn();
});



