'use strict';
// Без аргументов Date возвращает текущую дату и время
// Можем засунуть строку (допустим '2017-05-31')
// Можем засунуть дату аргументами(двумя, тремя и т д., допустим (2017, 4, 31)); при этом месяц считается с нуля
// Если аргумент всего один, то он преобразовывается в кол-во миллисекунд (999999)
// при этом отсчет начинается с 1 января 1970 года, и если нужна дата раньше, то пишем отрицательные (-99999)

let now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate()); //текущее число в месяце
console.log(now.getDay()); // какой по счету день недели, где воскресенье - день 0
// То же самое для часов, минут, секунд и т д

// Можем получить разницу в минутах между настоящим часовым поясом и UTC
console.log(now.getTimezoneOffset());

// Можем получить кол-во миллисекунд, прошедших с 1 января 1970
console.log(now.getTime());

// Чтобы установить время, мы везде где возможно get меняем на set
console.log(now.setHours(18));
console.log(now); // в консоли vscode время может перевестись в UTC, а в браузере норм

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; // возведение в степень
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`);

