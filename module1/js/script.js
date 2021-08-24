'use strict';

const inputRUB = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');

inputRUB.addEventListener('input', () => {
    // При вводе текста создаем запрос
    const request = new XMLHttpRequest();

    // НАСТРОЙКА ЗАПРОСА
    // open() собирает настройки, которые помогут в будущем сделать запрос
    // Первый аргумент - метод, используемый для запроса (get или post)
    // Второй - путь к серверу (к файлу базы данных)
    // Третий - отвечает за ассинхронность (ajax-запросы априори ассинхронный код, но это изменяемо) (необязательный)
    // Четвертый и пятый - логин и пароль (необязательные)
    // request.open(method, url, async, login, pass);
    request.open('GET', './js/current.json');

    // Как именно серверу читать запрос? setRequestHeader описывает запрос
    // Первый аргумент - обозначение, что есть тип (ключ)
    // Второй - какой именно это тип. В нашем случае - application/json (значение)
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
    // Теперь отправляем запрос с помощью мтеода send()
    request.send();


    // Свойства XMTHttpRequest: 
    // status - статус запроса (его код) (404, 0, 200 и т.д.)
    // statusText - статус запроса (его наименование в виде текста)
    // response - ответ от сервера на запрос (также есть responseText)
    // readyState - содержит текущее состояние запроса (всего 5 состояний) 
    // https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState

    // События запроса
    // requeststatechange отслеживает статус готовности запроса в данный момент и вызывает при изменении readystate
    // при этом условие будет   if (request.readyState === 4 && request.status === 200)
    // load срабатывает только тогда, когда запрос полностью загрузился (при этом readystate не отслеживается)
    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputRUB.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = 'Что-то пошло не так';
        }
    });
});