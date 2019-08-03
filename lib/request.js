'use strict';

const { URL } = require('url');
const got = require('got');

class Request {
    constructor (options = {}) {
        this.baseUrl = 'https://api.glesys.com';
        this.userAgent = 'https://github.com/jwilsson/glesys-api';

        this.apiKey = options.apiKey;
        this.apiUser = options.apiUser;

        this.token = Buffer.from(`${this.apiUser}:${this.apiKey}`).toString('base64');
    }

    get (uri, data) {
        const options = {
            method: 'GET',
            query: data,
        };

        const fullUrl = new URL(uri, this.baseUrl);

        return this.request(fullUrl, options);
    }

    post (uri, data) {
        const options = {
            body: data,
            method: 'POST',
        };

        const fullUrl = new URL(uri, this.baseUrl);

        return this.request(fullUrl, options);
    }

    request (fullUrl, options) {
        const defaults = {
            headers: {
                Authorization: `Basic ${this.token}`,
            },
            json: true,
        };

        return got(fullUrl, {
            ...defaults,
            options,
        });
    }
}

module.exports = Request;
