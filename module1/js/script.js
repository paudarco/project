'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        // для указания приватных свойств можно дописывать _ перед названием свойства
        // это не синтаксис языка, а договоренность жсников
        this._age = age;
    }

    // Приватное поле класса
    // экспериментальная технология, не вошедшая в стандарт
    #surname = 'Sesalkin';

    say() {
        console.log(`имя ${this.name} ${this.#surname} возраст ${this._age}`);
    }

    // т к свойство названо с _, вызов свойства по имени без подчеркивания сразу перебросит в геттер или сеттер
    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof(age) === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }

    // с полями классов то же самое,
    // т к вне класса такие свойства получить нельзя
    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        if (!surname.match(/\d/ig)) {
            this.#surname = surname;
        } else {
            console.log('Нормальную фамку введи');
        }
    }
}

const ivan = new User('Ivan', 30);
// console.log(ivan.name);
// console.log(ivan.age);
// ivan.age = 100;
// console.log(ivan.age);
// ivan.say();

console.log(ivan.surname);
ivan.surname = 'Petr5';
console.log(ivan.surname);
ivan.say();

