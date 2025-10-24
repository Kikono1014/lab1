const header = document.getElementsByTagName('header')[0];
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

function createFallingImage() {
    const img = document.createElement('img');
    img.src = products[Math.floor(Math.random() * products.length)];
    img.classList.add('falling-image');
    img.style.left = `${Math.random() * 100}%`;
    header.appendChild(img);

    setTimeout(() => {
        header.removeChild(img);
    }, 5000);
}

setInterval(createFallingImage, 1000);