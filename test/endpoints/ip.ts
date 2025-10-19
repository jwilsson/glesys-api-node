import { beforeEach, describe, expect, test } from 'vitest';
import { Ip } from '../../lib/endpoints/ip.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/ip', () => {
    let ip: Ip;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        ip = new Ip(request);
    });

    test('add()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            ipaddress: '127.0.0.1',
        };

        await ip.add(data);

        expect(spy).toHaveBeenCalledWith('/ip/add', data);
    });

    test('details()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            ipaddress: '127.0.0.1',
        };

        await ip.details(data);

        expect(spy).toHaveBeenCalledWith('/ip/details', data);
    });

    test('estimatedCost()', async () => {
        const spy = setupRequestSpy(request, 'post');

        await ip.estimatedCost();

        expect(spy).toHaveBeenCalledWith('/ip/estimatedcost');
    });

    test('listFree()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            ipversion: 4,
        };

        await ip.listFree(data);

        expect(spy).toHaveBeenCalledWith('/ip/listfree', data);
    });

    test('listOwn()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            ipversion: 4,
        };

        await ip.listOwn(data);

        expect(spy).toHaveBeenCalledWith('/ip/listown', data);
    });

    test('release()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            ipaddress: '127.0.0.1',
        };

        await ip.release(data);

        expect(spy).toHaveBeenCalledWith('/ip/release', data);
    });

    test('remove()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            ipaddress: '127.0.0.1',
        };

        await ip.remove(data);

        expect(spy).toHaveBeenCalledWith('/ip/remove', data);
    });

    test('resetPTR()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            ipaddress: '127.0.0.1',
        };

        await ip.resetPTR(data);

        expect(spy).toHaveBeenCalledWith('/ip/resetptr', data);
    });

    test('setPTR()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            ipaddress: '127.0.0.1',
        };

        await ip.setPTR(data);

        expect(spy).toHaveBeenCalledWith('/ip/setptr', data);
    });

    test('take()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            ipaddress: '127.0.0.1',
        };

        await ip.take(data);

        expect(spy).toHaveBeenCalledWith('/ip/take', data);
    });
});
