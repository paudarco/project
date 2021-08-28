'use strict';

// filter и map возвращают новый массив, когда forEach не возвращает

// filter фильтрует по условию

const names = ['Ivan', 'Anna', 'Ksenya', 'Voldemart'];

const shortNames = names.filter(name => name.length < 5);
// то же самое, что и 
// name.filter(name => {
//     if (name.length < 5) {
//         return name;
//     }
// });
// или 
// name.filter(name => {
//     return name.length < 5;
// });

console.log(shortNames);


// map изменяет каждый элемент массива

const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => item.toLowerCase());

console.log(result);


// every/some возвращают true или false
// они проверяют массив на условие
// при every все элементы должны подходить под условие
// при some - хотя бы один

const arr = [9, 'jkh', 'sdfjfgha'];

console.log(arr.some(item => typeof(item) === 'number'));
console.log(arr.every(item => typeof(item) === 'number'));


// reduce
// используется для группировки массива

const numbers = [1, 2, 3, 4, 10, 1, 6,];

// принимает коллбек с двумя аргументами:
// первый - для результата (аккумулятор) (изначально равно первому элементу, 
// но мы можем задать его начальное значение вторым аргументом после коллбека)
// второй - элемент массива (если не задано начальное значение аккумулятора, 
// в первой итерации второй аргумент - второй элемент массива)
// коллбек возвращает новое значение sum после каждого элемента и итерации

const sumOfNums = numbers.reduce((sum, number) => sum + number, 3);
console.log(sumOfNums);

const words = ['apple', 'pear', 'plum'];

// причем если не задано начальное значение аккумулятора, вторым аргументом после колллбека в первой итерации 
// на место аккумулятора подставляется первый элемент, а на word - второй
// поэтому в начале нет запятой
const allWords = words.reduce((sum, word) => `${sum}, ${word}`);
console.log(allWords);


const obj = {
    ivan: 'person',
    anna: 'person',
    dog: 'animal',
    cat: 'animal'
};
// Entries позволяет преобразовать объект в многомерный массив
const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);


console.log(newArr);