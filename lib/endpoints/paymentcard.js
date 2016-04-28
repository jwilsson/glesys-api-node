'use strict';

class PaymentCard {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_paymentcard#paymentcardadd
    add (data) {
        return this.request.post('/paymentcard/add', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_paymentcard#paymentcarddelete
    delete (data) {
        return this.request.post('/paymentcard/delete', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_paymentcard#paymentcardedit
    edit (data) {
        return this.request.post('/paymentcard/edit', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_paymentcard#paymentcardlist
    list () {
        return this.request.get('/paymentcard/list');
    }

    // https://github.com/GleSYS/API/wiki/functions_paymentcard#paymentcardpayinvoices
    payInvoices (data) {
        return this.request.post('/paymentcard/payinvoices', data);
    }
}

module.exports = PaymentCard;
