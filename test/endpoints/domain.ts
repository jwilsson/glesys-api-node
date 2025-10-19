import { beforeEach, describe, expect, test } from 'vitest';
import { Domain } from '../../lib/endpoints/domain.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/domain', () => {
    let domain: Domain;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        domain = new Domain(request);
    });

    test('add()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.add(data);

        expect(spy).toHaveBeenCalledWith('/domain/add', data);
    });

    test('addRecord()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.addRecord(data);

        expect(spy).toHaveBeenCalledWith('/domain/addrecord', data);
    });

    test('allowedArguments()',async () => {
        const spy = setupRequestSpy(request, 'get');

        await domain.allowedArguments();

        expect(spy).toHaveBeenCalledWith('/domain/allowedarguments');
    });

    test('available()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            search: 'search',
        };

        await domain.available(data);

        expect(spy).toHaveBeenCalledWith('/domain/available', data);
    });

    test('changeNameServers()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.changeNameServers(data);

        expect(spy).toHaveBeenCalledWith('/domain/changenameservers', data);
    });

    test('delete()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.delete(data);

        expect(spy).toHaveBeenCalledWith('/domain/delete', data);
    });

    test('deleteRecord()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            recordid: 1,
        };

        await domain.deleteRecord(data);

        expect(spy).toHaveBeenCalledWith('/domain/deleterecord', data);
    });

    test('details()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.details(data);

        expect(spy).toHaveBeenCalledWith('/domain/details', data);
    });

    test('edit()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.edit(data);

        expect(spy).toHaveBeenCalledWith('/domain/edit', data);
    });

    test('enableDNSSEC()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.enableDNSSEC(data);

        expect(spy).toHaveBeenCalledWith('/domain/enablednssec', data);
    });

    test('export()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.export(data);

        expect(spy).toHaveBeenCalledWith('/domain/export', data);
    });

    test('generateAuthCode()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.generateAuthCode(data);

        expect(spy).toHaveBeenCalledWith('/domain/generateauthcode', data);
    });

    test('list()',async () => {
        const spy = setupRequestSpy(request, 'get');

        await domain.list();

        expect(spy).toHaveBeenCalledWith('/domain/list');
    });

    test('listRecords()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.listRecords(data);

        expect(spy).toHaveBeenCalledWith('/domain/listrecords', data);
    });

    test('prepareForDNSSEC()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.prepareForDNSSEC(data);

        expect(spy).toHaveBeenCalledWith('/domain/preparefordnssec', data);
    });

    test('priceList()',async () => {
        const spy = setupRequestSpy(request, 'get');

        await domain.priceList();

        expect(spy).toHaveBeenCalledWith('/domain/pricelist');
    });

    test('publishDNSKEY()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.publishDNSKEY(data);

        expect(spy).toHaveBeenCalledWith('/domain/publishdnskey', data);
    });

    test('register()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.register(data);

        expect(spy).toHaveBeenCalledWith('/domain/register', data);
    });

    test('renew()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.renew(data);

        expect(spy).toHaveBeenCalledWith('/domain/renew', data);
    });

    test('setAutoRenew()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.setAutoRenew(data);

        expect(spy).toHaveBeenCalledWith('/domain/setautorenew', data);
    });

    test('transfer()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.transfer(data);

        expect(spy).toHaveBeenCalledWith('/domain/transfer', data);
    });

    test('updateRecord()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            recordid: 1,
        };

        await domain.updateRecord(data);

        expect(spy).toHaveBeenCalledWith('/domain/updaterecord', data);
    });

    test('unpublishDNSKEY()',async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await domain.unpublishDNSKEY(data);

        expect(spy).toHaveBeenCalledWith('/domain/unpublishdnskey', data);
    });
});
