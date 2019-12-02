'use strict';

class PaymentCard {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#paymentcardadd
    add (data) {
        return this.request.post('/paymentcard/add', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#paymentcarddelete
    delete (data) {
        return this.request.post('/paymentcard/delete', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#paymentcardlist
    list () {
        return this.request.get('/paymentcard/list');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#paymentcardpayinvoices
    payInvoices (data) {
        return this.request.post('/paymentcard/payinvoices', data);
    }
}

module.exports = PaymentCard;
