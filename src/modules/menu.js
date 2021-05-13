const menu = () => {
    const clubsList = document.querySelector('.clubs-list');

    // Выбрать клуб-выпадающее меню
    document.addEventListener('click', event => {
        const target = event.target.closest('.club-select');
        if (target) {
            clubsList.querySelector('ul').classList.toggle('show-club-list');
        } else {
            clubsList.querySelector('ul').classList.remove('show-club-list');
        }
    });
};

export default menu;
