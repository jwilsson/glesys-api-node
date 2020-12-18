'use strict';

const Api = require('../../lib/endpoints/api');
const Request = require('../../lib/request');

describe('endpoints/api', () => {
    let request;
    let api;

    beforeEach(() => {
        request = new Request();
        api = new Api(request);
    });

    test('listFunctions()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        api.listFunctions();

        expect(spy).toHaveBeenCalledWith('/api/listfunctions');
    });

    test('maintenance()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        api.maintenance();

        expect(spy).toHaveBeenCalledWith('/api/maintenance');
    });

    test('serviceInfo()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        api.serviceInfo();

        expect(spy).toHaveBeenCalledWith('/api/serviceinfo');
    });
});
