import Ip from '../../lib/endpoints/ip.js';
import Request from '../../lib/request.js';

describe('endpoints/ip', () => {
    let ip;
    let request;

    beforeEach(() => {
        request = new Request();
        ip = new Ip(request);
    });

    test('add()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            ipaddress: '127.0.0.1',
        };

        ip.add(data);

        expect(spy).toHaveBeenCalledWith('/ip/add', data);
    });

    test('details()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            ipaddress: '127.0.0.1',
        };

        ip.details(data);

        expect(spy).toHaveBeenCalledWith('/ip/details', data);
    });

    test('estimatedCost()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');

        ip.estimatedCost();

        expect(spy).toHaveBeenCalledWith('/ip/estimatedcost');
    });

    test('listFree()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            ipversion: 4,
        };

        ip.listFree(data);

        expect(spy).toHaveBeenCalledWith('/ip/listfree', data);
    });

    test('listOwn()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            ipversion: 4,
        };

        ip.listOwn(data);

        expect(spy).toHaveBeenCalledWith('/ip/listown', data);
    });

    test('release()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            ipaddress: '127.0.0.1',
        };

        ip.release(data);

        expect(spy).toHaveBeenCalledWith('/ip/release', data);
    });

    test('remove()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            ipaddress: '127.0.0.1',
        };

        ip.remove(data);

        expect(spy).toHaveBeenCalledWith('/ip/remove', data);
    });

    test('resetPTR()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            ipaddress: '127.0.0.1',
        };

        ip.resetPTR(data);

        expect(spy).toHaveBeenCalledWith('/ip/resetptr', data);
    });

    test('setPTR()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            ipaddress: '127.0.0.1',
        };

        ip.setPTR(data);

        expect(spy).toHaveBeenCalledWith('/ip/setptr', data);
    });

    test('take()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            ipaddress: '127.0.0.1',
        };

        ip.take(data);

        expect(spy).toHaveBeenCalledWith('/ip/take', data);
    });
});
