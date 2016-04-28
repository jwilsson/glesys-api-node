'use strict';

class Invoice {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_invoice#invoiceallowedarguments
    allowedArguments () {
        return this.request.get('/invoice/allowedarguments');
    }

    // https://github.com/GleSYS/API/wiki/functions_invoice#invoicebillingperiod
    billingPeriod (data) {
        return this.request.post('/invoice/billingperiod', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_invoice#invoicelist
    list () {
        return this.request.get('/invoice/list');
    }

    // https://github.com/GleSYS/API/wiki/functions_invoice#invoicenext
    next () {
        return this.request.get('/invoice/next');
    }

    // https://github.com/GleSYS/API/wiki/functions_invoice#invoicepaybypaypal
    payByPaypal (data) {
        return this.request.post('/invoice/paybypaypal', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_invoice#invoicepaymenthistory
    paymentHistory () {
        return this.request.get('/invoice/paymenthistory');
    }

    // https://github.com/GleSYS/API/wiki/functions_invoice#invoicesettings
    settings (data) {
        return this.request.post('/invoice/settings', data);
    }
}

module.exports = Invoice;
