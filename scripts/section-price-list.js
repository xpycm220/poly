$(window).resize(function () {
   table_td_height()
});

table_td_height();
function table_td_height() {
   $('.price-table .name').each(function () {
      var td_height = $(this).height();
      var td_outerHeight = $(this).outerHeight();

      $(this).parents('tr').find('.fixed1').height(td_height);
      $(this).parents('tr').find('.fixed2').height(td_height);
   });
}