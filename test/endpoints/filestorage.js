'use strict';

const FileStorage = require('../../lib/endpoints/filestorage');
const Request = require('../../lib/request');

describe('endpoints/filestorage', () => {
    let fileStorage;
    let request;

    beforeEach(() => {
        request = new Request();
        fileStorage = new FileStorage(request);
    });

    test('createVolume()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            datacenter: 'datacenter',
            planid: 'planid',
        };

        fileStorage.createVolume(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/createvolume', data);
    });

    test('editVolume()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            volumeid: 1,
        };

        fileStorage.editVolume(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/editvolume', data);
    });

    test('deleteVolume()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            volumeid: 1,
        };

        fileStorage.deleteVolume(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/deletevolume', data);
    });

    test('listPlans()', () => {
        const spy = global.setupRequestSpy(request, 'get');
        const data = {
            volumeid: 1,
        };

        fileStorage.listPlans(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/listplans', data);
    });

    test('listVolumes()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        fileStorage.listVolumes();

        expect(spy).toHaveBeenCalledWith('/filestorage/listvolumes');
    });

    test('resourceUsage()', () => {
        const spy = global.setupRequestSpy(request, 'get');
        const data = {
            volumeid: 1,
        };

        fileStorage.resourceUsage(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/resourceusage', data);
    });

    test('volumeDetails()', () => {
        const spy = global.setupRequestSpy(request, 'get');
        const data = {
            volumeid: 1,
        };

        fileStorage.volumeDetails(data);

        expect(spy).toHaveBeenCalledWith('/filestorage/volumedetails', data);
    });
});
