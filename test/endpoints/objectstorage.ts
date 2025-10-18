import { beforeEach, describe, expect, test } from 'vitest';
import ObjectStorage from '../../lib/endpoints/objectstorage.js';
import Request from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/objectstorage', () => {
    let objectStorage: ObjectStorage;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        objectStorage = new ObjectStorage(request);
    });

    test('createCredential()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            description: 'description',
            instanceid: 'os-123',
        };

        await objectStorage.createCredential(data);

        expect(spy).toHaveBeenCalledWith('/objectstorage/createcredential', data);
    });

    test('createInstance()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            createinitialbucket: true,
            datacenter: 'dc-sto1',
            projectkey: 'cl123',
        };

        await objectStorage.createInstance(data);

        expect(spy).toHaveBeenCalledWith('/objectstorage/createinstance', data);
    });

    test('deleteCredential()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            credentialid: 'abc123',
            instanceid: 'os-123',
        };

        await objectStorage.deleteCredential(data);

        expect(spy).toHaveBeenCalledWith('/objectstorage/deletecredential', data);
    });

    test('deleteInstance()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            instanceid: 'os-123',
        };

        await objectStorage.deleteInstance(data);

        expect(spy).toHaveBeenCalledWith('/objectstorage/deleteinstance', data);
    });

    test('editInstance()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            description: 'new description',
            instanceid: 'os-123',
        };

        await objectStorage.editInstance(data);

        expect(spy).toHaveBeenCalledWith('/objectstorage/editinstance', data);
    });

    test('estimatedCost()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            averageUsageInGib: 10,
            instanceid: 'os-123',
        };

        await objectStorage.estimatedCost(data);

        expect(spy).toHaveBeenCalledWith('/objectstorage/estimatedcost', data);
    });

    test('instanceDetails()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            instanceid: 'os-123',
        };

        await objectStorage.instanceDetails(data);

        expect(spy).toHaveBeenCalledWith('/objectstorage/instancedetails', data);
    });

    test('listInstances()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await objectStorage.listInstances();

        expect(spy).toHaveBeenCalledWith('/objectstorage/listinstances');
    });
});
