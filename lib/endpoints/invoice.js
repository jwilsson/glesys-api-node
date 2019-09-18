'use strict';

class Invoice {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#invoiceallowedarguments
    allowedArguments () {
        return this.request.get('/invoice/allowedarguments');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#invoicebillingperiod
    billingPeriod (data) {
        return this.request.post('/invoice/billingperiod', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#invoicelist
    list () {
        return this.request.get('/invoice/list');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#invoicenext
    next () {
        return this.request.get('/invoice/next');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#invoicepaybypaypal
    payByPaypal (data) {
        return this.request.post('/invoice/paybypaypal', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#invoicepaymenthistory
    paymentHistory () {
        return this.request.get('/invoice/paymenthistory');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#invoicesettings
    settings (data) {
        return this.request.post('/invoice/settings', data);
    }
}

module.exports = Invoice;
