'use strict';

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.addEventListener('click', (event) => {
//     console.log(event.target);
// });

// Всплытие событий - когда обработчик событий сначала срабатывает на дочернем элементе, 
// потом на родителе, и выше по иерархии
let i = 0;
const deleteElement = (event) => {
    console.log(event.currentTarget);
    i++;
    if (i == 1) {
        event.target.removeEventListener('click', deleteElement);
    }
};

// once - сработает только один раз
btn.addEventListener('click', deleteElement, {once: true});
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    // preventDefault отменяет дефолтное поведение элемента
    event.preventDefault();
    console.log('fuck its doesnt work');
})