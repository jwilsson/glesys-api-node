import { beforeEach, describe, expect, test } from 'vitest';
import Network from '../../lib/endpoints/network.js';
import Request from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/network', () => {
    let network: Network;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        network = new Network(request);
    });

    test('create()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            datacenter: 'datacenter',
            description: 'description',
        };

        await network.create(data);

        expect(spy).toHaveBeenCalledWith('/network/create', data);
    });

    test('delete()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            networkid: 1,
        };

        await network.delete(data);

        expect(spy).toHaveBeenCalledWith('/network/delete', data);
    });

    test('details()', async () => {
        const spy = setupRequestSpy(request, 'get');
        const data = {
            networkid: 1,
        };

        await network.details(data);

        expect(spy).toHaveBeenCalledWith('/network/details', data);
    });

    test('edit()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            networkid: 1,
        };

        await network.edit(data);

        expect(spy).toHaveBeenCalledWith('/network/edit', data);
    });

    test('list()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await network.list();

        expect(spy).toHaveBeenCalledWith('/network/list');
    });
});
