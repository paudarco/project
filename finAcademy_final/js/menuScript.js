const menuTrigger = document.querySelector('.header__burger__menu');
const headerMenu = document.querySelector('.header__menu');

menuTrigger.addEventListener('click', (event) => {
    if (!menuTrigger.classList.contains('active')) {
        menuTrigger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        document.body.style.position = 'fixed';
    } else {
        document.body.style.position = 'static';
        menuTrigger.classList.toggle('active');
        headerMenu.classList.toggle('active');
    }
});

headerMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (headerMenu.classList.contains('active')) {
            headerMenu.classList.toggle('active');
            menuTrigger.classList.toggle('active');
            document.body.style.position = 'static';
        }
    });
});