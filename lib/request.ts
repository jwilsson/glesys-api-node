import got from 'got';
import { URL } from 'node:url';
import { Options } from './types/Options.js';

class Request {
    static #baseUrl = 'https://api.glesys.com';
    static #userAgent = 'https://github.com/jwilsson/glesys-api';

    private apiKey: string;
    private apiUser: string;
    private token: string;

    public constructor(options: Options) {
        this.apiKey = options.apiKey;
        this.apiUser = options.apiUser;

        this.token = Buffer.from(`${this.apiUser}:${this.apiKey}`).toString('base64');
    }

    public get(uri: string, data: Record<string, unknown> = {}) {
        const options = {
            method: 'GET',
            searchParams: data,
        };

        return this.request(uri, options);
    }

    public post(uri: string, data: Record<string, unknown> = {}) {
        const options = {
            json: data,
            method: 'POST',
        };

        return this.request(uri, options);
    }

    public request(uri: string, options: Record<string, unknown> = {}) {
        const defaults = {
            headers: {
                'Authorization': `Basic ${this.token}`,
                'User-Agent': Request.#userAgent,
            },
            responseType: 'json',
        };

        const url = new URL(uri, Request.#baseUrl);

        return got(url, {
            ...defaults,
            ...options,
        });
    }
}

export default Request;
