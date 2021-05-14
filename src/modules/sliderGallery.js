const sliderGallery = () => {
    const slider = document.querySelector('.gallery-slider'),	
        slide = slider.querySelectorAll('.slide'),
        dots = document.querySelector('.portfolio-dots');

    //Текущий номер слайда
    let currentSlide = 0,
        interval;

    slide.forEach(() => {
        const li = document.createElement('li');
        li.classList.add('dot');
        dots.append(li);
        dots.firstChild.classList.add('dot-active');
    });

    const	dot = document.querySelectorAll('.dot');

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    // автоматическое перелистывание слайдера autoPlay
    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'active');
        // prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'active');
        // nextSlide(dot, currentSlide, 'dot-active');
    };

    // Запуск слайдера
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    // Остановка слайдера
    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', event => {
        event.preventDefault();

        const target = event.target;

        prevSlide(slide, currentSlide, 'active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.closest('.prev')) {
            currentSlide++;
        } else if (target.closest('.next')) {
            currentSlide--;
        } 

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', event => {
        if (event.target.matches('.gallery-btn')) {
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', event => {
        if (event.target.matches('.gallery-btn') ||
        event.target.matches('.dot')) {
            startSlide();
        }
    });

    startSlide(1500);
};

export default sliderGallery;