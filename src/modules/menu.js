const menu = () => {
    const clubsList = document.querySelector('.clubs-list'),
        widthWindow = document.documentElement.clientWidth,
        heightWindow = document.documentElement.clientHeight,
        menuButton = document.querySelector('.hidden-large'),
        menuList = document.querySelector('.hidden-small'),
        topMenu = document.querySelector('.top-menu'),
        popupMenu = document.querySelector('.popup-menu');

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

    window.addEventListener('scroll', () => {
        if (pageYOffset > heightWindow) {
            topMenu.style.cssText = `position: fixed; `;
            document.body.style.cssText = 'margin-top: 60px';
        }
    });

    menuButton.addEventListener('click', () => {
        popupMenu.style.display = 'flex';

        popupMenu.addEventListener('click', event => {
            const target = event.target;
            console.log(target);
            if (target.closest('.close-menu-btn') || target.closest('.scroll')) {
                popupMenu.style.display = 'none';
            }
        })
    });
    
};

export default menu;
