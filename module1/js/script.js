'use strict';

// touchstart срабатывает при касании по элементу
// touchmove срабатывает при движении пальца по элементу
// touchend срабатывает когда палец отрывается с элемента
// touchenter срабатывает когда мы ведем пальцем по экрану и наскакиваем на нужный элемент
// touchleave когда палец соскользнул с элемента дальше по экрану
// touchcancel когда палец выйдет за пределы браузера

// вместо window можно использовать document
window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('div.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('moving...');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('ended');
    });
});

// свойства события event для мобилок
// touches выдает список всех пальцев на экране (event.touches)
// targetTouches выдает список всех пальцев на элементе
// changedTouches список пальцев участвующих в текущем событии