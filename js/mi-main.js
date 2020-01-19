function validateName(name) {
  if (name.length === 0) {
    return 'Name must have at least 1 character';
  }

  if (name.length >= 50) {
    return 'Name must have less than 50 characters';
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

function validateForm(event) {
  const $form = document.querySelector('#carta-a-santa');

  const name = $form.nombre.value;
  const city = $form.ciudad.value;
  const giftDescription = $form['descripcion-regalo'].value;

  const errorName = validateName(name);
  const errorCity = validateCity(city);
  const errorGiftDescription = validateGiftDescription(giftDescription);

  const errors = {
    nombre: errorName,
    ciudad: errorCity,
    'descripcion-regalo': errorGiftDescription,
  };

  const isSuccessful = handleErrors(errors) === 0;

  if (isSuccessful) {
    $form.className = 'oculto';
    document.querySelector('#exito').className = '';

    setTimeout(() => {
      window.location.href = 'wishlist.html';
    }, 5000);
  }

  event.preventDefault();
}

function handleErrors(errors) {

  const keys = Object.keys(errors);
  const $errors = document.querySelector('#errores');
  let errorsQuantity = 0;

  $errors.textContent = '';

  keys.forEach((key) => {
    const error = errors[key];

    if (error) {
      errorsQuantity++;
      $form[key].className = 'error';

      const $error = document.createElement('li');
      $error.textContent = error;
      $errors.appendChild($error);
    } else {
      $form[key].className = '';
    }
  });

  return errorsQuantity;
}

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validateForm;
