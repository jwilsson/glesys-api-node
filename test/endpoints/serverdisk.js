import ServerDisk from '../../lib/endpoints/serverdisk.js';
import Request from '../../lib/request.js';

describe('endpoints/serverdisk', () => {
    let serverDisk;
    let request;

    beforeEach(() => {
        request = new Request();
        serverDisk = new ServerDisk(request);
    });

    test('create()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            name: 'New disk',
            serverid: 'z1',
            sizeingib: 5,
        };

        serverDisk.create(data);

        expect(spy).toHaveBeenCalledWith('/serverdisk/create', data);
    });

    test('delete()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            id: 'z1',
        };

        serverDisk.delete(data);

        expect(spy).toHaveBeenCalledWith('/serverdisk/delete', data);
    });

    test('estimatedCost()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        serverDisk.estimatedCost(data);

        expect(spy).toHaveBeenCalledWith('/serverdisk/estimatedcost', data);
    });

    test('limits()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        serverDisk.limits(data);

        expect(spy).toHaveBeenCalledWith('/serverdisk/limits', data);
    });

    test('reconfigure()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            id: 'z1',
            sizeingib: 5,
        };

        serverDisk.reconfigure(data);

        expect(spy).toHaveBeenCalledWith('/serverdisk/reconfigure', data);
    });

    test('updateName()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            id: 'z1',
            name: 'New name',
        };

        serverDisk.updateName(data);

        expect(spy).toHaveBeenCalledWith('/serverdisk/updatename', data);
    });
});
