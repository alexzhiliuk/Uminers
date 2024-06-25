//input:text
try {
    let form = document.querySelector('form.form')
    let minus = document.querySelector('.form__symbol_left')
    let plus = document.querySelector('.form__symbol_right')
    let input = document.querySelector('input[name="ammount"]')

    input.value = 1;

    form.onsubmit = (e)=>{
        if(!input.value){
            input.value = 1;
        }
        e.preventDefault();
    }

    input.addEventListener('keypress', (event) => {
        if (!/\d/.test(event.key)) {
        event.preventDefault();
        }
    });
    

    minus.addEventListener('click', () => {
        if (input.value>=2 && typeof +input.value === 'number') {
            input.value = +input.value - 1;
        }else{
            input.value = 1
        }
    })

    plus.addEventListener('click', () => {
        if (input.value && typeof +input.value === 'number'){
            input.value = +input.value + 1;
        }else{
            input.value = 1;
        }
    })

    //input:radio
    let tabs = document.querySelectorAll('.form__tab');
    tabs.forEach(elem=>{
        if(elem.children.item(0).disabled === true){
            elem.classList.add('disabled');
        }
        elem.addEventListener('click',()=>{
            if(!(elem.classList.contains('active')) && !(elem.classList.contains('disabled'))){
                tabs.forEach(elem=>elem.classList.remove('active'));
                elem.classList.add('active');
            }
        })
    })
} catch {
    
    console.clear()
    
}