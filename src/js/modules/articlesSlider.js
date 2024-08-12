import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiperHero = new Swiper('#articlesSlider', {
    slidesPerView: 1.1,
    spaceBetween: 20,
    speed: 1500,
    freeMode: true,

    navigation: {
        nextEl: '#articlesSliderNext',
        prevEl: '#articlesSliderPrev',
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    breakpoints: {
        576: {
            slidesPerView: 1.8,
        },
        768: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 3,
        }
    }
    
});




