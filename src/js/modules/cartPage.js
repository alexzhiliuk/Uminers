let submit = document.getElementById('cart-submit')
let container = document.getElementById('cart-body')
let submitBlock = document.querySelector('.cart-submit')
let form = document.querySelector('form#cart-body')
let formContent = document.querySelector('#cart-form')
let radio = document.querySelector('#ship2')
let radioWrapper = document.querySelector('#radio-wrapper')
let submitTick = document.querySelector('#cart-policy')
let cartItems = document.querySelectorAll('.cart-item')

//validating form #TODO: real validate

function validateForm(event) {
    event.preventDefault();

    const nameInput = form.querySelector('input[placeholder="Ваше имя"]');
    const surnameInput = form.querySelector('input[placeholder="Ваша фамилия"]');
    const emailInput = form.querySelector('input[placeholder="Ваш email"]');
    const phoneInput = form.querySelector('input[placeholder="Ваш телефон"]');
    const addressInput = form.querySelector('input[id="address"]');
    const shippingRadios = form.querySelectorAll('input[name="shipping"]');
    const companyCheckbox = form.querySelector('input[type="checkbox"]');

    if (!nameInput.value) {
        nameInput.classList.add('input-invalid');
        alert('Пожалуйста, введите ваше имя.');
        return;
    } else {
        nameInput.classList.remove('input-invalid');
    }

    if (!surnameInput.value) {
        surnameInput.classList.add('input-invalid');
        alert('Пожалуйста, введите вашу фамилию.');
        return;
    } else {
        surnameInput.classList.remove('input-invalid');
    }

    if (!emailInput.value) {
        emailInput.classList.add('input-invalid');
        alert('Пожалуйста, введите ваш email.');
        return;
    } else {
        emailInput.classList.remove('input-invalid');
    }

    if (!phoneInput.value) {
        phoneInput.classList.add('input-invalid');
        alert('Пожалуйста, введите ваш телефон.');
        return;
    } else {
        phoneInput.classList.remove('input-invalid');
    }

    let shippingSelected = false;
    for (const radio of shippingRadios) {
        if (radio.checked) {
            shippingSelected = true;
            break;
        }
    }
    if (!shippingSelected) {
        alert('Пожалуйста, выберите способ доставки.');
        return;
    }

    if (form.querySelector('input[id="ship2"]').checked && !addressInput.value) {
        alert('Пожалуйста, укажите адрес доставки.');
        return;
    }

    form.submit();
}

submitTick.addEventListener('input', () => {
    if (submitTick.checked === true) {
        submit.classList.remove('disabled')
    }
    else {
        submit.classList.add('disabled')
    }
    if(submit.classList.contains('disabled')){
        submitTick.classList.add('invalid')
    }
    else{
        submitTick.classList.remove('invalid')
    }
})

radioWrapper.addEventListener('input', () => {
    if (radio.checked === true) {
        document.getElementById('address').disabled = false;
        document.getElementById('address').focus();

    } else {
        document.getElementById('address').value = '';
        document.getElementById('address').disabled = true;
    }
})

//button handler

submit.addEventListener('click', (e) => {
    if (submit.innerText === 'Перейти к оформлению') {
        container.classList.remove('form-disabled')
        container.classList.add('form-active');
        submitBlock.classList.remove('normal');
        submitBlock.classList.add('final');
        document.querySelector('.cart__body').classList.add('idk');
        submit.innerText = 'Оформить заказ';
        submit.type = 'submit'
        window.scrollTo(0, 0)
    } else {
        if(submit.classList.contains('disabled')){
            submitTick.classList.add('invalid')
        }
        else{
            submitTick.classList.remove('invalid')
            validateForm(e);
        }
    }
})

//cart items deleting

cartItems.forEach(item => {
    item.children.item(2).addEventListener('click', () => {
        item.remove();
    })
})


//cart emptyness

const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
        const cartBody = document.querySelector('.cart__body');
        if (cartBody.children.length <= 1 && !formContent.checkVisibility()) {

            const emptyCartMessage = document.createElement('h3');
            emptyCartMessage.style.color = '#222'
            emptyCartMessage.textContent = 'Ваша корзина пуста';
            emptyCartMessage.id = 'empty';


            cartBody.style.display = 'flex';
            cartBody.style.alignItems = 'center';
            cartBody.style.justifyContent = 'center';
            cartBody.style.height = '100%'
            cartBody.style.alignSelf = 'center'
            cartBody.appendChild(emptyCartMessage);
        } else if (formContent.checkVisibility()) {
            try {
                cartBody.children.namedItem('empty').remove();
            } catch (e) {
                console.log(e)
            }
        }
    });
});

observer.observe(document.querySelector('.cart__body'), { attributes: true, childList: true, subtree: true });;