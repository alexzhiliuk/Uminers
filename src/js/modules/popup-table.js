import characteristics from "./characteristics.js"

try {
    let containers = document.querySelectorAll('.popup-form__characteristic-wrapper')
    let select = document.getElementById('compare-input-second');
    select.addEventListener('input', () => {
        if (select.value != '-') {
            containers.forEach(container => {
                if (+container.children.item(1).dataset.characteristic != 0) {
                    if (container.children.item(1).dataset.characteristic === 'btn') {
                        container.children.item(1).style.visibility = 'visible';
                        container.children.item(1).children.item(0).innerHTML = container.children.item(1).children.item(0).innerHTML + select.value
                    } else {
                        container.children.item(1).innerHTML = characteristics[select.dataset.lang][container.children.item(1).dataset.characteristic]
                    }
                }
            })
        } else {
            containers.forEach(container => {

                if (+container.children.item(1).dataset.characteristic != 0) {
                    if (container.children.item(1).dataset.characteristic === 'btn') {
                        console.log(container.children.item(1))
                        container.children.item(1).style.visibility = 'hidden';
                    } else {
                        container.children.item(1).innerHTML = ''
                    }
                }
            })
        }
    })

} catch (e) {
    console.error(e)
}