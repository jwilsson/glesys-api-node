import { beforeEach, describe, expect, test } from 'vitest';
import { LoadBalancer } from '../../lib/endpoints/loadbalancer.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/loadbalancer', () => {
    let loadBalancer: LoadBalancer;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        loadBalancer = new LoadBalancer(request);
    });

    test('addBackEnd()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.addBackEnd(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/addbackend', data);
    });

    test('addCertificate()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.addCertificate(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/addcertificate', data);
    });

    test('addFrontEnd()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.addFrontEnd(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/addfrontend', data);
    });

    test('addTarget()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.addTarget(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/addtarget', data);
    });

    test('addToBlocklist()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
            prefix: 'a',
        };

        await loadBalancer.addToBlocklist(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/addtoblocklist', data);
    });

    test('create()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            name: 'example',
        };

        await loadBalancer.create(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/create', data);
    });

    test('destroy()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.destroy(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/destroy', data);
    });

    test('details()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.details(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/details', data);
    });

    test('disableTarget()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.disableTarget(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/disabletarget', data);
    });

    test('edit()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.edit(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/edit', data);
    });

    test('editBackEnd()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.editBackEnd(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/editbackend', data);
    });

    test('editFrontEnd()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.editFrontEnd(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/editfrontend', data);
    });

    test('editTarget()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.editTarget(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/edittarget', data);
    });

    test('enableTarget()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.enableTarget(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/enabletarget', data);
    });

    test('errors()', async () => {
        const spy = setupRequestSpy(request, 'get');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.errors(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/errors', data);
    });

    test('list()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await loadBalancer.list();

        expect(spy).toHaveBeenCalledWith('/loadbalancer/list');
    });

    test('listCertificate()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.listCertificate(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/listcertificate', data);
    });

    test('removeBackEnd()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.removeBackEnd(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/removebackend', data);
    });

    test('removeCertificate()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.removeCertificate(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/removecertificate', data);
    });

    test('removeFromBlocklist()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
            prefix: 'a',
        };

        await loadBalancer.removeFromBlocklist(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/removefromblocklist', data);
    });

    test('removeFrontEnd()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.removeFrontEnd(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/removefrontend', data);
    });

    test('removeTarget()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        await loadBalancer.removeTarget(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/removetarget', data);
    });
});
