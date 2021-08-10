'use strict';

// Класс по факту является функцией
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello, ${this.name}`);
    };
}

// С помощью свойства prototype мы можем добавлять переменные классу
// Здесь мы добавляем функцию Exit
User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
};
// И вызвать данную переменную/функцию можно будет только после ее объявления (т. е. после 15 строки)

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.hello();
alex.hello();

ivan.exit();

console.log(ivan);