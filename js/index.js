$(function () {
  const $content = $('#content');
  let currentAjax = null;

  const pages = {
    home: 'pages/home.html',
    catalog: 'pages/catalog.html',
    feedback: 'pages/feedback.html',
    reviews: 'pages/home.html'
  };

  function showPage(id) {
    $content.empty();

    let activeId = id;
    let scrollTo = null;

    if (id === 'reviews') {
      activeId = 'home';
      scrollTo = '#reviews';
    }

    const url = pages[activeId];
    if (!url) {
      $content.html('<p style="color:red;text-align:center;">Невідома сторінка.</p>');
      return;
    }

    if (currentAjax) {
      currentAjax.abort();
    }

    currentAjax = $.get(url)
      .done(function (html) {
        let $html = $(html);
        
        $content.html("");

        $content.append($html);

        // Скрол
        if (scrollTo) {
          const $el = $(scrollTo);
          if ($el.length) {
            const headerHeight = $('header').outerHeight() || 0;
            const offset = $el.offset().top - headerHeight;
            $('html, body').animate({ scrollTop: offset }, 10);
          } else {
            $('html, body').animate({ scrollTop: 0 }, 10);
          }
        } else {
          $('html, body').animate({ scrollTop: 0 }, 10);
        }

        if (activeId === 'catalog') $(document).trigger('catalog:ready');
        if (activeId === 'feedback') $(document).trigger('feedback:ready');
        if (activeId === 'home' || id === 'reviews') $(document).trigger('home:ready');
      })
      .fail(function () {
        $content.html('<p style="color:red;text-align:center;">Помилка завантаження сторінки.</p>');
      })
      .always(function () {
        currentAjax = null;
      });
  }

  // При натисканні кнопки змінюється лише хеш
  $(document).on('click', 'a[href^="#"], .back[href^="#"]', function (e) {
    e.preventDefault();
    const hash = this.href.split('#')[1];
    if (window.location.hash === '#' + hash) return;
    window.location.hash = hash;
  });

  // При зміні хешу завантажується сторінка
  $(window).on('hashchange', function () {
    let hash = window.location.hash.substring(1);
    if (!hash || !pages[hash] && hash !== 'reviews') hash = 'home';
    showPage(hash);
  }).trigger('hashchange');
});