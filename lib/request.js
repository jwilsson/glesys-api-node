'use strict';

const got = require('got');
const url = require('url');

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

        const fullUrl = url.resolve(this.baseUrl, uri);

        return this.request(fullUrl, options);
    }

    post (uri, data) {
        const options = {
            body: data,
            method: 'POST',
        };

        const fullUrl = url.resolve(this.baseUrl, uri);

        return this.request(fullUrl, options);
    }

    request (fullUrl, options) {
        const defaults = {
            headers: {
                Authorization: `Basic ${this.token}`,
            },
            json: true,
        };

        options = Object.assign({}, defaults, options);

        return got(fullUrl, options);
    }
}

module.exports = Request;
