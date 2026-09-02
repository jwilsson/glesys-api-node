import { Endpoint } from '../endpoint.js';

export class Shipment extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#shipmentcancel
    cancel(data) {
        return this.request.post('/shipment/cancel', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#shipmentcreate
    create(data) {
        return this.request.post('/shipment/create', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#shipmentedit
    edit(data) {
        return this.request.post('/shipment/edit', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#shipmentlist
    list() {
        return this.request.get('/shipment/list');
    }
}
