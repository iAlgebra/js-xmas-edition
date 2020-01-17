function testValidateName() {
    console.assert(
        validateName('') === 'This input must have at least 1 character',
        "Validate Name didn't validate that the name was not empty",
    );

    console.assert(
        validateName(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'This input must have less than 50 characters',
        "Validate Name didn't validate that the name has less than 50 characters",
    );

    console.assert(validateName('123456789') === 'Name only accepts letters',
        "Validate Name didn't validate that the name accepts only letters"
    );

    console.assert(validateName(
        'Gabriela') === '',
        "Validate Name failed with a valid name"
    );
}

function testValidateCity() {
    console.assert(validateCity('Catamarca') === '',
        "Validate City failed with a valid city name"
    );

    console.assert(
        validateCity('') === 'You must choose a city',
        "Validate city didn't validate that the city was not empty"
    );

    console.assert(validateCity() === 'You must choose a city',
        "Validate city didn't validate that the city was not empty");
}

function testValidateGiftDescription() {
    console.assert(validateGiftDescription('') === 'You must complete the gift description',
        "Validate Gift Description didn't validate that the description was not empty"
    );

    console.assert(validateGiftDescription(
        'fhagfhfhafeghvqefhqeyfghfvehfvadygkhavfyqegyiqertyuytrewrtyuiertygfhavfefhagfhfhafeghvqefhqeyfghfvehfvadygkhavfyqegyiqertyuytrewrtyuiertygfhavfe') ===
        'The gift description should be less than 100 characters',
        "Validate Gift Description didn't validate that the description is less than 100 characters"
    );

    console.assert(validateGiftDescription('I would like a trip somewhere') === '',
        "Validate Gift description failed with a correct description"
    );

    console.assert(validateGiftDescription('..,,,.,.,.,,,') === 'The gift description only accepts letters and numbers',
    "Validate Gift Description didn't validate that the description only accepts letters and numbers"
    );
}

testValidateName();
testValidateCity();
testValidateGiftDescription();
