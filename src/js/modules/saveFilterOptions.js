try {
    function getQueryParams() {
        const searchParams = new URLSearchParams(window.location.search);
        const params = {};
        for (const [key, value] of searchParams.entries()) {
            params[key] = value;
        }
        return params;
    }

    document.addEventListener('DOMContentLoaded', function () {
        const queryParams = getQueryParams();

        Object.keys(queryParams).forEach(name => {
            const input = document.querySelector(`input[name="${name}"]`);
            if (input) {
                if (input.type === 'checkbox') {
                    input.checked = queryParams[name] === 'true';
                } else if (input.type === 'range') {
                    try {
                        document.querySelector(`#${name}`).innerHTML = queryParams[name];
                    } catch (error) {
                        console.error(error);
                    }
                    input.value = queryParams[name];
                } else if (input.type === 'radio') {
                    const radioInput = document.querySelector(`[value="${queryParams[name]}"]`);
                    if (radioInput) {
                        radioInput.checked = true;
                        console.log(queryParams[name])
                        let tabs = document.querySelectorAll('.filter__tab');
                        tabs.forEach(elem => elem.classList.remove('active'))
                        radioInput.parentElement.classList.add('active');

                    }
                }
            }
        });
    });

    document.querySelector('.filter__form').addEventListener('submit', function (event) {
        event.preventDefault();

        const filters = {};

        document.querySelectorAll('.filter__form input[type="checkbox"]').forEach(input => {
            if (input.checked)
                filters[input.name] = input.checked;
        });

        document.querySelectorAll('.filter__form input[type="radio"]').forEach(input => {
            if (input.checked)
                filters[input.name] = input.value;
        });

        document.querySelectorAll('.filter__form input[type="range"]').forEach(input => {
            filters[input.name] = input.value;
        });

        localStorage.setItem('filters', JSON.stringify(filters));

        const paramsString = new URLSearchParams(filters).toString();

        window.location.href = `${window.location.origin}${window.location.pathname}?${paramsString}`;
    });
} catch (error) {
    //console.error(error);
}

try{
document.querySelector('.filter__tab').addEventListener('click', function (event) {
    const selectedTab = event.target.closest('.filter__tab');
    if (selectedTab) {
        const radioInput = selectedTab.querySelector('input[type="radio"]');
        if (radioInput) {
            radioInput.checked = true;
        }
    }
});
}catch{

}