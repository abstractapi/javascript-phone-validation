import 'regenerator-runtime/runtime';
import {AbstractPhoneValidation} from '../src'

const API_KEY = process.env.PHONE_VALIDATION_API_KEY;

test('Should throw error when no key is configured', () => {
    let thrownError;
    try {
        AbstractPhoneValidation.verify('123456789')
    }
    catch(error) {
        thrownError = error;
    }

    let expectedErrorObj = new Error('No api key is set.');
    expect(thrownError).toEqual(expectedErrorObj);
});


test('Should throw error when phone is empty', () => {
    AbstractPhoneValidation.configure(API_KEY);

    let thrownError;
    try {
        AbstractPhoneValidation.verify()
    }
    catch(error) {
        thrownError = error;
    }

    let expectedErrorObj = new Error('Phone is not provided.');
    expect(thrownError).toEqual(expectedErrorObj);
});

test('Request OK when everything is set up correctly', async () => {
    AbstractPhoneValidation.configure(API_KEY);
    let response = await AbstractPhoneValidation.verify('14154582468')
    expect(response.phone).toBe('14154582468')
});