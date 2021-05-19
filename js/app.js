//AdLap 2021

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const media = window.matchMedia('(min-width: 750px)');

burger.addEventListener('click', function () {
    burger.classList.toggle('menu-visible');

    if (burger.classList.contains('menu-visible')) {
        menu.style.transform = 'translateY(50px)'
    }

    if (!burger.classList.contains('menu-visible')) {
        menu.style.transform = 'translateY(-200%)';
    }
});

menu.addEventListener('click', function () {
    // menu.style.transform = 'translateY(-200%)';
    media ? menu.style.transform = 'translateY(0)' : menu.style.transform = 'translateY(-200%)';
    // burger.classList.remove('menu-visible');

});

media.addEventListener('change', function (e) {
    if (e.matches) {
        burger.classList.remove('menu-visible');
        menu.style.transform = 'translateY(0)';
    }

    if (!e.matches) {
        menu.style.transform = 'translateY(-200%)';
    }
});
