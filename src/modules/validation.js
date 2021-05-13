import maskPhone from "./maskPhone";

const validator = () => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('input', () => {

            // Валидация поля Ваше имя
            if (input.getAttribute('name') === 'user_name') {
                if (input.value.length < 51) {
                    // разрешен только ввод кириллицы в любом регистре и пробела
                    input.value = input.value.replace((/[^а-яА-Я-\s]/gi), '');
                } else {
                    // удаляется строка если она больше 50
                    input.value = input.value.substring(0, 50);
                }

                // Первая буква заглавная, остальные прописные
                input.value = input.value.replace(/(|\s+)\S/g, val => val.toLowerCase());
                input.value = input.value.replace(/(^|\s)\S/g, val => val.toUpperCase());
            }

            // Валидация поля Промокод
            if (input.getAttribute('name') === 'promo') {
                // разрешен только ввод кириллицы в любом регистре и цифр
                input.value = input.value.replace((/[^а-яА-Я\d]/gi), '');
            }
        });
    });
};

// Маска телефона
maskPhone('input[name="phone"]', '+7 (___) ___-__-__');

export default validator;