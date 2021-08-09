const rus = {
    "header": [
        "Физическим лицам",
        "Прдеприятиям",
        "Инвестиции",
        "Блог",
        "О компании"
        ],
    "title": "Финакадемия",
    "description": "Консалтинговая компания, специализирующаяся на предоставлении организациям и частным лицам финансовых услуг в качестве агрегатора.",
    "short_description": "Генератор оптимальных финансовых решений",
    "about_area": {
        "mission": {
            "title": "Наша миссия",
            "description":"Обеспечить простой и удобный доступ всем желающим к любому финансовому продукту на любом рынке"
            },
        "principles": {
            "title": "Наши принципы",
            "description": "<li>Открытость</li><li>Отвественность</li><li>Индивидуальный подход</li>"
            },
        "values": {
            "title": "Наши ценности",
            "description": "Важнейшая ценность для нас - это наши клиенты. Их интересы, потребности, их развитие и рост — залог нашего успеха"
            },
        "team": {
            "title": "Наша команда", 
            "description": "В команде ООО \"ФИНАКАДЕМИЯ\" собрались как профессионалы с многолетним опытом работы на банковском и финансовом рынке, так и молодые перспективные специалисты",
            "button": "Познакомиться с нами"
            }
        },
    "partners": [
        {
            "name": "Freedom Finance",
            "description": "Депозиты, кредитование <br> Инвестирование, валютные операции"
        },
        {
            "name": "Альфа-банк",
            "description": "Кредитование бизнеса под льготный процент"
        },
        {
            "name": "Севергазбанк",
            "description": "Банковские гарантии"
        }
        ],
    "products": [
        {
            "title": "Участие в IPO",
            "description": "Без статуса квалифицированного инвестора"
        },
        {
            "title": "Кредит для бизнеса 6% годовых",
            "description": "от 50 млн. рублей сроком до 15 лет"
        }
        ],
    "news": [
        {
            "title": "Facebook и Instagram вложат более $1 млрд в создателей контента",
            "description": "Первая программа будет поощрять авторов контента в сервисе коротких видео Reels в Instagram.",
            "from_partner": true
        },
        {
            "title": "Karma - краудлендинговая платформа", 
            "description": "Платформа, на которой можно приунможить свой капитал и привлечь инвестиции",
            "from_partner": false
        },
        {
            "title": 'Пресс релиз "Регионы - устойчивое развитие "',
            "description": "Всероссийский конкурс по программе господдержки", 
            "from_partner": false
        }
        ],
    "footer": [
        {
            "social_media": [
                "instagram",
                "facebook"
                ]
        },
        {
            "phone": "+74951282028"
        },
        {
            "email":"info@finakademiya.ru"
        },
        {
            "company":"Финакадемия ООО"
        }
    ]
    };

const eng = {
    "header": [
        "Private",
        "Business",
        "Investments",
        "Blog",
        "About"
        ],
    "title": "Finakademiya",
    "description": "Consulting company specializing in providing organizations and individuals with financial services as an aggregator.",
    "short_description": "Optimal Financial Solutions Generator",
    "about_area": {
        "mission": {
            "title": "Our mission",
            "description": "Provide easy and convenient access for everyone to any financial product in any market"
            },
        "principles": {
            "title": "Our princeples",
            "description": "<li>Openness</li><li>Responsibility</li><li>Individual approach</li>"
            },
        "values": {
            "title": "Our values",
            "description": "Most important value for us is our customers. Their interests, their needs, their development and growth are the key to our success"
            },
        "team": {
            "title": "Our team",
            "description": "The FINAKADEMIA LLC team includes professionals with many years of experience in the banking and financial market, as well as young promising specialists.",
            "button": "Meet us"
            }
        },
    "partners": [
        {
            "name": "Freedom Finance",
            "description": "Deposits, crediting <br> Investing, currency operations"
        },
        {
            "name": "Alfa Bank",
            "description": "Lending to businesses at preferential interest rates" 
        },
        {
            "name": "Severgazbank",
            "description": "Bank guarantees"
        }
        ],
    "products": [
        {
            "title": "IPO participation", 
            "description":"Without qualified investor status"
        },
        {
            "title": "Loan for business 6% per annum", 
            "description": "from 50 million rubles for up to 15 years"
        }
        ],
    "news": [
        {
            "title": "Facebook and Instagram will invest more than $1 billion in content creators",
            "description":" The first program will reward content creators on Instagram's short video service Reels",
            "from_partner": true
        },
        {
            "title": "Karma - crowdsourcing platform",
            "description": "A platform on which you can raise capital and investment",
            "from_partner": false
        },
        {
            "title": "Press release \"Regiony - Ustoychivoe Razvitie\" ",
            "description": "All-Russian competition on the program of state support",
            "from_partner": false
        }
        ],
    "footer": [
        {
            "social_media": [
                "instagram", 
                "facebook"
                ]
        },
        {
            "phone": "+74951282028"
        },
        {
            "email": "info@finakademiya.ru"
        },
        {
            "company": "Finakademiya LLC"
        }
    ]
    };

const header = document.querySelector('header'),
      intro = document.querySelector('.intro'),
      about = document.querySelector('.about'),
      partners = document.querySelector('.partners'),
      products = document.querySelector('.products'),
      news = document.querySelector('.news'),
      footer = document.querySelector('footer');

const langButton = header.querySelectorAll('.rus');

const changeLanguage = (lang) => {
    header.querySelector('.header__logo a span').textContent = lang['title'].slice(0, 3);
    header.querySelector('.header__logo a').lastChild.textContent = lang['title'].slice(3, lang['title'].length);
    header.querySelectorAll('.header-menu__list a').forEach((link, i) => {
        link.textContent = lang['header'][i];
    });
    langButton.forEach(item => {
        if (item.classList.contains('active')) {
            item.textContent = 'RU';
            item.classList.toggle('active');
        } else {
            item.textContent = 'EN';
            item.classList.toggle('active');
        }
    });

    intro.querySelector('.intro__title').textContent = lang['short_description'];
    intro.querySelector('.intro__text').textContent = lang['description'];

    Object.keys(lang['about_area']).forEach(key => {
        about.querySelector(`.about__${key} .title`).textContent = lang['about_area'][key]['title'];
        if (key == 'principles') {
            about.querySelector(`.about__${key} ul.text`).innerHTML = lang['about_area'][key]['description'];
        } else {
            about.querySelector(`.about__${key} .text`).innerHTML = lang['about_area'][key]['description'];
        }
    });
    about.querySelectorAll('button').forEach(btn => {
        btn.textContent = lang['about_area']['team']['button'];
    });

    if (!langButton[0].classList.contains('active')) {
        partners.querySelector('.partners__title').textContent = 'Our partners';
    } else {
        partners.querySelector('.partners__title').textContent = 'Наши партнеры';
    }

    partners.querySelectorAll('.partners__item').forEach((item, i) => {
        item.querySelector('.partners__item__title').textContent = lang['partners'][i]['name'];
        item.querySelector('.partners__item__text').innerHTML = lang['partners'][i]['description'];
    });

    products.querySelectorAll('.product').forEach((item, i) => {
        item.querySelector('.title').textContent = lang['products'][i]['title'];
        item.querySelector('.text').textContent = lang['products'][i]['description'];
    });

    if (!langButton[0].classList.contains('active')) {
        news.querySelector('h1.title').textContent = 'News';
    } else {
        news.querySelector('h1.title').textContent = 'Новости';
    }

    news.querySelectorAll('.news__block').forEach((block, i) => {
        if (!langButton[0].classList.contains('active')) {
            block.querySelector('span.text').textContent = 'From partner';
        } else {
            block.querySelector('span.text').textContent = 'От партнера';
        }

        block.querySelector('.news__title').textContent = lang['news'][i]['title'];
        block.querySelector('p.text').textContent = lang['news'][i]['description'];
    });

    footer.querySelector('.company__name').textContent = lang['footer'][3]['company'];
};

langButton.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) {
            changeLanguage(eng);
        } else {
            changeLanguage(rus);
        }
    });
});