import NetworkAdapter from '../../lib/endpoints/networkadapter';
import Request from '../../lib/request';

describe('endpoints/networkadapter', () => {
    let networkAdapter;
    let request;

    beforeEach(() => {
        request = new Request();
        networkAdapter = new NetworkAdapter(request);
    });

    test('create()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            serverid: 1,
        };

        networkAdapter.create(data);

        expect(spy).toHaveBeenCalledWith('/networkadapter/create', data);
    });

    test('delete()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            networkadapterid: 1,
        };

        networkAdapter.delete(data);

        expect(spy).toHaveBeenCalledWith('/networkadapter/delete', data);
    });

    test('details()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');
        const data = {
            networkadapterid: 1,
        };

        networkAdapter.details(data);

        expect(spy).toHaveBeenCalledWith('/networkadapter/details', data);
    });

    test('edit()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            networkadapterid: 1,
        };

        networkAdapter.edit(data);

        expect(spy).toHaveBeenCalledWith('/networkadapter/edit', data);
    });
});
