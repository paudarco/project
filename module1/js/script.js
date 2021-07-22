'use strict';

let a = [3, 4, 5],
    b = a;

b[2] = 3;

console.log(a);
console.log(b);


function copy(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy(numbers);
// newNumbers['c']['x'] = 2;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));//assign соединяет два объекта

let clone = Object.assign({}, add);

clone.d = 2;

console.log(add);
console.log(clone);

let oldArray = ['a', 'b', 'c'];
let newArray = oldArray.slice();

newArray[1] = 'asasdasd';
console.log(oldArray);
console.log(newArray);


let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk'];


// многоточие ... это spread оператор

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);