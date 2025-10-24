$(document).on('catalog:ready', function () {
  const $cards = $('.card');

  $cards.slice(0, 3).each(function () {
    const $h3 = $(this).find('h3');
    if ($h3.find('.new-label').length === 0) {
      $h3.append('<span class="new-label">Новинка!</span>');
    }
  });

  const $search = $('#search-input');
  if (!$search.data('search-bound')) {
    $search.data('search-bound', true);

    $search.off('input.catalog').on('input.catalog', function () {
      const query = $(this).val().toLowerCase().trim();
      $cards.each(function () {
        const title = $(this).find('h3').text().toLowerCase();
        $(this).toggle(title.includes(query));
      });
    });
  }
});