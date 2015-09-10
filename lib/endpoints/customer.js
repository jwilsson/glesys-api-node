'use strict';

var Customer = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_customer#customercontactinfo
Customer.prototype.contactInfo = function (data) {
    return this.request.post('/customer/contactinfo', data);
};

module.exports = Customer;
