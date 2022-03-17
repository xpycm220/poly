$('.my-order__head').click(function () {
   $(this).toggleClass('in');
   $(this).parents('.my-order').find('.my-order__body').slideToggle();
});

$('.my-review__head').click(function () {
   $(this).toggleClass('in');
   $(this).parents('.my-review').find('.my-review__body').slideToggle();
});

