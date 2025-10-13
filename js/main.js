function adjustNav() {
    const body = document.body;

    if (window.innerWidth <= 768) {
        document.body.classList.add('mobile');
        document.body.classList.remove('desktop');
    } else {
        document.body.classList.add('desktop');
        document.body.classList.remove('mobile');
    }
}

window.addEventListener('resize', adjustNav);
adjustNav();
