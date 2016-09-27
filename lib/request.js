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
        let token = `${ this.apiUser }:${ this.apiKey }`;

        /**
         * We check for Buffer.alloc since Buffer.from will always be true
         * because it's inherithing from Uint8Array and checking for Buffer.alloc
         * is fine as it was added at the same time.
         */

        // eslint-disable-next-line node/no-deprecated-api
        token = Buffer.alloc ? Buffer.from(token) : new Buffer(token);

        const defaults = {
            headers: {
                Authorization: `Basic ${ token.toString('base64') }`,
            },
            json: true,
        };

        options = Object.assign(defaults, options);

        return got(url, options);
    }
}

module.exports = Request;
