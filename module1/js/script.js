'use strict';

// console.log('Запрос данных...');


// Promise - это специальный объект, который связывает "создающий" и "потребляющий" код
// Функция внутри промиса при создании называется исполнитель (executor)
// Промис может находиться в трех состояниях:
// -ожидание (pending)
// -исполнено (fulfilled)
// -отклонено (rejected)

// Resolve нужен для кода без ошибок, reject - На случай ошибки
// resolve вызывается через then, а reject - через catch (добавляется куда)
// finally выведется при любом исходе
// resolve и reject могут принимать в себя только один аргумент (или ноль)


// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);
//     },2000);
// });


// then может принимать в себя две функции: одну - для resolve, вторую - для reject
// при этом вид будет такой: req.then(result => console.log(result), error => console.error(error))
// если указана одна - это для resolve

// catch принимает в себя только функцию с ошибкой error,
// так что then(null => {}, error => {}) то же самое, что и catch(error => {})

// finally сработает в любом случае
// но он не имеет аргументов, и предназначен для выполнения каких-то общих действий
// он пропускает результат или ошибку дальше, к последующим обработчикам

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';

//             reject();
//         }, 2000);
//     });
// }).then((data) => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка');
// }).finally(() => {
//     console.log('finally');
// });


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
}

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all принимает в себя массив с промисами
// он ждет выполнения всех промисов в массиве и только потом выполняет then
// но если хотя бы один промис отклонен, all тоже не выполнится
// аналог - allSettled (который вернет массив с результатами всех промиссов и выполнится в любом случае)
// так что можем заменить им 48 и 49 строки

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

// race (гонка) выполняет then когда хотя бы один промис отработал
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});



const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('1 этап');

    },2000);
});