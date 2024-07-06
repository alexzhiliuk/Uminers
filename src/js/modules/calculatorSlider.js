import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiperCalulator = new Swiper('#calculatorSlider', {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 1000,
    freeMode: true,
    loop: true,

    
    navigation: {
        nextEl: '#calculatorSliderNext',
        prevEl: '#calculatorSliderPrev',
    },

});




