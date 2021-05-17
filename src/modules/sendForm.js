const sendForm = () => {
    const url = './server.php',
        erorrMessage = `<h4>Извините</h4>
            <p>Что-то пошло не так...</p><button class="btn close-btn">OK</button>`,
        successMesage = `<h4>Спасибо!</h4>
            <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p><button class="btn close-btn">OK</button>`,
        loadMessage = `<div class="sk-flow sk-center">
            <div class="sk-flow-dot"></div>
            <div class="sk-flow-dot"></div>
            <div class="sk-flow-dot"></div>
        </div>`,
        forms = document.querySelectorAll('form'),
        statusMessage = document.createElement('div');

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
        let count = 0;
        // отправка формы
        form.addEventListener('submit', event => {
            const formContent = form.innerHTML,
            // получаем значение из всех инпутов формы у которых есть атрибут name
                formData = new FormData(form),
                body = {},
                inputRadio = form.querySelectorAll('input[type="radio"]'),
                inputCheck = form.querySelectorAll('input[type="checkbox"]'),

                spanAllert = document.createElement('span');

            event.preventDefault();
            spanAllert.classList.add('span-allert');
            spanAllert.textContent = 'Обязательное поле';

            // модальное окно после отправки формы
            const modalThanks = (message) => {
                const thanks = document.getElementById('thanks');

                thanks.querySelector('.form-content').innerHTML = message;
                thanks.style.display = 'block';
                statusMessage.textContent = ''; 
                thanks.addEventListener('click', event => {
                    const target = event.target;

                    // модальное окно thanks после отправки формы
                    if (!target.closest('.form-content') || target.closest('.close-btn')) {
                        thanks.style.display = 'none';
                        form.innerHTML = formContent;
                    }
                });
            };

            // функция для отображения сообщения пользователю об успешной отправки
            const outputData = () => modalThanks(successMesage);

            // функция для отображения ошибки пользователю и в консоль
            const errorData = (error) => {
                modalThanks(erorrMessage);
                console.error(error);
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

            const submitForm = () => {
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

                postData(body)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200');
                        }
                        outputData();
                    })
                    // .catch(modalThanks(erorrMessage))
                    .catch(error => errorData(error))
                    .finally(deleteInputFormValue);
            };

            const allert = input => {
                input.nextSibling.appendChild(spanAllert);
                spanAllert.style.display = 'block';
                setTimeout(() => {
                    spanAllert.style.display = 'none';
                }, 2000);
            }

            const hideAllert = input => {
                input.addEventListener('change', () => {
                    spanAllert.style.display = 'none';
                });
            };

            inputRadio.forEach(input => {
                if (!input.checked) {
                    count++;
                }
            });

            if (count === 2) {
                inputRadio.forEach(input => {
                    spanAllert.textContent = 'Выберите клуб'
                    allert(input);
                    hideAllert(input);
                });
                count = 0;
            } else if (count === 1) {
                submitForm();
                count = 0;
            }

            inputCheck.forEach(input => {
                if (!input.checked) {
                    allert(input);
                    hideAllert(input);
                } else {
                    submitForm();
                }
            });
        });
    });
};

export default sendForm;
