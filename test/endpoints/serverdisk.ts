import { beforeEach, describe, expect, test } from 'vitest';
import { ServerDisk } from '../../lib/endpoints/serverdisk.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/serverdisk', () => {
    let serverDisk: ServerDisk;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        serverDisk = new ServerDisk(request);
    });

    test('create()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            name: 'New disk',
            serverid: 'z1',
            sizeingib: 5,
        };

        await serverDisk.create(data);

        expect(spy).toHaveBeenCalledWith('/serverdisk/create', data);
    });

    test('delete()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            id: 'z1',
        };

        await serverDisk.delete(data);

        expect(spy).toHaveBeenCalledWith('/serverdisk/delete', data);
    });

    test('estimatedCost()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await serverDisk.estimatedCost(data);

        expect(spy).toHaveBeenCalledWith('/serverdisk/estimatedcost', data);
    });

    test('limits()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await serverDisk.limits(data);

        expect(spy).toHaveBeenCalledWith('/serverdisk/limits', data);
    });

    test('reconfigure()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            id: 'z1',
            sizeingib: 5,
        };

        await serverDisk.reconfigure(data);

        expect(spy).toHaveBeenCalledWith('/serverdisk/reconfigure', data);
    });

    test('updateName()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            id: 'z1',
            name: 'New name',
        };

        await serverDisk.updateName(data);

        expect(spy).toHaveBeenCalledWith('/serverdisk/updatename', data);
    });
});
