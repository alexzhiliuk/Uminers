try {
    let switchElement = document.querySelector('.calculator-popup label[for="electricity-variant"]' )
    switchElement.addEventListener('input', ()=>{
        switchElement.parentElement.querySelectorAll('p').forEach(elem=>{
            if(elem.classList.contains('active')){
                elem.classList.remove('active')
            }
            else{
                elem.classList.add('active')
          
            }
            if(switchElement.parentElement.querySelectorAll('p')[1].classList.contains('active')){
                switchElement.parentElement.querySelector('input[type="text"]').disabled=false;
            }
            else{
                switchElement.parentElement.querySelector('input[type="text"]').disabled=true;
            }
        })
    })
} catch (error) {
    console.error(error)
}