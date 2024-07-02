//input:text
try {
    let form = document.querySelector('.form')


    let inputs = document.querySelectorAll('.form__ammount');
    inputs.forEach(element => {
        let minus = element.querySelector('.form__symbol_left')
        let plus = element.querySelector('.form__symbol_right')
        let input = element.querySelector('input[name="ammount"]')

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
    
        $(input).on("input", function() {
            if (!$(this).val()) {
                $(this).removeClass("invalid")
                return
            }
            if (Number($(this).val()) < Number($(this).attr("min"))) {
                $(this).addClass("invalid")
            } else {
                $(this).removeClass("invalid")
            }
        })
        
    
        minus.addEventListener('click', () => {
            let minValue =  Number(input.getAttribute("min"))
            if (input.value > minValue && typeof +input.value === 'number') {
                input.value = +input.value - 1;
            }else{
                input.value = minValue
            }
            $(input).removeClass("invalid")
        })
    
        plus.addEventListener('click', () => {
            let minValue =  Number(input.getAttribute("min"))
            if (input.value && typeof +input.value === 'number'){
                if (input.value < minValue) {
                    input.value = minValue
                } else {
                    input.value = +input.value + 1;
                }
            }else{
                input.value = 1;
            }
            $(input).removeClass("invalid")
        })
    })

    //input:radio
    let tabs = document.querySelectorAll('.form__tab');
    tabs.forEach(elem => {
        if (elem.children.item(0).disabled === true) {
            elem.classList.add('disabled');
        }
        elem.addEventListener('click', () => {
            if (!(elem.classList.contains('active')) && !(elem.classList.contains('disabled'))) {
                tabs.forEach(elem => elem.classList.remove('active'));
                elem.classList.add('active');
            }
        })
    })
} catch {

    console.clear()

}