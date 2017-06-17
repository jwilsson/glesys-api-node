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
    }

    get (uri, data) {
        const options = {
            method: 'GET',
            query: data,
        };

        return this.request(uri, options);
    }

    post (uri, data) {
        const options = {
            body: data,
            method: 'POST',
        };

        return this.request(uri, options);
    }

    request (uri, options) {
        let token = `${ this.apiUser }:${ this.apiKey }`;

        /**
         * We check for Buffer.alloc since Buffer.from will always be true
         * because it's inherithing from Uint8Array. Checking for Buffer.alloc
         * is fine as it was added at the same time as Buffer.from.
         */

        // eslint-disable-next-line node/no-deprecated-api
        token = Buffer.alloc ? Buffer.from(token) : new Buffer(token);

        const fullUrl = url.resolve(this.baseUrl, uri);
        const defaults = {
            headers: {
                Authorization: `Basic ${ token.toString('base64') }`,
            },
            json: true,
        };

        options = Object.assign(defaults, options);

        return got(fullUrl, options);
    }
}

module.exports = Request;
