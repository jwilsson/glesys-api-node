import Api from '../../lib/endpoints/api.js';
import Request from '../../lib/request.js';

describe('endpoints/api', () => {
    let request;
    let api;

    beforeEach(() => {
        request = new Request();
        api = new Api(request);
    });

    test('listFunctions()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        api.listFunctions();

        expect(spy).toHaveBeenCalledWith('/api/listfunctions');
    });

    test('maintenance()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        api.maintenance();

        expect(spy).toHaveBeenCalledWith('/api/maintenance');
    });

    test('serviceInfo()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        api.serviceInfo();

        expect(spy).toHaveBeenCalledWith('/api/serviceinfo');
    });
});
