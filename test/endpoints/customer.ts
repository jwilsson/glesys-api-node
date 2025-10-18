import { beforeEach, describe, expect, test } from 'vitest';
import Customer from '../../lib/endpoints/customer.js';
import Request from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/customer', () => {
    let customer: Customer;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        customer = new Customer(request);
    });

    test('createProject()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        await customer.createProject(data);

        expect(spy).toHaveBeenCalledWith('/customer/createproject', data);
    });

    test('editCollaborator()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            collaboratorid: 1,
        };

        await customer.editCollaborator(data);

        expect(spy).toHaveBeenCalledWith('/customer/editcollaborator', data);
    });

    test('listCollaborators()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await customer.listCollaborators();

        expect(spy).toHaveBeenCalledWith('/customer/listcollaborators');
    });

    test('listProjects()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await customer.listProjects();

        expect(spy).toHaveBeenCalledWith('/customer/listprojects');
    });

    test('removeCollaborator()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            collaboratorid: 1,
        };

        await customer.removeCollaborator(data);

        expect(spy).toHaveBeenCalledWith('/customer/removecollaborator', data);
    });

    test('settings()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        await customer.settings(data);

        expect(spy).toHaveBeenCalledWith('/customer/settings', data);
    });
});
