import { Shipment } from '../../lib/endpoints/shipment.js';
import { Request } from '../../lib/request.js';

describe('endpoints/shipment', () => {
    let request;
    let shipment;

    beforeEach(() => {
        request = new Request();
        shipment = new Shipment(request);
    });

    test('cancel()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            key: 'abc123',
        };

        shipment.cancel(data);

        expect(spy).toHaveBeenCalledWith('/shipment/cancel', data);
    });

    test('create()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            datacenter: 'Falkenberg',
        };

        shipment.create(data);

        expect(spy).toHaveBeenCalledWith('/shipment/create', data);
    });

    test('edit()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            key: 'abc123',
            trackingid: 'XYZ789',
        };

        shipment.edit(data);

        expect(spy).toHaveBeenCalledWith('/shipment/edit', data);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        shipment.list();

        expect(spy).toHaveBeenCalledWith('/shipment/list');
    });
});
