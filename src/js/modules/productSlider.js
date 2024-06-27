import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiperHero = new Swiper('#productSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 1500,
    freeMode: true,

    navigation: {
        nextEl: '#productSwiperNext',
        prevEl: '#productSwiperPrev',
    },

    breakpoints: {
        1200: {
            slidesPerView: 4,
            direction: "vertical",
        }
    }

    
});

$(".product__gallery-img").click(function() {
    $(this).parents(".swiper-wrapper").find(".product__gallery-img").removeClass("product__gallery-img_active")
    $(this).addClass("product__gallery-img_active")

    $(this).parents(".product__images").find(".card__image img").attr("src", $(this).find("img").attr("data-src"))
})


