$('.style-cards__btn').click(function () {
   $('.style-cards__btn').removeClass('active');
   $(this).addClass('active');

   if ($(this).hasClass('list')) {
      $('.goods-card').addClass('list');
   } else {
      $('.goods-card').removeClass('list');
   }
});

$('.filter-category__dropdown li').click(function () {
   $('.filter-category__dropdown li').removeClass('active');
   $(this).addClass('active');
});

$('.filter-category__title').click(function () {
   var ul = $(this).parents('.filter-category__item').find('ul');

   if (ul.length) {
      ul.slideToggle();
      $(this).parents('.filter-category__item').toggleClass('active');
   }
});

$('.filter-collapse-btn').click(function () {
   var collapseItemLength = $(this).parents('.filter-checkbox').find('.filter-collapse .filter-checkbox__item').length;

   if ($(this).hasClass('show')) {
      $(this).parents('.filter-checkbox').find('.filter-collapse').slideUp();
      $(this).removeClass('show');
      $(this).text('Ещё ' + collapseItemLength);
   } else {
      $(this).parents('.filter-checkbox').find('.filter-collapse').slideDown();
      $(this).addClass('show');
      $(this).text('Свернуть');
   }
});