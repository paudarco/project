'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // длина псевдомассива с классами
// console.log(btns[0].classList.item(0)); // получение класса по индексу из псевдомассива с классами
// console.log(btns[0].classList.add('red', 'car')); // добавление нового класса элементу
// console.log(btns[0].classList.remove('blue')); // удаление класса
// console.log(btns[0].classList.toggle('blue')); // включает или выключает класс в зависимости от наличия или отсутстви
// toggle тоже возвращает либо true либо False

// btns[1].classList.toggle('red');
// contains позволяет проверить на наличие класса и возвращает true или false
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// } else {
//     console.log('no');
// }

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.toggle('red');
//     } else {
//         btns[1].classList.toggle('red');
//     }
// });


// Делегирование - если элемент подходит под условие, то на нем сработает функция, которую мы передали
// Мы делегируем событие с родителя на его потомков
// Замена этому способу - привязка функции к каждому элементу родителя (что не всегда сработает)
// обращаемся к родительскому элементу и отслеживаем событие клика
// если цель клика - кнопка, то что-то делаем
// event.target в начале прописываем, чтобы не рассматривать элементы без target
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello!');
    }
});
// Здесь можем заменить event.target.tagName на 
event.target.mathes('button.red');
// matches тоже возвращает bool


// При такой привязке события новые добавленные элементы обрабатывать события не будут
// btns.forEach(btn, () => {
//     btn.addEventListener('click', () => {
//         console.log('Hello!');
//     });
// });


// Даже создав новый элемент делегирование будет обрабатывать событие
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);