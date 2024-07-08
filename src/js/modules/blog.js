
function moreBtnEvent(e) {
    let currentHtml = $(e.target).html()
    $(e.target).html($(e.target).attr('data-text'))
    $(e.target).attr('data-text', currentHtml)

    if ($(e.target).attr('data-action') == "show") {
        $(e.target).attr('data-action', 'hide')

        $(".article-sidebar").find("li").each(function(i, el) {
            $(el).show()  
        })
    } else {
        $(e.target).attr('data-action', 'show')

        $(".article-sidebar").find("li").each(function(i, el) {
            if (i > 2) {
                $(el).hide()
            }
        })
    }
}
function sidebarMove() {
    let $sidebar = $(".article-sidebar")
    if (window.innerWidth < 992) {
        $sidebar.insertAfter(".article__content img:first-of-type")

        if ($sidebar.find("li").length > 3) {

            if (!$(".article-sidebar__more").length) {
                let $moreBtn = $("<a href='javascript:void(0)' class='article-sidebar__more' data-text='Свернуть ↑' data-action='show'>Развернуть ↓</a>")
                $sidebar.append($moreBtn)
                $moreBtn.click(moreBtnEvent)
            }

            $sidebar.find("li").each(function(i, el) {
                if (i > 2) {
                    $(el).hide()
                }
            })
        }
    } else {
        $sidebar.insertAfter(".article__content")
        $(".article-sidebar__more").remove()
        $sidebar.find("li").each(function(i, el) {
            
            $(el).show()
            
        })
    }
}

$(window).resize(function() {
    sidebarMove()
})
sidebarMove()
