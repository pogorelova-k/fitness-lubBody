'strict';

import menu from "./modules/menu";
import popup from "./modules/popup";
import sendForm from "./modules/sendForm";
import mainSlider from "./modules/mainSlider";
import validator from "./modules/validation";
import SliderCarousel from './modules/sliderCarousel';
import sliderGallery from "./modules/sliderGallery";
import calculate from "./modules/calc";
import scroll from "./modules/scroll";

const carousel = new SliderCarousel({
    main: '.services-wrapper',
    wrap: '.services-slider',
    responsive: [{
        breakpoint: 1280,
        slidesShow: 4
    },{
        breakpoint: 1024,
        slidesShow: 3
    },
    {
        breakpoint: 768,
        slidesShow: 2
    },
    {
        breakpoint: 576,
        slidesShow: 1
    }],
});

menu();
popup();
sendForm();
validator();
mainSlider();
carousel.init();
sliderGallery();
calculate();
scroll();