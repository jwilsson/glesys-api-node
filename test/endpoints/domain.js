import Domain from '../../lib/endpoints/domain.js';
import Request from '../../lib/request.js';

describe('endpoints/domain', () => {
    let request;
    let domain;

    beforeEach(() => {
        request = new Request();
        domain = new Domain(request);
    });

    test('add()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.add(data);

        expect(spy).toHaveBeenCalledWith('/domain/add', data);
    });

    test('addRecord()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.addRecord(data);

        expect(spy).toHaveBeenCalledWith('/domain/addrecord', data);
    });

    test('allowedArguments()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        domain.allowedArguments();

        expect(spy).toHaveBeenCalledWith('/domain/allowedarguments');
    });

    test('available()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            search: 'search',
        };

        domain.available(data);

        expect(spy).toHaveBeenCalledWith('/domain/available', data);
    });

    test('changeNameServers()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.changeNameServers(data);

        expect(spy).toHaveBeenCalledWith('/domain/changenameservers', data);
    });

    test('delete()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.delete(data);

        expect(spy).toHaveBeenCalledWith('/domain/delete', data);
    });

    test('deleteRecord()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            recordid: 1,
        };

        domain.deleteRecord(data);

        expect(spy).toHaveBeenCalledWith('/domain/deleterecord', data);
    });

    test('details()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.details(data);

        expect(spy).toHaveBeenCalledWith('/domain/details', data);
    });

    test('edit()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.edit(data);

        expect(spy).toHaveBeenCalledWith('/domain/edit', data);
    });

    test('enableDNSSEC()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.enableDNSSEC(data);

        expect(spy).toHaveBeenCalledWith('/domain/enablednssec', data);
    });

    test('export()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.export(data);

        expect(spy).toHaveBeenCalledWith('/domain/export', data);
    });

    test('generateAuthCode()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.generateAuthCode(data);

        expect(spy).toHaveBeenCalledWith('/domain/generateauthcode', data);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        domain.list();

        expect(spy).toHaveBeenCalledWith('/domain/list');
    });

    test('listRecords()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.listRecords(data);

        expect(spy).toHaveBeenCalledWith('/domain/listrecords', data);
    });

    test('prepareForDNSSEC()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.prepareForDNSSEC(data);

        expect(spy).toHaveBeenCalledWith('/domain/preparefordnssec', data);
    });

    test('priceList()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        domain.priceList();

        expect(spy).toHaveBeenCalledWith('/domain/pricelist');
    });

    test('publishDNSKEY()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.publishDNSKEY(data);

        expect(spy).toHaveBeenCalledWith('/domain/publishdnskey', data);
    });

    test('register()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.register(data);

        expect(spy).toHaveBeenCalledWith('/domain/register', data);
    });

    test('renew()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.renew(data);

        expect(spy).toHaveBeenCalledWith('/domain/renew', data);
    });

    test('setAutoRenew()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.setAutoRenew(data);

        expect(spy).toHaveBeenCalledWith('/domain/setautorenew', data);
    });

    test('transfer()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.transfer(data);

        expect(spy).toHaveBeenCalledWith('/domain/transfer', data);
    });

    test('updateRecord()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            recordid: 1,
        };

        domain.updateRecord(data);

        expect(spy).toHaveBeenCalledWith('/domain/updaterecord', data);
    });

    test('unpublishDNSKEY()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        domain.unpublishDNSKEY(data);

        expect(spy).toHaveBeenCalledWith('/domain/unpublishdnskey', data);
    });
});
