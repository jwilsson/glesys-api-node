'use strict';

const Network = require('../../lib/endpoints/network');
const Request = require('../../lib/request');

describe('endpoints/network', () => {
    let network;
    let request;

    beforeEach(() => {
        request = new Request();
        network = new Network(request);
    });

    test('create()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            datacenter: 'datacenter',
            description: 'description',
        };

        network.create(data);

        expect(spy).toHaveBeenCalledWith('/network/create', data);
    });

    test('delete()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            networkid: 1,
        };

        network.delete(data);

        expect(spy).toHaveBeenCalledWith('/network/delete', data);
    });

    test('details()', () => {
        const spy = global.setupRequestSpy(request, 'get');
        const data = {
            networkid: 1,
        };

        network.details(data);

        expect(spy).toHaveBeenCalledWith('/network/details', data);
    });

    test('edit()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            networkid: 1,
        };

        network.edit(data);

        expect(spy).toHaveBeenCalledWith('/network/edit', data);
    });

    test('list()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        network.list();

        expect(spy).toHaveBeenCalledWith('/network/list');
    });
});
