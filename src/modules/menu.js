const menu = () => {
    const clubsList = document.querySelector('.clubs-list'),
        widthWindow = document.documentElement.clientWidth,
        menuButton = document.querySelector('.hidden-large'),
        menuList = document.querySelector('.hidden-small');

    // Выбрать клуб-выпадающее меню
    document.addEventListener('click', event => {
        const target = event.target.closest('.club-select');
        if (target) {
            clubsList.querySelector('ul').classList.toggle('show-club-list');
        } else {
            clubsList.querySelector('ul').classList.remove('show-club-list');
        }
    });

    window.addEventListener('resize', () => {
        if (widthWindow < 768) {
            menuButton.style.display = 'block';
            menuList.style.display = 'none';
        }
    });
    
};

export default menu;
