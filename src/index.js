'strict';

import menu from "./modules/menu";
import popup from "./modules/popup";
import sendForm from "./modules/sendForm";
import mainSlider from "./modules/mainSlider";
import validator from "./modules/validation";
import SliderCarousel from './modules/sliderCarousel';
import sliderGallery from "./modules/sliderGallery";
import calculate from "./modules/calc";

const carousel = new SliderCarousel({
    main: '.services-wrapper',
    wrap: '.services-slider',
});

menu();
popup();
sendForm();
validator();
mainSlider();
carousel.init();
sliderGallery();
calculate();