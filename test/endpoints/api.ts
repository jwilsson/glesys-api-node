import { beforeEach, describe, expect, test } from 'vitest';
import { Api } from '../../lib/endpoints/api.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/api', () => {
    let api: Api;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        api = new Api(request);
    });

    test('listFunctions()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await api.listFunctions();

        expect(spy).toHaveBeenCalledWith('/api/listfunctions');
    });

    test('maintenance()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await api.maintenance();

        expect(spy).toHaveBeenCalledWith('/api/maintenance');
    });

    test('serviceInfo()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await api.serviceInfo();

        expect(spy).toHaveBeenCalledWith('/api/serviceinfo');
    });
});
