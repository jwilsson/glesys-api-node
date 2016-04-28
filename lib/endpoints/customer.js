'use strict';

class Customer {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_customer#customercontactinfo
    contactInfo (data) {
        return this.request.post('/customer/contactinfo', data);
    }
}

module.exports = Customer;
