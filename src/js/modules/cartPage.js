try {
    let submit = document.getElementById('cart-submit')
    let container = document.getElementById('cart-body')
    let submitBlock = document.querySelector('.cart-submit')
    let form = document.querySelector('form#cart-body')
    let formContent = document.querySelector('#cart-form')
    let radio = document.querySelector('#ship2')
    let radioWrapper = document.querySelector('#radio-wrapper')
    let submitTick = document.querySelector('#cart-policy')
    let cartItems = document.querySelectorAll('.cart-item')
    let heading = document.querySelector('.cart__title')
    let breadcrumbs = document.querySelector('.breadcrumbs');

    function updateBreadcrumbs(currentPage) {

        const arrow = document.createElement('div');
        arrow.classList.add('breadcrumbs__arrow');
        arrow.innerHTML = `
    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.54889 1.00006L10.3634 5.81455C10.7754 6.22658 10.7754 6.89463 10.3634 7.30667L5.56055 12.1095" stroke="#9D9D9D" stroke-width="1.40679" stroke-linecap="round"/>
    </svg>
  `;
        breadcrumbs.appendChild(arrow);

        const currentLink = document.createElement('a');
        currentLink.href = 'javascript:void(0)';
        currentLink.classList.add('breadcrumbs__item');
        currentLink.textContent = currentPage;
        breadcrumbs.appendChild(currentLink);
    }

    // Пример использования


    function validateForm(event) {
        event.preventDefault();

        const nameInput = form.querySelector('input[name="name"]');
        const surnameInput = form.querySelector('input[name="surname"]');
        const emailInput = form.querySelector('input[type="email"]');
        const phoneInput = form.querySelector('input[type="tel"]');
        const addressInput = form.querySelector('input[id="address"]');
        const shippingRadios = form.querySelectorAll('input[name="shipping"]');

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
            alert('Пожалуйста, выберите способ доставки.')
            return;
        }

        if (form.querySelector('input[id="ship2"]').checked && !addressInput.value) {
            alert('Пожалуйста, укажите адрес доставки.');
            return;
        }
        alert('форма отправлена!')
        form.submit();
    }

    submitTick.addEventListener('input', () => {
        if (submitTick.checked === true) {
            submit.classList.remove('disabled')
        }
        else {
            submit.classList.add('disabled')
        }
        if (submit.classList.contains('disabled')) {
            submitTick.classList.add('invalid')
        }
        else {
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
        if (submit.classList.contains('inherit')) {
            e.preventDefault()

            submit.classList.remove('inherit')
            submit.classList.add('active')

            container.classList.remove('form-disabled')
            container.classList.add('form-active');

            submitBlock.classList.remove('normal');
            submitBlock.classList.add('final');
            document.querySelector('.cart__body').classList.add('idk');

            let buff = submit.innerText;
            submit.innerText = submit.dataset.innertext;
            submit.dataset.secondtext = buff;

            let buff2 = heading.innerText;
            heading.innerText = heading.dataset.innertext;
            heading.dataset.secondtext = buff2;

            submit.type = 'submit'
            window.scrollTo(0, 0)

            updateBreadcrumbs(breadcrumbs.dataset.next);
        } else {
            if (submit.classList.contains('disabled')) {
                submitTick.classList.add('invalid')
            }
            else {
                validateForm(e);
                submitTick.classList.remove('invalid')
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
                } catch {

                }
            }
        });
    });

    observer.observe(document.querySelector('.cart__body'), { attributes: true, childList: true, subtree: true });
} catch (e) {
    console.log(e)
}