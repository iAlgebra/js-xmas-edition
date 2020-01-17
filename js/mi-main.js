const $form = document.querySelector('#carta-a-santa');
const $submit = $form.submit;

function validateName(name) {
    if(name.length === 0) {
        return 'This input must have at least 1 character';
    }

    if (name.length >= 50) {
        return 'This input must have less than 50 characters';
    }

    if (!/^[a-z]+$/i.test(name)) {
        return 'Name only accepts letters';
    }

    return '';
}

function validateCity(city = '') {
    if (city === '') {
        return 'You must choose a city';
    }
    return '';
}

function validateGiftDescription(giftDescription) {
    if (giftDescription.length === 0) {
        return 'You must complete the gift description';
    }
    if (giftDescription.length >= 100) {
        return 'The gift description should be less than 100 characters';
    }

    if (!/^[a-z0-9 ]+$/i.test(giftDescription)) {
        return 'The gift description only accepts letters and numbers';
    }

    return '';
}

$submit.onclick = function () {
    console.log($form.nombre.value);
    console.log($form.ciudad.value);
    console.log($form.comportamiento.value);
    console.log($form['descripcion-regalo'].value);
    validateName($form.nombre.value);
    validateCity($form.ciudad.value);
}
