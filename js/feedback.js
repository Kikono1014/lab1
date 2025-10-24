$(document).on('feedback:ready', function () {
  const $details = $('#details');
  const $tooltip = $('.tooltip');

  if ($details.data('feedback-bound')) return;
  $details.data('feedback-bound', true);

  $details.off('.feedback');
  $tooltip.off('.feedback');

  $details.on('mouseover.feedback', function () {
    $details.css({
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    });

    $tooltip.show();
    const topPos = $details.offset().top / 2 + $details.height() + 50;
    $tooltip.css({ top: topPos + 'px' });
  });

  $details.on('mouseout.feedback', function () {
    $details.css({
      backgroundColor: '',
      border: '',
      boxShadow: ''
    });
    $tooltip.hide();
  });
});