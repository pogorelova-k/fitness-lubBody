const sendForm = () => {
    const url = './server.php',
        erorrMessage = 'Что-то пошло не так...',
        successMesage = 'Спасибо! Мы скоро с вами свяжемся!',
        loadMessage = `<div class="sk-flow sk-center">
            <div class="sk-flow-dot"></div>
            <div class="sk-flow-dot"></div>
            <div class="sk-flow-dot"></div>
        </div>`,
        forms = document.querySelectorAll('form'),
        statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; padding-top: 40px;';

    // функция отправки данных
    const postData = body => fetch(url, {
        method: 'POST', // отправка данных на сервер
        headers: {
            'Content-Type': 'application/json', //отправляем данные в формате json строки
        },
        body: JSON.stringify(body) // данные из инпутов в формате json
    });

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input');

        // отправка формы
        form.addEventListener('submit', event => {
            const formContent = form.innerHTML,
            // получаем значение из всех инпутов формы у которых есть атрибут name
                formData = new FormData(form),
                body = {};

            event.preventDefault();
            form.textContent = '';

            if (form.id === 'card_order') {
                statusMessage.style.cssText += 'color: #000;';
                
            } else {
                statusMessage.style.cssText += 'color: #fff;';
            }

            form.append(statusMessage);
            statusMessage.innerHTML = loadMessage;

            // данные из formData присваиваем body
            formData.forEach((val, key) => {
                body[key] = val;
            });

            // функция для отображения сообщения пользователю
            const outputData = (time = 3000) => {
                statusMessage.textContent = successMesage;
                setTimeout(() => {
                    statusMessage.textContent = '';
                    form.innerHTML = formContent;
                }, time);
            };

            // функция для отображения ошибки пользователю и в консоль
            const errorData = (error, time = 3000) => {
                statusMessage.textContent = erorrMessage;
                console.error(error);
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, time);
            };

            // функция для очищения полей
            const deleteInputFormValue = () => {
                inputs.forEach(item => {
                    item.value = '';
                    if (item.type === 'checkbox') {
                        item.checked = false;
                    }
                });
            };

            postData(body)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    outputData();
                })
                .catch(error => errorData(error))
                .finally(deleteInputFormValue);
        });
    });
};

export default sendForm;
