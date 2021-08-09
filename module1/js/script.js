'use strict';

const box = document.querySelector('.box');

// Все значения через client/offset/scroll мы получаем в пикселях, но сами пиксели не записываются

// ширина и высота контента блока (элемент без паддингов, бордеров и скроллеров)
// const width = box.clientWidth,
//       height = box.clientHeight;
// Высота видимой части страницы без прокрутки (контент экрана)
// const viewHeight = document.documentElement.clientHeight;

// ширина и высота элемента с падингами, бордерами и скроллерами
// const width = box.offsetWidth,
//       height = box.offsetHeight;

// щирина и высота контента с учетом всех прокрутк (если стоит border-box, то берутся значения всех вложенных элементов)
const width = box.scrollWidth,
      height = box.scrollHeight;

document.querySelector('button').addEventListener('click', () => {
    // box.style.width = width + 'px';
    // box.style.height = height + 'px';
    // scrollTop и scrollLeft показывают, сколько мы уже пролистали страницу
    // Их мы можем изменять, в то время как scrollWidth/offsetWidth не можем
    console.log(box.scrollTop);
    box.scrollTop = 500;
});

// можем получить полные координаты элемента (координаты тут ВСЕГДА отсчитываются от левого верхнего угла)
// возвращается псевдомассив из которого можно доставать элементы 
console.log(box.getBoundingClientRect().top);


// Если мы хотим получить значение какого-то CSS свойства, то используем getComputedStyle (применяется именнно к window)
// Также мы можем получить стили псевдоэлементов (при этом изменить их никак не получится)
// const style = window.getComputedStyle(box, ':after');
const style = window.getComputedStyle(box);
console.log(style.display);

// Если мы хотим получить значение, на которое пролистана вся страица, то обращаемся через
document.documentElement.scrollTop = 300;
// или
console.log(window.pageYOffset);

// Если хотим пролистать страницу на какой-то уровень, то используем scrollBy/To
// By пролистывает от настоящего положения экрана,
// to пролистывает от начала страницы
window.scrollBy = 400;
window.scrollTo = 500;

// console.log(width, height);