'use strict';

const Customer = require('../../lib/endpoints/customer');
const Request = require('../../lib/request');

describe('endpoints/customer', () => {
    let customer;
    let request;

    beforeEach(() => {
        request = new Request();
        customer = new Customer(request);
    });

    test('createProject()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        customer.createProject(data);

        expect(spy).toHaveBeenCalledWith('/customer/createproject', data);
    });

    test('editCollaborator()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            collaboratorid: 1,
        };

        customer.editCollaborator(data);

        expect(spy).toHaveBeenCalledWith('/customer/editcollaborator', data);
    });

    test('listCollaborators()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        customer.listCollaborators();

        expect(spy).toHaveBeenCalledWith('/customer/listcollaborators');
    });

    test('listProjects()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        customer.listProjects();

        expect(spy).toHaveBeenCalledWith('/customer/listprojects');
    });

    test('removeCollaborator()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            collaboratorid: 1,
        };

        customer.removeCollaborator(data);

        expect(spy).toHaveBeenCalledWith('/customer/removecollaborator', data);
    });

    test('settings()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        customer.settings(data);

        expect(spy).toHaveBeenCalledWith('/customer/settings', data);
    });
});
