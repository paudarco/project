'use strict';

// to  String

// 1) Устаревший формат
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) Конкатенация
console.log(typeof(5 + ''));


// to Number

// 1)Устаревший
console.log(typeof(Number('4')));

// 2) Унарный плюс
console.log(typeof(+'5'));

// 3) parseInt берет первое попавшееся число в строке в 10 системе счисления
console.log(parseInt('15px', 10));


// to Boolean

// 0, '', null, undefined, NaN - все это равняется false

// 1) Устаревший
console.log(typeof(Boolean('4')));

// 2) Два знака отрицания
console.log(typeof(!!'44444'));

console.log(1 && 2);