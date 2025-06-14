import Database from '../../lib/endpoints/database.js';
import Request from '../../lib/request.js';

describe('endpoints/database', () => {
    let database;
    let request;

    beforeEach(() => {
        request = new Request();
        database = new Database(request);
    });

    test('connectionDetails()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            id: 'id',
        };

        database.connectionDetails(data);

        expect(spy).toHaveBeenCalledWith('/database/connectiondetails', data);
    });

    test('create()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        database.create(data);

        expect(spy).toHaveBeenCalledWith('/database/create', data);
    });

    test('delete()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            id: 'id',
        };

        database.delete(data);

        expect(spy).toHaveBeenCalledWith('/database/delete', data);
    });

    test('details()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            id: 'id',
        };

        database.details(data);

        expect(spy).toHaveBeenCalledWith('/database/details', data);
    });

    test('estimatedCost()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            databaseid: 'databaseid',
        };

        database.estimatedCost(data);

        expect(spy).toHaveBeenCalledWith('/database/estimatedcost', data);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');

        database.list();

        expect(spy).toHaveBeenCalledWith('/database/list');
    });

    test('listPlans()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');

        database.listPlans();

        expect(spy).toHaveBeenCalledWith('/database/listplans');
    });

    test('updateAllowList()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            id: 'id',
        };

        database.updateAllowList(data);

        expect(spy).toHaveBeenCalledWith('/database/updateallowlist', data);
    });
});
