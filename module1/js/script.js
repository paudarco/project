'use strict';

const person = {
    name: 'Alex',
    tel: '+78273740127',
    parents: {
        mom: 'Olga',
        dad: 'Kolya'
    }
};

// stringify - для отправки на сервер
// parse - для выгрузки из сервера

console.log(JSON.parse(JSON.stringify(person)));

// С помощью JSON можно создавать глубокие копии объектов

const personCopy = JSON.parse(JSON.stringify(person));
personCopy.parents.mom = 'Yulia';

console.log(personCopy);
console.log(person);