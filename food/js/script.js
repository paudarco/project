document.addEventListener('DOMContentLoaded', () => {

    // tabs
    const tabsContent = document.querySelectorAll('.tabcontent'),
          tabs = document.querySelectorAll('.tabheader__item'),
          tabsContainer = document.querySelector('.tabheader');
    
    function hideTabContent() {
        tabsContent.forEach(tab => {
            tab.classList.add('hide');
            tab.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsContainer.addEventListener('click', event => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, i) => {
                if(tab == target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // timer
    const deadline = '2021-12-15';

    function getTImeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();
        
        function updateClock() {
            const timeRemaining = getTImeRemaining(endtime);

            days.textContent = getZero(timeRemaining.days);
            hours.textContent = getZero(timeRemaining.hours);
            minutes.textContent = getZero(timeRemaining.minutes);
            seconds.textContent = getZero(timeRemaining.seconds);

            if (timeRemaining.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal

    const modalBtns = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

    function showModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            showModal();
        });
    });

    modal.addEventListener('click', event => {
        const target = event.target;
        if (target === modal || target === modalCloseBtn) {
            closeModal();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.code == 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(showModal, 15000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);


    // Food menu
    class FoodMenuItem {
        constructor(src, alt, title, description, price) {
            this.src = `./img/tabs/${src}`;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
        }

        load(selector) {
            // block.querySelector('img').setAttribute('alt', this.alt);
            // block.querySelector('img').setAttribute('src', this.src);
            // block.querySelector('.menu__item-subtitle').textContent = this.title;
            // block.querySelector('.menu__item-descr').textContent = this.description;
            // block.querySelector('.menu__item-total span').textContent = this.price;

            const parent = document.querySelector(selector);
            const element = document.createElement('div');

            element.innerHTML = `<div class="menu__item">
            <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>`;

            parent.append(element);
        }
    }

    // const food1 = new FoodMenuItem(
    //     'Фитнес', 
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     229
    // );
    // const food2 = new FoodMenuItem(
    //     'Премиум', 
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     550
    // );
    // const food3 = new FoodMenuItem(
    //     'Постное',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     430
    // );

    const foodItems = [
        new FoodMenuItem(
            'vegy.jpg',
            'vegy',
            'Фитнес', 
            'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            229
        ),
        new FoodMenuItem(
            'elite.jpg',
            'elite',
            'Премиум', 
            'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            550
        ),
        new FoodMenuItem(
            'post.jpg',
            'post',
            'Постное',
            'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
            430
        )
    ];

    foodItems.forEach(item => {
        item.load('.menu .container');
    });
    
});