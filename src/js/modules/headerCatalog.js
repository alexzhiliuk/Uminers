$(".js-header-catalog-open").click(function() {
    $(".catalog-header").toggle()
})


$(".catalog-header__menu a").click(function() {
    let tabId = $(this).attr("data-tab-id")
    $(this).parents(".catalog-header__menu").find("a").removeClass("active")
    $(this).addClass("active")

    $(".catalog-header__body").hide()
    $(`.catalog-header__body[data-tab-id=${tabId}]`).show()
})