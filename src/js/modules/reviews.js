import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiperHero = new Swiper('#reviewsSlider', {
    slidesPerView: 5,
    spaceBetween: 20,
    speed: 1500,
    freeMode: true,

    navigation: {
        nextEl: '#reviewsSliderNext',
        prevEl: '#reviewsSliderPrev',
    },

    
});




