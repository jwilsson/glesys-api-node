'use strict';

var PaymentCard = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_paymentcard#paymentcardadd
PaymentCard.prototype.add = function (data) {
    return this.request.post('/paymentcard/add', data);
};

// https://github.com/GleSYS/API/wiki/functions_paymentcard#paymentcarddelete
PaymentCard.prototype.delete = function (data) {
    return this.request.post('/paymentcard/delete', data);
};

// https://github.com/GleSYS/API/wiki/functions_paymentcard#paymentcardedit
PaymentCard.prototype.edit = function (data) {
    return this.request.post('/paymentcard/edit', data);
};

// https://github.com/GleSYS/API/wiki/functions_paymentcard#paymentcardlist
PaymentCard.prototype.list = function () {
    return this.request.get('/paymentcard/list');
};

module.exports = PaymentCard;
