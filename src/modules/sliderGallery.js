const sliderGallery = () => {
    const slider = document.querySelector('.gallery-slider'),	
        slide = slider.querySelectorAll('.slide'),
        dots = document.querySelector('.slider-dots');

    //Текущий номер слайда
    let currentSlide = 0,
        interval;

    // добавляем dots
    slide.forEach(() => {
        const li = document.createElement('li'),
            btn = document.createElement('button');
        li.classList.add('dot');
        li.append(btn);
        dots.append(li);
        dots.firstChild.classList.add('slick-active');
    });

    const dot = document.querySelectorAll('.dot');

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    // автоматическое перелистывание слайдера autoPlay
    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'active');
        prevSlide(dot, currentSlide, 'slick-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'active');
        nextSlide(dot, currentSlide, 'slick-active');
    };

    // Запуск слайдера
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    // Остановка слайдера
    const stopSlide = () => {
        clearInterval(interval);
    };

    // клик по слайдеру
    slider.addEventListener('click', event => {
        event.preventDefault();

        const target = event.target;

        //клик только по элементам премещения слайдов
        if (!target.matches('.gallery-arrow, .dot, .dot button')) {
            return;
        }
        
        prevSlide(slide, currentSlide, 'active');
        prevSlide(dot, currentSlide, 'slick-active');

        if (target.matches('.gallery-next')) {
            currentSlide++;
        } else if (target.matches('.gallery-prev')) {
            currentSlide--;
        } else if (target.closest('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target.closest('.dot')) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'active');
        nextSlide(dot, currentSlide, 'slick-active');
    });

    // при наведении на слайдер
    slider.addEventListener('mouseover', event => {
        if (event.target.matches('.gallery-arrow') ||
        event.target.matches('.dot')) {
            stopSlide();
        }
    });

    // наведение вне слайдера
    slider.addEventListener('mouseout', event => {
        if (event.target.matches('.gallery-arrow') ||
        event.target.matches('.dot')) {
            startSlide();
        }
    });

    startSlide(1500);
};

export default sliderGallery;