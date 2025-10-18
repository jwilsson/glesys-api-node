import { beforeEach, describe, expect, test } from 'vitest';
import FileStorage from '../../lib/endpoints/filestorage.js';
import Request from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/filestorage', () => {
    let fileStorage: FileStorage;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        fileStorage = new FileStorage(request);
    });

    test('createVolume()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            datacenter: 'datacenter',
            planid: 'planid',
        };

        await fileStorage.createVolume(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/createvolume', data);
    });

    test('editVolume()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            volumeid: 1,
        };

        await fileStorage.editVolume(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/editvolume', data);
    });

    test('deleteVolume()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            volumeid: 1,
        };

        await fileStorage.deleteVolume(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/deletevolume', data);
    });

    test('listPlans()', async () => {
        const spy = setupRequestSpy(request, 'get');
        const data = {
            volumeid: 1,
        };

        await fileStorage.listPlans(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/listplans', data);
    });

    test('listVolumes()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await fileStorage.listVolumes();

        expect(spy).toHaveBeenCalledWith('/filestorage/listvolumes');
    });

    test('resourceUsage()', async () => {
        const spy = setupRequestSpy(request, 'get');
        const data = {
            volumeid: 1,
        };

        await fileStorage.resourceUsage(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/resourceusage', data);
    });

    test('volumeDetails()', async () => {
        const spy = setupRequestSpy(request, 'get');
        const data = {
            volumeid: 1,
        };

        await fileStorage.volumeDetails(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/volumedetails', data);
    });
});
