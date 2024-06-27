import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiperHero = new Swiper('#reviewsSlider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 1500,
    freeMode: true,

    navigation: {
        nextEl: '#reviewsSliderNext',
        prevEl: '#reviewsSliderPrev',
    },
    

    breakpoints: {
        1200: {
            slidesPerView: 5
        },
        992: {
            slidesPerView: 4
        }
    }

    
});




