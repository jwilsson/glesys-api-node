import { jest } from '@jest/globals';

import Request from '../lib/request';

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
        const requestSpy = jest.spyOn(request, 'request').mockImplementation();

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
        const requestSpy = jest.spyOn(request, 'request').mockImplementation();

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

    test('request() sends a request', async () => {
        const request = new Request(authOptions);
        const response = await request.request('https://httpbin.org/headers');

        expect(response.body.headers.Authorization).toBe('Basic dXNlcjprZXk=');
    });
});
