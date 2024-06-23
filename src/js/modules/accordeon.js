let options = document.querySelectorAll('.options')
options.forEach(elem => {
    elem.addEventListener('click', () => {
        if (!elem.classList.contains('active')) {
            elem.classList.add('active')
        }else{
            elem.classList.remove('active')
        }
    })
})