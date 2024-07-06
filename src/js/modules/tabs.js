$(".tabs__item").click(function() {
    let tabId = $(this).attr("data-tab-id")
    $(this).parent().find(".tabs__item").removeClass("tabs__item_active")
    $(this).addClass("tabs__item_active")

    $(".tabs__body").hide()
    $(`.tabs__body[data-tab-id=${tabId}]`).show()
})

$(".crypto__item").click(function() {
    let tabId = $(this).attr("data-tab-id")
    $(this).parent().find(".crypto__item").removeClass("crypto__item_active")
    $(this).addClass("crypto__item_active")

    $(".js-crypto-tab-body").hide()
    $(`.js-crypto-tab-body[data-tab-id=${tabId}]`).show()
})

$(".articles__tab").click(function() {
    let tabId = $(this).attr("data-tab-id")
    $(this).parent().find(".articles__tab").removeClass("articles__tab_active")
    $(this).addClass("articles__tab_active")

    $(".articles__wrapper").hide()
    $(`.articles__wrapper[data-tab-id=${tabId}]`).show()
})