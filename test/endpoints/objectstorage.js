'use strict';

const ObjectStorage = require('../../lib/endpoints/objectstorage');
const Request = require('../../lib/request');

describe('endpoints/objectstorage', () => {
    let objectStorage;
    let request;

    beforeEach(() => {
        request = new Request();
        objectStorage = new ObjectStorage(request);
    });

    test('createCredential()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            description: 'description',
            instanceid: 'os-123',
        };

        objectStorage.createCredential(data);

        expect(spy).toHaveBeenCalledWith('/objectstorage/createcredential', data);
    });

    test('createInstance()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            createinitialbucket: true,
            datacenter: 'dc-sto1',
            projectkey: 'cl123',
        };

        objectStorage.createInstance(data);

        expect(spy).toHaveBeenCalledWith('/objectstorage/createinstance', data);
    });

    test('deleteCredential()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            credentialid: 'abc123',
            instanceid: 'os-123',
        };

        objectStorage.deleteCredential(data);

        expect(spy).toHaveBeenCalledWith('/objectstorage/deletecredential', data);
    });

    test('deleteInstance()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            instanceid: 'os-123',
        };

        objectStorage.deleteInstance(data);

        expect(spy).toHaveBeenCalledWith('/objectstorage/deleteinstance', data);
    });

    test('editInstance()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            description: 'new description',
            instanceid: 'os-123',
        };

        objectStorage.editInstance(data);

        expect(spy).toHaveBeenCalledWith('/objectstorage/editinstance', data);
    });

    test('estimatedCost()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            averageUsageInGib: 10,
            instanceid: 'os-123',
        };

        objectStorage.estimatedCost(data);

        expect(spy).toHaveBeenCalledWith('/objectstorage/estimatedcost', data);
    });

    test('instanceDetails()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            instanceid: 'os-123',
        };

        objectStorage.instanceDetails(data);

        expect(spy).toHaveBeenCalledWith('/objectstorage/instancedetails', data);
    });

    test('listInstances()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        objectStorage.listInstances();

        expect(spy).toHaveBeenCalledWith('/objectstorage/listinstances');
    });
});
