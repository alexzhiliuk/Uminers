try {
    const filters = document.querySelectorAll('.categories__view>svg');
    const likes = document.querySelectorAll('.card__like svg');
    const grid = document.querySelector('.catalog__cards');
    const favourites = document.querySelector('.favourites-container');

    filters.forEach(elem => {
        elem.addEventListener('click', () => {
            if (!elem.classList.contains('activeSVG')) {
                filters.forEach(elem => {
                    elem.classList.remove('activeSVG');
                    elem.classList.add('basicSVG');
                })
                elem.classList.add('activeSVG')
            }
            if (filters[0] == elem) {
                if (!grid.classList.contains('catalog__cards_grid')) {
                    grid.classList.remove('catalog__cards_rows')
                    grid.classList.add('catalog__cards_grid')
                }
            }
            if (filters[1] == elem) {
                if (!grid.classList.contains('catalog__cards_rows')) {
                    grid.classList.remove('catalog__cards_grid')
                    grid.classList.add('catalog__cards_rows')
                }
            }
        })
    })

    likes.forEach(elem => {
        elem.addEventListener('click', () => {
            if (!elem.classList.contains('activeSVG')) {
                elem.classList.remove('basicSVG')
                elem.classList.add('activeSVG');
            } else {
                elem.classList.remove('activeSVG');
                elem.classList.add('basicSVG');
            }
        })
    })

    try{
    for (let i = 0; i < favourites.children.length; i++) {
        let cardLike = favourites.children.item(i).querySelector('.card__like svg');
        cardLike.classList.add('activeSVG');
        cardLike.addEventListener('click', function() {
            this.parentElement.parentElement.parentElement.remove();
        });
    }
    }catch{
        
    }   

} catch(e) {
    console.log(e)
}

$(".categories__item").click(function () {
    $(this).parent().find(".categories__item").removeClass("categories__item_active")
    $(this).addClass("categories__item_active")
})

$(".filter__close").click(function () {
    $(this).parents(".filter").removeClass("filter_active")
})
$(".catalog__open-filters").click(function () {
    $(".filter").addClass("filter_active")
})