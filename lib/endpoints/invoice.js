import Endpoint from '../endpoint.js';

class Invoice extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#invoicelist
    list() {
        return this.request.get('/invoice/list');
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#invoicenext
    next() {
        return this.request.get('/invoice/next');
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#invoicepaybypaypal
    payByPaypal(data) {
        return this.request.post('/invoice/paybypaypal', data);
    }
}

export default Invoice;
