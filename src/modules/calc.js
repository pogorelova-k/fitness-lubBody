const calculate = () => {
    const promoInput = document.querySelector('input[name="promo"]'),
        promoCod = 'ТЕЛО2019',
        totalPrice = document.getElementById('price-total');

    if (promoInput) {
        promoInput.addEventListener('input', () => {
            if (promoInput.value.toUpperCase() === promoCod.toUpperCase() ) {
                totalPrice.textContent = Math.ceil(Number(totalPrice.textContent) * 0.7);
            }
        });
    }


};

export default calculate;