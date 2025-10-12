function adjustNav() {
    const nav = document.getElementsByTagName('nav')[0];
    const aside = document.getElementsByTagName('aside')[0];
    const article = document.getElementsByTagName('article')[0];
    const main = document.getElementsByTagName('main')[0];
    const top = document.getElementsByClassName('top')[0];

    if (window.innerWidth <= 768) {
        nav.style.flexDirection = 'column';
        nav.style.alignItems = 'flex-end';
        nav.style.position = 'absolute';
        nav.style.right = '0';
        nav.style.top = '75px';
        nav.style.width = '19%';
        nav.style.height = '2030px';
        nav.style.zIndex = '10';

        
        aside.style.float = "none";
        aside.style.width = "72%";

        article.style.float = "none";
        article.style.marginTop = "175px";
        article.style.width = "72%";

        main.style.paddingLeft = "0";
        main.style.paddingRight = "0";

        top.style.marginLeft = "5px";
    } else {
        nav.style.flexDirection = 'row';
        nav.style.alignItems = 'center';
        nav.style.position = 'static';
        nav.style.width = 'auto';
        nav.style.height = 'auto';

        aside.style.float = "right";
        aside.style.width = "19%";

        article.style.float = "left";
        article.style.marginTop = "0px";
        article.style.width = "70%";

        main.style.paddingLeft = "5%";
        main.style.paddingRight = "5%";

        top.style.marginLeft = "5%";
    }
}

window.addEventListener('resize', adjustNav);
adjustNav();
