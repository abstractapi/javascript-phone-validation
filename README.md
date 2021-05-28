# AbstractAPI javascript-phone-validation library

Integrate the powerful [Phone Validation API from Abstract](https://www.abstractapi.com/phone-validation-api) in your Javascript or NodeJS project in a few lines of code.

Abstract's Phone Number Validation and Verification API is a fast, lightweight, modern, and RESTful JSON API for determining the validity and other details of phone numbers from over 190 countries.

It's very simple to use: you only need to submit your API key and a phone number, and the API will respond as assessment of its validity, as well as additional details like the carrier details, line type, region and city details, and more.

Validating and verifying phone numbers is a critical step to reducing the chances of low quality data and fraudulent or risky users in your website or application.

# Documentation

## Installation

You can install **javascript-phone-validation** via npm, from our CDN, or download the source into your project.

### ES6

Download and install the library from npm:

```
npm install @abstractapi/javascript-phone-validation --save
```

In your project, import it and configure your `API_KEY`:

```js
import {AbstractPhoneValidation} from 'javascript-phone-validation'

AbstractPhoneValidation.configure('API_KEY')
```

### Browser, from the CDN

You can have the browser download the library from its closest location through jsDeliver CDN:

```js
<script src="https://cdn.jsdelivr.net/npm/@abstractapi/javascript-core@latest/dist/javascript-core.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@abstractapi/javascript-phone-validation@latest/dist/javascript-phone-validation.js"></script>
<script>
    AbstractPhoneValidation.configure('API_KEY');

    // use the library
</script>
```

### Browser, from the built file

You can build the library yourself, or get the already built file from the `dist` directory and load it:

```js
<script src="dist/javascript-phone-validation.js"></script>
<script>
    AbstractPhoneValidation.configure('API_KEY');

    // use the library
</script>
```

## API key

Get your API key for free and without hassle from the [Abstact website](https://app.abstractapi.com/users/signup?target=/api/phone-validation/pricing/select).

## Quickstart

AbstractAPI **javascript-phone-validation** library returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) so you can use one of the following approaches:

### Async/Await

```js
async function validatePhone(number) {
  let response = await AbstractPhoneValidation.verify(number);
  console.log(response);
}
```

### Using .then()

```js
function validatePhone(number) {
  AbstractPhoneValidation.verify(number)
    .then(response => {
      console.log(response);
    })
}
```

## API response

The API response contains the following fields:

| PARAMETER | TYPE | DETAILS |
| - | - | - |
| number | String | The phone number submitted for validation and verification. |
| valid | Boolean | Is true if the phone number submitted is valid. |
| local_format | String | The local or national format of the submitted phone number. For example, it removes any international formatting, such as "+1" in the case of the US. |
| international_format | String | The international format of the submitted phone number. This means appending the phone number's country code and a "+" at the beginning. |
| country_name | String | The name of the country in which the phone number is registered. |
| country_code | String | The country's two letter ISO 3166-1 alpha-2 code. |
| country_prefix | The country's calling code prefix. |
| registered_location | String | As much location details as are available from our data. This can include the region, state / province, and in some cases down to the city. |
| carrier | String | The carrier that the number is registered with. |
| line_type | String | The type of phone number. The possible values are: Landline, Mobile, Satellite, Premium, Paging, Special, Toll_Free, and Unknown. |

## Detailed documentation

You will find additional information and request examples in the [Abstract help page](https://app.abstractapi.com/api/phone-validation/documentation).

## Getting help

If you need help installing or using the library, please contact [Abstract's Support](https://app.abstractapi.com/api/phone-validation/support).

For bug report and feature suggestion, please use [this repository issues page](https://github.com/abstractapi/javascript-phone-validation/issues).

# Contribution

Contributions are always welcome, as they improve the quality of the libraries we provide to the community.

Please provide your changes covered by the appropriate unit tests, and post them in the [pull requests page](https://github.com/abstractapi/javascript-phone-validation/pulls).

## NPM

### Installation

Run `npm install` in the command line to install the dependencies. To update those dependencies you need to run `npm update`.

### Building

To build the library and generate the minified file in the *dist* directory, you need to run `npm run build`.

To build the lib, you need to run `npm run build:lib`.

### Test

To run the test suite, you need the API key from the abstract website and you can run:

    PHONE_VALIDATION_API_KEY=(your key here) npm run test

