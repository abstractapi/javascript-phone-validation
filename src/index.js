import * as core from 'javascript-core';

export class AbstractPhoneValidation {
    static apiKey;

    static configure = (apiKey) => {
        this.apiKey = apiKey;
    }

    static verify = (phone) => {
        if (!phone) {
            throw new Error('Phone is not provided.')
        }

        return core.makeApiCall('phonevalidation', this.apiKey, `phone=${phone}`)
    };
}
