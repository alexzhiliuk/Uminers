try{
const filters = document.querySelectorAll('.categories__view>svg');
const likes = document.querySelectorAll('.card__top svg');
const grid = document.querySelector('.catalog__cards');

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
        if (!elem.classList.contains('activeSVG')){
            elem.classList.remove('basicSVG')
            elem.classList.add('activeSVG');
        }else{
            elem.classList.remove('activeSVG');
            elem.classList.add('basicSVG');
        }
    })
})
}catch{
    console.clear()
}