try {
    let switchElement = document.querySelector('.calculator-popup label[for="electricity-variant"]')
    switchElement.addEventListener('input', () => {
        switchElement.parentElement.querySelectorAll('p').forEach(elem => {
            if (elem.classList.contains('active')) {
                elem.classList.remove('active')
            }
            else {
                elem.classList.add('active')

            }
            if (switchElement.parentElement.querySelectorAll('p')[1].classList.contains('active')) {
                switchElement.parentElement.querySelector('input[type="text"]').disabled = false;
            }
            else {
                switchElement.parentElement.querySelector('input[type="text"]').disabled = true;
            }
        })
    })

    const indicator = document.querySelector('.indicator');
    const radioButtons = document.querySelectorAll('input[name="toggle"]');

    function setActiveToggle() {
        const activeIndex = Array.from(radioButtons).findIndex(rb => rb.checked);

        indicator.style.transform = `translateX(${activeIndex * 32}px)`;
    }

    radioButtons.forEach((radio) => {
        radio.addEventListener('change', setActiveToggle);
    });

    setActiveToggle();

    const form = document.querySelector('.calculator-popup form');
    if(window.innerWidth < 992){
        form.querySelector('[type="submit"]').addEventListener('click', ()=>{
            if(!form.querySelector('.content_right').classList.contains('active')){
                form.querySelector('.content_right').classList.add('active')
                form.querySelector('.content_right').querySelector('button').addEventListener('click', ()=>{
                    form.querySelector('.content_right').classList.remove('active')
                })
                
            }else{
                form.querySelector('.content_right').classList.remove('active')
            }
        })
    }

} catch (error) {
    console.error(error)
}