try {
    let rangeBtc = document.querySelector('#btc-course-range');
    let valueInputBtc = document.querySelector('#btc-course-value > input');
    let rangeRuble = document.querySelector('#ruble-course-range');
    let valueInputRuble = document.querySelector('#ruble-course-value > input');

    rangeBtc.addEventListener('input', function () {
        const value = parseFloat(this.value);
        const min = parseFloat(this.min) || 0;
        const max = parseFloat(this.max) || 99;
        const percent = ((value - min) / (max - min)) * 100;
        valueInputBtc.value = value;
        updateWidth(valueInputBtc);
        valueInputBtc.parentElement.style.left = `calc(${percent}% - ${Math.floor(valueInputBtc.offsetWidth / 2)}px)`;
    });

    valueInputBtc.addEventListener('input', function () {
        updateWidth(valueInputBtc);
        const value = parseFloat(valueInputBtc.value);
        const min = parseFloat(rangeBtc.min) || 0;
        const max = parseFloat(rangeBtc.max) || 99;
        const percent = ((value - min) / (max - min)) * 100;

        if (value > max) {
            valueInputBtc.value = max;
            rangeBtc.value = max;
            const percent = ((max - min) / (max - min)) * 100;
            valueInputBtc.parentElement.style.left = `calc(${percent}% - ${Math.floor(valueInput.offsetWidth / 2)}px)`;
            return
        }

        rangeBtc.value = value;
        valueInputBtc.parentElement.style.left = `calc(${percent}% - ${Math.floor(valueInput.offsetWidth / 2)}px)`;
    });

    rangeRuble.addEventListener('input', function () {
        const value = parseFloat(this.value);
        const min = parseFloat(this.min) || 0;
        const max = parseFloat(this.max) || 99;
        const percent = ((value - min) / (max - min)) * 100;
        valueInputRuble.value = value;
        updateWidth(valueInputRuble);
        valueInputRuble.parentElement.style.left = `calc(${percent}% - ${Math.floor(valueInputRuble.offsetWidth / 2)}px)`;
    });

    valueInputRuble.addEventListener('input', function () {
        updateWidth(valueInputRuble);
        const value = parseFloat(valueInputRuble.value);
        const min = parseFloat(rangeRuble.min) || 0;
        const max = parseFloat(rangeRuble.max) || 99;
        const percent = ((value - min) / (max - min)) * 100;

        if (value > max) {
            valueInputRuble.value = max;
            rangeRuble.value = max;
            const percent = ((max - min) / (max - min)) * 100;
            valueInputRuble.parentElement.style.left = `calc(${percent}% - ${Math.floor(valueInputRuble.offsetWidth / 2)}px)`;
            return
        }

        rangeRuble.value = value;
        valueInputRuble.parentElement.style.left = `calc(${percent}% - ${Math.floor(valueInputRuble.offsetWidth / 2)}px)`;
    });

    function updateWidth(input) {
        const span = document.createElement('span');
        document.querySelector('main').appendChild(span);
        span.classList.add('width-span')
        span.style.font = window.getComputedStyle(valueInputBtc).font;
        span.textContent = input.value || input.placeholder || '';
        input.style.width = (span.offsetWidth + 20) + 'px';
        document.querySelector('main').removeChild(document.querySelector('.width-span'));
    }
    updateWidth(valueInputBtc)
    updateWidth(valueInputRuble)
}
catch{
    
}