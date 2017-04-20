$(() => {

  /**
   * form styler
   */
  $('input[type=checkbox]').styler();


  /**
   * filtering for account types
   */

  var $grid = $('[data-js-grid]').isotope({
    itemSelector: '[data-js-grid-item]',
  });

  var filterGroup = $('[data-js-filter-group]');

  filterGroup.on('click', 'button', function () {
    var item = $(this);
    var filterValue = item.attr('data-filter');

    filterGroup.find('button').removeClass('content__filter--current');
    item.addClass('content__filter--current');
    $grid.isotope({filter: filterValue});
  });
});
