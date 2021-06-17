'use strict';

let num = 50;

(num === 60) ? (
    console.log('ok!'),
    num = 50
) : (num === 50) ? (
    console.log('не оk!'),
    num = 60
) : (
    console.log('nuuu hz')
);

// то же самое, что и 
if (num === 60) {
    console.log('ok!');
} else {
    console.log('не ok!');
}

num = 50;

//switch проверяет на строгое равенство (num === 50)
switch (num) {
    case 50:
        console.log('very ok!');
        break;
    case 60:
        console.log('not seems so good');
        break;
    default:
        console.log('idkhbtfm');
}

let number = 50;

while (number < 55) {
    console.log(++number);
}

for (let i = 1; i < 8; i++) {
    console.log(i);
}