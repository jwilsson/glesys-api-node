import got from 'got';
import { URL } from 'node:url';

class Request {
    static #baseUrl = 'https://api.glesys.com';
    static #userAgent = 'https://github.com/jwilsson/glesys-api';

    constructor(options = {}) {
        this.apiKey = options.apiKey;
        this.apiUser = options.apiUser;

        this.token = Buffer.from(`${this.apiUser}:${this.apiKey}`).toString('base64');
    }

    get(uri, data) {
        const options = {
            method: 'GET',
            searchParams: data,
        };

        return this.request(uri, options);
    }

    post(uri, data) {
        const options = {
            json: data,
            method: 'POST',
        };

        return this.request(uri, options);
    }

    request(url, options) {
        const defaults = {
            headers: {
                'Authorization': `Basic ${this.token}`,
                'User-Agent': Request.#userAgent,
            },
            responseType: 'json',
        };

        url = new URL(url, Request.#baseUrl);

        return got(url, {
            ...defaults,
            ...options,
        });
    }
}

export default Request;
