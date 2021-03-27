import FileStorage from '../../lib/endpoints/filestorage.js';
import Request from '../../lib/request.js';

describe('endpoints/filestorage', () => {
    let fileStorage;
    let request;

    beforeEach(() => {
        request = new Request();
        fileStorage = new FileStorage(request);
    });

    test('createVolume()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            datacenter: 'datacenter',
            planid: 'planid',
        };

        fileStorage.createVolume(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/createvolume', data);
    });

    test('editVolume()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            volumeid: 1,
        };

        fileStorage.editVolume(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/editvolume', data);
    });

    test('deleteVolume()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            volumeid: 1,
        };

        fileStorage.deleteVolume(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/deletevolume', data);
    });

    test('listPlans()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');
        const data = {
            volumeid: 1,
        };

        fileStorage.listPlans(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/listplans', data);
    });

    test('listVolumes()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        fileStorage.listVolumes();

        expect(spy).toHaveBeenCalledWith('/filestorage/listvolumes');
    });

    test('resourceUsage()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');
        const data = {
            volumeid: 1,
        };

        fileStorage.resourceUsage(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/resourceusage', data);
    });

    test('volumeDetails()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');
        const data = {
            volumeid: 1,
        };

        fileStorage.volumeDetails(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/volumedetails', data);
    });
});
