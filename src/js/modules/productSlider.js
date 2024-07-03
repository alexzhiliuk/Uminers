import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiperHero = new Swiper('#productSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 500,
    freeMode: true,
    loop: true,

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
// $(".product__gallery-img").click(function() {
    // $(this).parents(".swiper-wrapper").find(".product__gallery-img").removeClass("product__gallery-img_active")
    // $(this).addClass("product__gallery-img_active")

    // $(this).parents(".product__images").find(".card__image img").attr("src", $(this).find("img").attr("data-src"))
// })
$("#productSwiper .swiper-slide").click(function() {

    let nextIndex = Number($(this).attr("data-swiper-slide-index"))
    swiperHero.slideToLoop(nextIndex)
    $(this).parents(".product__images").find(".card__image img").attr("src", $(this).find("img").attr("data-src"))
})

$(".product__slider-btn").click(function() {
    let imgSrc = $("#productSwiper .swiper-slide-active").find("img").attr("data-src")

    $(this).parents(".product__images").find(".card__image img").attr("src", imgSrc)
})
