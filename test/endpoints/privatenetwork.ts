import { beforeEach, describe, expect, test } from 'vitest';
import { PrivateNetwork } from '../../lib/endpoints/privatenetwork.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/privatenetwork', () => {
    let privateNetwork: PrivateNetwork;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        privateNetwork = new PrivateNetwork(request);
    });

    test('create()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        await privateNetwork.create(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/create', data);
    });

    test('createSegment()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        await privateNetwork.createSegment(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/createsegment', data);
    });

    test('delete()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            privatenetworkid: 'privatenetworkid',
        };

        await privateNetwork.delete(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/delete', data);
    });

    test('deleteSegment()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            id: 'id',
        };

        await privateNetwork.deleteSegment(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/deletesegment', data);
    });

    test('details()', async () => {
        const spy = setupRequestSpy(request, 'get');
        const data = {
            privatenetworkid: 'privatenetworkid',
        };

        await privateNetwork.details(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/details', data);
    });

    test('edit()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            privatenetworkid: 'privatenetworkid',
        };

        await privateNetwork.edit(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/edit', data);
    });

    test('editSegment()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            id: 'id',
        };

        await privateNetwork.editSegment(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/editsegment', data);
    });

    test('estimatedCost()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            privatenetworkid: 'privatenetworkid',
        };

        await privateNetwork.estimatedCost(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/estimatedcost', data);
    });

    test('list()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await privateNetwork.list();

        expect(spy).toHaveBeenCalledWith('/privatenetwork/list');
    });

    test('listSegments()', async () => {
        const spy = setupRequestSpy(request, 'get');
        const data = {
            privatenetworkid: 'privatenetworkid',
        };

        await privateNetwork.listSegments(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/listsegments', data);
    });
});
