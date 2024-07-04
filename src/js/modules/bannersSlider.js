import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiperHero = new Swiper('#bannersSlider', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    freeMode: true,

    pagination: {
        el: ".product-banners__pagination",
        clickable: true,
    },

    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    
});




