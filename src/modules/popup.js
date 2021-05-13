const popup = () => {
    const freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        gift = document.querySelector('.fixed-gift'),
        giftForm = document.getElementById('gift');

    document.addEventListener('click', event => {
        const target = event.target;

        // модальное окно - записаться на бесплатный визит
        if (target.closest('.open-popup')) {
            freeVisitForm.style.display = 'block';
        } else if (!target.closest('.form-content')) {
            freeVisitForm.style.display = 'none';
        }

        // модальное окно - перезвоните мне
        if (target.closest('header .callback-btn')) {
            callbackForm.style.display = 'block';
        }   else if (!target.closest('.form-content')) {
            callbackForm.style.display = 'none';
        }

        if  (target.closest('.fixed-gift') && giftForm) {
            giftForm.style.display = 'block';
            gift.style.display = 'none';
        } else if (!target.closest('.form-content') && giftForm) {
            giftForm.style.display = 'none';
        } else {
            return;
        }
    });

};

export default popup;
