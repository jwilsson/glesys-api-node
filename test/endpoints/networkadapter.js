'use strict';

const NetworkAdapter = require('../../lib/endpoints/networkadapter');
const Request = require('../../lib/request');

describe('endpoints/networkadapter', () => {
    const request = new Request();
    const getSpy = jest.spyOn(request, 'get').mockImplementation();
    const postSpy = jest.spyOn(request, 'post').mockImplementation();

    test('create()', () => {
        const networkAdapter = new NetworkAdapter(request);
        const data = {
            serverid: 1,
        };

        networkAdapter.create(data);

        expect(postSpy).toHaveBeenCalledWith('/networkadapter/create', data);
    });

    test('delete()', () => {
        const networkAdapter = new NetworkAdapter(request);
        const data = {
            networkadapterid: 1,
        };

        networkAdapter.delete(data);

        expect(postSpy).toHaveBeenCalledWith('/networkadapter/delete', data);
    });

    test('details()', () => {
        const networkAdapter = new NetworkAdapter(request);
        const data = {
            networkadapterid: 1,
        };

        networkAdapter.details(data);

        expect(getSpy).toHaveBeenCalledWith('/networkadapter/details', data);
    });

    test('edit()', () => {
        const networkAdapter = new NetworkAdapter(request);
        const data = {
            networkadapterid: 1,
        };

        networkAdapter.edit(data);

        expect(postSpy).toHaveBeenCalledWith('/networkadapter/edit', data);
    });
});
