'use strict';

// Получение всего тега html (т.е. всей страницы)
console.log(document.documentElement);

// Обращение к head
console.log(document.head);

// Получение всех дочерних элементов body
console.log(document.body.childNodes);

// Получение первого и последнего дочернего элемента
console.log(document.body.firstChild);
console.log(document.body.lastChild);

// Обращение к родителю. Чтобы пойти выше, просто допишем еще .parentNode
console.log(document.querySelector('button').parentNode);

// Обращение к элементу по его CSS-селектору атрибуту
console.log(document.querySelector('[data-current="3"'));

// Получение предыдущего и следующего соседа
console.log(document.querySelector('div').previousSibling);
console.log(document.querySelector('div').nextSibling);

// Все эти команды получают именно узлы, а не элементы. 
// Чтобы получить именно элемент, нужно дописать Element в одном месте 
// или заменить Node на Element. Например:
console.log(document.body.firstElementChild);
console.log(document.querySelector('button').parentElement);
console.log(document.querySelector('div').previousElementSibling);

// Но если мы хотим среди узлов найти элемент, можем проверить каждый узел на имя
// Правда комментарии в этом примере не будут считаться текстовыми узлами
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}