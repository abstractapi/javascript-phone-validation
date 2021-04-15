import 'regenerator-runtime/runtime';
import {AbstractPhoneValidation} from '../src'
const mocks = require('./mocks')

const API_KEY = 'ENTER YOUR KEY';

function mockFetch(status, data) {
    const xhrMockObj = {
        open: jest.fn(),
        send: jest.fn(),
        setRequestHeader: jest.fn(),
        onreadystatechange: jest.fn(),
        readyState: 4,
        status,
        responseText: JSON.stringify(data),
    };

    const xhrMockClass = () => xhrMockObj;

    global.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);

    setTimeout(() => {
        xhrMockObj.onreadystatechange();
    }, 0);
}

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
    mockFetch(200, mocks)

    AbstractPhoneValidation.configure(API_KEY);
    let response = await AbstractPhoneValidation.verify('14154582468')
    expect(response.phone).toBe('14154582468')
});