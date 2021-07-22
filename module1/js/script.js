'use  strict';

let soldier = {
    health: 400,
    armor: 100,
    sayHello: () => {
        console.log('Hello!');
    },
    someShit: {
        x: 10,
        y: 20
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; // __proto__ - deprecated, устаревшее свойство

Object.setPrototypeOf(john, soldier); //аналогично предыдущей записи с __proto__

john.sayHello();

console.log(john.armor);

console.log(john.health);

john.health = 200;

john.someShit.x = 345;

console.log(soldier);
console.log(john);