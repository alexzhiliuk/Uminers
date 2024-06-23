let tabs = document.querySelectorAll('.filter__tab');

tabs.forEach(elem => {
    elem.addEventListener('click', (event)=>{
        event.preventDefault();
        if(elem.classList.contains('active')){
            elem.classList.remove('active')
        }else{
            tabs.forEach(elem=>elem.classList.remove('active'))
            elem.classList.add('active');
        }
    })
})