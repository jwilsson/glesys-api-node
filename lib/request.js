'use strict';

const url = require('url');
const got = require('got');

class Request {
    constructor (options) {
        options = options || {};

        this.baseUrl = 'https://api.glesys.com';
        this.userAgent = 'https://github.com/jwilsson/glesys-api';

        this.apiKey = options.apiKey;
        this.apiUser = options.apiUser;

        const token = `${ this.apiUser }:${ this.apiKey }`;

        /**
         * We check for Buffer.alloc since Buffer.from will always be true
         * because it's inherithing from Uint8Array. Checking for Buffer.alloc
         * is fine as it was added at the same time as Buffer.from.
         */
        // eslint-disable-next-line node/no-deprecated-api
        this.token = Buffer.alloc ? Buffer.from(token) : new Buffer(token);
        this.token = this.token.toString('base64');
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
                Authorization: `Basic ${ this.token }`,
            },
            json: true,
        };

        options = Object.assign(defaults, options);

        return got(fullUrl, options);
    }
}

module.exports = Request;
