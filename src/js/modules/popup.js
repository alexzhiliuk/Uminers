$(".popup-form__close").click(function() {
    $(this).parents(".popup").hide()
    $("body, html").removeClass("lock")
})

$(".js-popup-open").click(function() {
    let popupId = $(this).attr("data-popup-id")
    $(`.popup[data-popup-id=${popupId}]`).show()
    $("body, html").addClass("lock")
})