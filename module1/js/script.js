'use strict';

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }
}

// extends обозначает суперкласс (на основе которого создается след класс)
// Чтобы получить все аргументы класса-родителя, мы прописываем их в super
// При этом методы тоже переносятся
class ColoredRectangleWithText extends Rectangle {
    constructor(width, height, text, bgColor) {
        super(width, height);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Цвет ${this.bgColor}, текст ${this.text}`);
    }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(100, 20);
const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');

console.log(square.calcArea());
console.log(long.calcArea());

console.log(div.calcArea());