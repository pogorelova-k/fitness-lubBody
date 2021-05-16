const calculate = () => {
    const promoInput = document.querySelector('input[name="promo"]'),
        promoCod = 'ТЕЛО2019',
        totalPrice = document.getElementById('price-total'),
        cardOrder = document.getElementById('card_order'),
        times = cardOrder.querySelector('.time'),
        inputs = cardOrder.querySelectorAll('input');
    let selectClub = 'mozaika';

    if (totalPrice) {
        for (let i = 0; i < 7; i++) {
            const input = inputs[i],
                inputsTime = times.querySelectorAll('input');

            input.addEventListener('input', () => {
                // отслеживаем какой клуб выбран
                if (input.value === 'mozaika') {
                    selectClub = 'mozaika'
                } else if (input.value === 'schelkovo') {
                    selectClub = 'schelkovo';
                } 

                // изменяем total price в завиисмости от выбранного клуба
                inputsTime.forEach(input => {
                    if (input.checked) {
                        if (selectClub === 'mozaika') {
                            if (input.value === '1') {
                                totalPrice.textContent = 1999;
                            } else if (input.value === '6') {
                                totalPrice.textContent = 9900;
                            } else if (input.value === '9') {
                                totalPrice.textContent = 13900;
                            } else {
                                totalPrice.textContent = 19900;
                            }
                        } else {
                            if (input.value === '1') {
                                totalPrice.textContent = 2999;
                            } else if (input.value === '6') {
                                totalPrice.textContent = 14990;
                            } else if (input.value === '9') {
                                totalPrice.textContent = 21990;
                            } else {
                                totalPrice.textContent = 24990;
                            }
                        }
                    }
                });

                // проверяем промокод и применяем скидку 30%
                if (promoInput.value.toUpperCase() === promoCod.toUpperCase() ) {
                    totalPrice.textContent = Math.ceil(Number(totalPrice.textContent) * 0.7);
                }
            });
        }
    }
};

export default calculate;