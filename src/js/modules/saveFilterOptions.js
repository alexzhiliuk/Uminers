try{
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
            if (input.type === 'checkbox' || input.type === 'radio') {
                input.checked = queryParams[name] === 'true';
            } else {
                try{
                    document.querySelector(`#${name}`).innerHTML = queryParams[name];
                }catch{

                }
                input.value = queryParams[name];
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
            filters[input.name] = input.checked;
    });

    document.querySelectorAll('.filter__form input[type="range"]').forEach(input => {
        filters[input.name] = input.value;
    });

    localStorage.setItem('filters', JSON.stringify(filters));

    const paramsString = new URLSearchParams(filters).toString();

    window.location.href = `${window.location.origin}${window.location.pathname}?${paramsString}`;
});
}
catch{

}