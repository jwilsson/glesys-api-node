import LoadBalancer from '../../lib/endpoints/loadbalancer.js';
import Request from '../../lib/request.js';

describe('endpoints/loadbalancer', () => {
    let loadBalancer;
    let request;

    beforeEach(() => {
        request = new Request();
        loadBalancer = new LoadBalancer(request);
    });

    test('addBackEnd()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.addBackEnd(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/addbackend', data);
    });

    test('addCertificate()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.addCertificate(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/addcertificate', data);
    });

    test('addFrontEnd()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.addFrontEnd(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/addfrontend', data);
    });

    test('addTarget()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.addTarget(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/addtarget', data);
    });

    test('addToBlacklist()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
            prefix: 'a',
        };

        loadBalancer.addToBlacklist(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/addtoblacklist', data);
    });

    test('create()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            name: 'example',
        };

        loadBalancer.create(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/create', data);
    });

    test('destroy()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.destroy(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/destroy', data);
    });

    test('details()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.details(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/details', data);
    });

    test('disableTarget()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.disableTarget(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/disabletarget', data);
    });

    test('edit()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.edit(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/edit', data);
    });

    test('editBackEnd()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.editBackEnd(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/editbackend', data);
    });

    test('editFrontEnd()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.editFrontEnd(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/editfrontend', data);
    });

    test('editTarget()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.editTarget(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/edittarget', data);
    });

    test('enableTarget()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.enableTarget(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/enabletarget', data);
    });

    test('errors()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.errors(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/errors', data);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        loadBalancer.list();

        expect(spy).toHaveBeenCalledWith('/loadbalancer/list');
    });

    test('listCertificate()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.listCertificate(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/listcertificate', data);
    });

    test('removeBackEnd()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.removeBackEnd(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/removebackend', data);
    });

    test('removeCertificate()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.removeCertificate(data);

        expect(spy).toHaveBeenCalledWith(
            '/loadbalancer/removecertificate',
            data,
        );
    });

    test('removeFromBlacklist()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
            prefix: 'a',
        };

        loadBalancer.removeFromBlacklist(data);

        expect(spy).toHaveBeenCalledWith(
            '/loadbalancer/removefromblacklist',
            data,
        );
    });

    test('removeFrontEnd()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.removeFrontEnd(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/removefrontend', data);
    });

    test('removeTarget()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            loadbalancerid: 1,
        };

        loadBalancer.removeTarget(data);

        expect(spy).toHaveBeenCalledWith('/loadbalancer/removetarget', data);
    });
});
