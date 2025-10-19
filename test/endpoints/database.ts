import { beforeEach, describe, expect, test } from 'vitest';
import { Database } from '../../lib/endpoints/database.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/database', () => {
    let database: Database;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        database = new Database(request);
    });

    test('connectionDetails()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            id: 'id',
        };

        await database.connectionDetails(data);

        expect(spy).toHaveBeenCalledWith('/database/connectiondetails', data);
    });

    test('create()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        await database.create(data);

        expect(spy).toHaveBeenCalledWith('/database/create', data);
    });

    test('delete()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            id: 'id',
        };

        await database.delete(data);

        expect(spy).toHaveBeenCalledWith('/database/delete', data);
    });

    test('details()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            id: 'id',
        };

        await database.details(data);

        expect(spy).toHaveBeenCalledWith('/database/details', data);
    });

    test('estimatedCost()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            databaseid: 'databaseid',
        };

        await database.estimatedCost(data);

        expect(spy).toHaveBeenCalledWith('/database/estimatedcost', data);
    });

    test('list()', async () => {
        const spy = setupRequestSpy(request, 'post');

        await database.list();

        expect(spy).toHaveBeenCalledWith('/database/list');
    });

    test('listPlans()', async () => {
        const spy = setupRequestSpy(request, 'post');

        await database.listPlans();

        expect(spy).toHaveBeenCalledWith('/database/listplans');
    });

    test('updateAllowList()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            id: 'id',
        };

        await database.updateAllowList(data);

        expect(spy).toHaveBeenCalledWith('/database/updateallowlist', data);
    });
});
