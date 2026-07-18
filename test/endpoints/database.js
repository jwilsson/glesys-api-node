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

    test('createDatabase()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            instanceid: 'instanceid',
            name: 'name',
        };

        database.createDatabase(data);

        expect(spy).toHaveBeenCalledWith('/database/createdatabase', data);
    });

    test('createUser()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            instanceid: 'instanceid',
            username: 'username',
        };

        database.createUser(data);

        expect(spy).toHaveBeenCalledWith('/database/createuser', data);
    });

    test('delete()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            id: 'id',
        };

        database.delete(data);

        expect(spy).toHaveBeenCalledWith('/database/delete', data);
    });

    test('deleteDatabase()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            databaseid: 'databaseid',
        };

        database.deleteDatabase(data);

        expect(spy).toHaveBeenCalledWith('/database/deletedatabase', data);
    });

    test('deleteUser()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            userid: 'userid',
        };

        database.deleteUser(data);

        expect(spy).toHaveBeenCalledWith('/database/deleteuser', data);
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

    test('resetUserPassword()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            userid: 'userid',
        };

        database.resetUserPassword(data);

        expect(spy).toHaveBeenCalledWith('/database/resetuserpassword', data);
    });

    test('setUserPermissions()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            permissions: [],
            userid: 'userid',
        };

        database.setUserPermissions(data);

        expect(spy).toHaveBeenCalledWith('/database/setuserpermissions', data);
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
