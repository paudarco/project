'use strict';

const heading = document.querySelector('h1');

// Создаем тег div и помещаем его в переменную
const div = document.createElement('div');

// заставляем div отобразиться в конце блока body
document.body.append(div);

// добавляем диву классы black и kick
div.classList.add('black', 'kick');

const btn = document.createElement('button');

// создаем текст
const text = document.createTextNode('Нажми');

// заставляем кнопку отобразиться в конце блока div
document.querySelector('div').append(btn);

// добавляем кнопке некоторые инлайн стили 
btn.style.cssText = 'width: 200px; height: 200px; border-radius: 100px;';

// добавляем текст в конец кнопки (можно обойтись и без createTextNode)
document.querySelector('button').append(document.createTextNode('ya sosal'));

// добавляем тот же div в начало body. причем prepend и append работают только с одним элементом и не создают копий
document.body.prepend(div);

// работают аналогично с append и prepend, только добавляют не вовнутрь, а рядом (после или перед)
heading.after(div);
heading.before(div);

// если хотим удалить элемент со страницы, то есть remove. работает со всеми элементами, а не только из js
// div.remove();


const lorem = document.createElement('h2');

lorem.style.cssText = 'font-size: 30px; font-family: Calibri; color: red;';

document.body.append(lorem);

document.querySelector('h2').append('Я такой сильный, что сейчас наложу себе в штаны!');

// replaceWith - чтобы заменить один элемент другим (а не поменять местами!). 
// btn - то, что хотим заменить, а Lorem - то, на что хотим заменить
// btn.replaceWith(lorem);



const div2 = document.createElement('div');

document.body.append(div2);
div2.classList.add('how');
div2.style.cssText = 'background-color: black; width: 200px; height: 100px; color: white; text-align: center; display:table-cell;';

// чтобы добавить какой то код внутрь блока, используем innerHTML
div2.innerHTML = '<h1 style="vertical-align: middle;">я тебя люблю</h1>';

// если нужен только текст, то textContent. при этом innerHTML отключается
// div2.textContent = 'пошел нахуй';\

// "вставить смежный html" вставляет в нужное место div2 какой-то html код
// beforebegin, afterbegin, beforeend, afterend
div2.insertAdjacentHTML('beforebegin', '<h1>где моя рыба?</h1>');

div2.getElementsByTagName('h1')[0].style.color = 'wheat';


