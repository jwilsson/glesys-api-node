'use strict';

const got = require('got');

class Request {
    constructor (options) {
        options = options || {};

        this.baseUrl = 'https://api.glesys.com';
        this.userAgent = 'https://github.com/jwilsson/glesys-api';

        this.apiKey = options.apiKey;
        this.apiUser = options.apiUser;
    }

    get (url, data) {
        const options = {
            method: 'GET',
            query: data,
        };

        url = this.baseUrl + url;

        return this.request(url, options);
    }

    post (url, data) {
        const options = {
            body: data,
            method: 'POST',
        };

        url = this.baseUrl + url;

        return this.request(url, options);
    }

    request (url, options) {
        const defaults = {
            headers: {
                Authorization: 'Basic ' + new Buffer(this.apiUser + ':' + this.apiKey).toString('base64'),
            },
            json: true,
        };

        options = Object.assign(defaults, options);

        return got(url, options);
    }
}

module.exports = Request;
