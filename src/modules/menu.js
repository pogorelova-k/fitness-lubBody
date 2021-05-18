const menu = () => {
    const clubsList = document.querySelector('.clubs-list'),
        widthWindow = document.documentElement.clientWidth,
        menuButton = document.querySelector('.hidden-large'),
        menuList = document.querySelector('.hidden-small'),
        topMenu = document.querySelector('.top-menu'),
        popupMenu = document.querySelector('.popup-menu');

    totop.style.display = 'none';

    // Выбрать клуб-выпадающее меню
    document.addEventListener('click', event => {
        const target = event.target.closest('.club-select');
        if (target) {
            clubsList.querySelector('ul').classList.toggle('show-club-list');
        } else {
            clubsList.querySelector('ul').classList.remove('show-club-list');
        }
    });

    // скрываем меню и добавляем бургер меню
    window.addEventListener('resize', () => {
        if (widthWindow < 768) {
            menuButton.style.display = 'block';
            menuList.style.display = 'none';
        }
    });

    // скрол на один высоту первого блока
    window.addEventListener('scroll', () => {
        if (pageYOffset > 700) {
            // добавляем кнопку top up
            totop.style.display = 'block';
            // фиксируем меню
            if (document.documentElement.clientWidth < 768) {
                topMenu.style.cssText = `position: fixed; `;
                document.body.style.cssText = 'margin-top: 60px';
            } else {
                topMenu.style.cssText = `position: relative; `;
                document.body.style.cssText = 'margin-top: 0px';
            }
        } else {    
            totop.style.display = 'none';
            topMenu.style.cssText = `position: relative; `;
            document.body.style.cssText = 'margin-top: 0px';
        }
    });

    // открытие и закрытие меню
    menuButton.addEventListener('click', () => {
        popupMenu.style.display = 'flex';

        popupMenu.addEventListener('click', event => {
            const target = event.target;
            if (target.closest('.close-menu-btn') || target.closest('.scroll')) {
                popupMenu.style.display = 'none';
            }
        })
    });
    
};

export default menu;
