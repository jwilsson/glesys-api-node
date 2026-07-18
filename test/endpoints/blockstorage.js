import BlockStorage from '../../lib/endpoints/blockstorage.js';
import Request from '../../lib/request.js';

describe('endpoints/blockstorage', () => {
    let blockStorage;
    let request;

    beforeEach(() => {
        request = new Request();
        blockStorage = new BlockStorage(request);
    });

    test('attach()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'serverid',
            volumeid: 'volumeid',
        };

        blockStorage.attach(data);

        expect(spy).toHaveBeenCalledWith('/blockstorage/attach', data);
    });

    test('create()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            datacenter: 'datacenter',
            name: 'name',
            projectkey: 'projectkey',
            size: 10,
            tier: 'tier',
        };

        blockStorage.create(data);

        expect(spy).toHaveBeenCalledWith('/blockstorage/create', data);
    });

    test('delete()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            volumeid: 'volumeid',
        };

        blockStorage.delete(data);

        expect(spy).toHaveBeenCalledWith('/blockstorage/delete', data);
    });

    test('detach()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            volumeid: 'volumeid',
        };

        blockStorage.detach(data);

        expect(spy).toHaveBeenCalledWith('/blockstorage/detach', data);
    });

    test('details()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');
        const data = {
            volumeid: 'volumeid',
        };

        blockStorage.details(data);

        expect(spy).toHaveBeenCalledWith('/blockstorage/details', data);
    });

    test('edit()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
            volumeid: 'volumeid',
        };

        blockStorage.edit(data);

        expect(spy).toHaveBeenCalledWith('/blockstorage/edit', data);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');
        const data = {
            projectkey: 'projectkey',
        };

        blockStorage.list(data);

        expect(spy).toHaveBeenCalledWith('/blockstorage/list', data);
    });

    test('listTiers()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        blockStorage.listTiers();

        expect(spy).toHaveBeenCalledWith('/blockstorage/listtiers');
    });

    test('resize()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            size: 20,
            volumeid: 'volumeid',
        };

        blockStorage.resize(data);

        expect(spy).toHaveBeenCalledWith('/blockstorage/resize', data);
    });
});
