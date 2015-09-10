'use strict';

var Invoice = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_invoice#invoiceallowedarguments
Invoice.prototype.allowedArguments = function () {
    return this.request.get('/invoice/allowedarguments');
};

// https://github.com/GleSYS/API/wiki/functions_invoice#invoicebillingperiod
Invoice.prototype.billingPeriod = function (data) {
    return this.request.post('/invoice/billingperiod', data);
};

// https://github.com/GleSYS/API/wiki/functions_invoice#invoicelist
Invoice.prototype.list = function () {
    return this.request.get('/invoice/list');
};

// https://github.com/GleSYS/API/wiki/functions_invoice#invoicenext
Invoice.prototype.next = function () {
    return this.request.get('/invoice/next');
};

// https://github.com/GleSYS/API/wiki/functions_invoice#invoicepaybycard
Invoice.prototype.payByCard = function (data) {
    return this.request.post('/invoice/paybycard', data);
};

// https://github.com/GleSYS/API/wiki/functions_invoice#invoicepaybypaypal
Invoice.prototype.payByPaypal = function (data) {
    return this.request.post('/invoice/paybypaypal', data);
};

// https://github.com/GleSYS/API/wiki/functions_invoice#invoicepaymenthistory
Invoice.prototype.paymentHistory = function () {
    return this.request.get('/invoice/paymenthistory');
};

// https://github.com/GleSYS/API/wiki/functions_invoice#invoicesettings
Invoice.prototype.settings = function (data) {
    return this.request.post('/invoice/settings', data);
};

module.exports = Invoice;
