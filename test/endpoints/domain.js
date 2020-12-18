'use strict';

const Domain = require('../../lib/endpoints/domain');
const Request = require('../../lib/request');

describe('endpoints/domain', () => {
    let request;
    let domain;

    beforeEach(() => {
        request = new Request();
        domain = new Domain(request);
    });

    test('add()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.add(data);

        expect(spy).toHaveBeenCalledWith('/domain/add', data);
    });

    test('addRecord()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.addRecord(data);

        expect(spy).toHaveBeenCalledWith('/domain/addrecord', data);
    });

    test('allowedArguments()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        domain.allowedArguments();

        expect(spy).toHaveBeenCalledWith('/domain/allowedarguments');
    });

    test('available()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            search: 'search',
        };

        domain.available(data);

        expect(spy).toHaveBeenCalledWith('/domain/available', data);
    });

    test('changeNameServers()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.changeNameServers(data);

        expect(spy).toHaveBeenCalledWith('/domain/changenameservers', data);
    });

    test('delete()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.delete(data);

        expect(spy).toHaveBeenCalledWith('/domain/delete', data);
    });

    test('deleteRecord()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            recordid: 1,
        };

        domain.deleteRecord(data);

        expect(spy).toHaveBeenCalledWith('/domain/deleterecord', data);
    });

    test('details()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.details(data);

        expect(spy).toHaveBeenCalledWith('/domain/details', data);
    });

    test('edit()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.edit(data);

        expect(spy).toHaveBeenCalledWith('/domain/edit', data);
    });

    test('legacyWebHosting()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        domain.legacyWebHosting();

        expect(spy).toHaveBeenCalledWith('/domain/legacywebhosting');
    });

    test('list()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        domain.list();

        expect(spy).toHaveBeenCalledWith('/domain/list');
    });

    test('listRecords()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.listRecords(data);

        expect(spy).toHaveBeenCalledWith('/domain/listrecords', data);
    });

    test('priceList()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        domain.priceList();

        expect(spy).toHaveBeenCalledWith('/domain/pricelist');
    });

    test('register()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.register(data);

        expect(spy).toHaveBeenCalledWith('/domain/register', data);
    });

    test('renew()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.renew(data);

        expect(spy).toHaveBeenCalledWith('/domain/renew', data);
    });

    test('setAutoRenew()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.setAutoRenew(data);

        expect(spy).toHaveBeenCalledWith('/domain/setautorenew', data);
    });

    test('transfer()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.transfer(data);

        expect(spy).toHaveBeenCalledWith('/domain/transfer', data);
    });

    test('updateRecord()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            recordid: 1,
        };

        domain.updateRecord(data);

        expect(spy).toHaveBeenCalledWith('/domain/updaterecord', data);
    });
});
