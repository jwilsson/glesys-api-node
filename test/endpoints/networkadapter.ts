import { beforeEach, describe, expect, test } from 'vitest';
import { NetworkAdapter } from '../../lib/endpoints/networkadapter.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/networkadapter', () => {
    let networkAdapter: NetworkAdapter;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        networkAdapter = new NetworkAdapter(request);
    });

    test('create()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 1,
        };

        await networkAdapter.create(data);

        expect(spy).toHaveBeenCalledWith('/networkadapter/create', data);
    });

    test('delete()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            networkadapterid: 1,
        };

        await networkAdapter.delete(data);

        expect(spy).toHaveBeenCalledWith('/networkadapter/delete', data);
    });

    test('details()', async () => {
        const spy = setupRequestSpy(request, 'get');
        const data = {
            networkadapterid: 1,
        };

        await networkAdapter.details(data);

        expect(spy).toHaveBeenCalledWith('/networkadapter/details', data);
    });

    test('edit()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            networkadapterid: 1,
        };

        await networkAdapter.edit(data);

        expect(spy).toHaveBeenCalledWith('/networkadapter/edit', data);
    });
});
