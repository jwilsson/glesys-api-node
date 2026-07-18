import got from 'got';
import { vi } from 'vitest';

import { Request } from '../lib/request.js';

vi.mock('got', () => ({
    default: vi.fn(),
}));

describe('request', () => {
    const authOptions = {
        apiKey: 'key',
        apiUser: 'user',
    };

    test('constructor sets auth options and creates token', () => {
        const request = new Request(authOptions);

        expect(request.apiKey).toBe(authOptions.apiKey);
        expect(request.apiUser).toBe(authOptions.apiUser);
        expect(request.token).toBe('dXNlcjprZXk=');
    });

    test('get() sets query string and request method', () => {
        const request = new Request({});
        const requestSpy = vi.spyOn(request, 'request').mockImplementation();

        const url = 'https://api.glesys.com/api/serviceinfo';
        const data = {
            foo: 'bar',
        };

        request.get(url, data);

        expect(requestSpy).toHaveBeenCalledWith(
            url,
            expect.objectContaining({
                method: 'GET',
                searchParams: data,
            }),
        );
    });

    test('post() sets body and request method', () => {
        const request = new Request({});
        const requestSpy = vi.spyOn(request, 'request').mockImplementation();

        const url = 'https://api.glesys.com/api/serviceinfo';
        const data = {
            foo: 'bar',
        };

        request.post(url, data);

        expect(requestSpy).toHaveBeenCalledWith(
            url,
            expect.objectContaining({
                json: data,
                method: 'POST',
            }),
        );
    });

    test('request() sends an authenticated JSON request', () => {
        const request = new Request(authOptions);
        request.request('/api/serviceinfo');

        expect(got).toHaveBeenCalledWith(
            new URL('https://api.glesys.com/api/serviceinfo'),
            expect.objectContaining({
                headers: {
                    'Authorization': 'Basic dXNlcjprZXk=',
                    'User-Agent': 'https://github.com/jwilsson/glesys-api',
                },
                responseType: 'json',
            }),
        );
    });
});
