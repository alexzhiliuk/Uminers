import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiperHero = new Swiper('#productSwiper', {
    slidesPerView: 4,
    spaceBetween: 10,
    speed: 1500,
    freeMode: true,
    direction: "vertical",

    navigation: {
        nextEl: '#productSwiperNext',
        prevEl: '#productSwiperPrev',
    },

    
});

$(".product__gallery-img").click(function() {
    $(this).parents(".swiper-wrapper").find(".product__gallery-img").removeClass("product__gallery-img_active")
    $(this).addClass("product__gallery-img_active")

    $(this).parents(".product__images").find(".card__image img").attr("src", $(this).find("img").attr("data-src"))
})


