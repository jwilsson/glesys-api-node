import ky from 'ky';
import { URL } from 'node:url';
import { Options } from './types/Options.js';
import { Response } from './types/Response.js';

export class Request {
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

    public get<T>(uri: string, data: Record<string, unknown> = {}): Promise<Response<T>> {
        const options = {
            method: 'GET',
            searchParams: data,
        };

        return this.request(uri, options);
    }

    public post<T>(uri: string, data: Record<string, unknown> = {}): Promise<Response<T>> {
        const options = {
            body: data,
            method: 'POST',
        };

        return this.request(uri, options);
    }

    public async request<T>(uri: string, options: Record<string, unknown> = {}): Promise<Response<T>> {
        const defaults = {
            headers: {
                'Authorization': `Basic ${this.token}`,
                'User-Agent': Request.#userAgent,
            },
        };

        const url = new URL(uri, Request.#baseUrl);
        const response = await ky(url, {
            ...defaults,
            ...options,
        });

        return {
            body: await response.json(),
            headers: response.headers,
            status: response.status,
            statusText: response.statusText,
        };
    }
}
