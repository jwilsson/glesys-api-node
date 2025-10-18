import { describe, expect, test, vi } from 'vitest';
import Request from '../lib/request.js';
import { Options } from '../lib/types/Options.js';

describe('request', () => {
    const authOptions: Options = {
        apiKey: 'key',
        apiUser: 'user',
    };

    test('constructor sets auth options and creates token', () => {
        const request = new Request(authOptions);

        // @ts-expect-error: Accessing private properties for testing
        expect(request.token).toBe('dXNlcjprZXk=');
    });

    test('get() sets query string and request method', () => {
        const request = new Request(authOptions);
        const requestSpy = vi.spyOn(request, 'request').mockImplementation(vi.fn());

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
        const request = new Request(authOptions);
        const requestSpy = vi.spyOn(request, 'request').mockImplementation(vi.fn());

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

        expect(response.headers['Authorization']).toBe('Basic dXNlcjprZXk=');
    });
});
