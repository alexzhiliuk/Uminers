$(window).scroll(function(event){

    if (window.outerWidth < 1366) {
        $(".header").css("translate","")
        return
    }

    if ($(this).scrollTop() != 0) {
        
        let moveheight = $(".top-header").outerHeight()
        $(".header").css("translate", `0 -${moveheight}px`)
        $(".bottom-header").css("margin-top", "15px")

    } else {
        
        $(".header").css("translate","")
        $(".bottom-header").css("margin-top", "")
    }

});

$(window).resize(function(){

    if (window.outerWidth >= 1366 &&  $(".mobile-menu").hasClass("mobile-menu_active")) {
        $(".mobile-menu").removeClass("mobile-menu_active")
        $("body, html").removeClass("lock")
    }

});

$(".bottom-header__burger").click(function() {
    $(".mobile-menu").addClass("mobile-menu_active")
    $("body, html").addClass("lock")
})

$(".mobile-menu__close").click(function() {
    $(".mobile-menu").removeClass("mobile-menu_active")
    $("body, html").removeClass("lock")
})