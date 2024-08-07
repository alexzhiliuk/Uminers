$(".js-header-catalog-open").click(function() {
    $(".catalog-header").toggle()
    $(".search-header").hide()
})

$(".js-search-open").click(function() {
    $(".search-header").toggle()
    $(".catalog-header").hide()
    document.querySelector('.search-header').querySelector('input').focus()
})
$(".search-header__close").click(function() {
    $(".search-header").hide()
    document.querySelector('.search-header').querySelector('input').blur()
})


$(".catalog-header__menu a").click(function() {
    let tabId = $(this).attr("data-tab-id")
    if (!tabId) { return }
    $(this).parents(".catalog-header__menu").find("a").removeClass("active")
    $(this).addClass("active")

    $(".catalog-header__body").hide()
    $(`.catalog-header__body[data-tab-id=${tabId}]`).show()
})

$(".mobile-menu__catalog-item").click(function() {
    $(this).parents(".mobile-menu__catalog").find(".mobile-menu__catalog-item").css("font-weight", "")
    $(this).css("font-weight", "600")
    $(this).parents(".mobile-menu__catalog").find(".mobile-menu__catalog-item svg").css("rotate", "")
    $(this).find("svg").css("rotate", "180deg")

    let droplist = $(this).parent().find(".mobile-menu-droplist")
    droplist.parents(".mobile-menu__catalog").find(".mobile-menu-droplist").removeClass("mobile-menu-droplist_active")
    droplist.addClass("mobile-menu-droplist_active")

})