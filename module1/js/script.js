'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);


// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }

// const user = {
//     name: 'John'
// };

// Ручное присвоение конекста. Чтобы вызвать функцию к объекту, используем либо call, либо apply
// При этом передавая аргументы так, как записано ниже
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);


// function count(num) {
//     return this * num;
// }

// Создаем контекст вручную (в скобках bind указывается аргумент this)
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


// 1) В обычной функции this = window, но если стоит строгий режим, то this = undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind


const btn = document.querySelector('button');

// Здесь контекстом вызова будет сам элемент, на котором произошло событтие (this работает как event.target)
// (только если колбек в класическом виде function() {})
btn.addEventListener('click', function() {
    console.log(this);
});

// У стрелочной функции нет своего контекста вызова
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();