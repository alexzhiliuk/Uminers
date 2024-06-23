let tabs = document.querySelectorAll('.filter__tab');

tabs.forEach(elem => {
    elem.addEventListener('click', (event)=>{
        event.preventDefault();

        tabs.forEach(elem=>elem.classList.remove('active'))
        elem.classList.add('active');
    
    })
})