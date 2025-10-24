$(document).on('home:ready', function () {
  const $header = $('header');
  const products = [
    'imgs/products/1.jpg',
    'imgs/products/2.jpg',
    'imgs/products/3.jpg',
    'imgs/products/4.jpg',
    'imgs/products/5.jpg',
    'imgs/products/6.jpg',
    'imgs/products/7.jpg',
    'imgs/products/8.jpg',
    'imgs/products/9.jpg',
    'imgs/products/10.jpg'
  ];

  if ($header.data('falling-images-running')) return;
  $header.data('falling-images-running', true);

  $header.find('.falling-image').remove();

  function createFallingImage() {
    const img = document.createElement('img');
    img.src = products[Math.floor(Math.random() * products.length)];
    img.classList.add('falling-image');
    img.style.left = `${Math.random() * 100}%`;
    $header[0].appendChild(img);

    setTimeout(() => {
      if (img.parentNode) {
        img.parentNode.removeChild(img);
      }
    }, 5000);
  }

  const intervalId = setInterval(createFallingImage, 1000);

  $(document).on('hashchange.fallingCleanup', function () {
    clearInterval(intervalId);
    $header.find('.falling-image').remove();
    $header.removeData('falling-images-running');
    $(document).off('hashchange.fallingCleanup');
  });
});