let tabs = document.querySelectorAll('.filter__tab');

tabs.forEach(elem => {
    elem.addEventListener('click', (event)=>{

        tabs.forEach(elem=>elem.classList.remove('active'))
        elem.classList.add('active');
    
    })
})