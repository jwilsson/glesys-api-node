import PrivateNetwork from '../../lib/endpoints/privatenetwork.js';
import Request from '../../lib/request.js';

describe('endpoints/privatenetwork', () => {
    let privateNetwork;
    let request;

    beforeEach(() => {
        request = new Request();
        privateNetwork = new PrivateNetwork(request);
    });

    test('create()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        privateNetwork.create(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/create', data);
    });

    test('createSegment()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        privateNetwork.createSegment(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/createsegment', data);
    });

    test('delete()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            privatenetworkid: 'privatenetworkid',
        };

        privateNetwork.delete(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/delete', data);
    });

    test('deleteSegment()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            id: 'id',
        };

        privateNetwork.deleteSegment(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/deletesegment', data);
    });

    test('details()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');
        const data = {
            privatenetworkid: 'privatenetworkid',
        };

        privateNetwork.details(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/details', data);
    });

    test('edit()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            privatenetworkid: 'privatenetworkid',
        };

        privateNetwork.edit(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/edit', data);
    });

    test('editSegment()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            id: 'id',
        };

        privateNetwork.editSegment(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/editsegment', data);
    });

    test('estimatedCost()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            privatenetworkid: 'privatenetworkid',
        };

        privateNetwork.estimatedCost(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/estimatedcost', data);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        privateNetwork.list();

        expect(spy).toHaveBeenCalledWith('/privatenetwork/list');
    });

    test('listSegments()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');
        const data = {
            privatenetworkid: 'privatenetworkid',
        };

        privateNetwork.listSegments(data);

        expect(spy).toHaveBeenCalledWith('/privatenetwork/listsegments', data);
    });
});
