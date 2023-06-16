import * as flsFunctions from "./modules/functions.js";
import * as menuFunctions from "./modules/burger-menu.js";
import * as toggle from "./modules/toggle-button.js";

flsFunctions.isWebp();
menuFunctions.burgerMenu();
toggle.toggle();

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const slider = new Swiper('.swiper', {
    width: 900,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 0,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, 
    },
    breakpoints: {
        1000: {
            width: 900,
        },
        800: {
            width: 700,
        },
        600: {
            width: 500,
        },
        440: {
            width: 360,
        },
        280: {
            width: 280,
        }
    }
});