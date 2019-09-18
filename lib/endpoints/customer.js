'use strict';

class Customer {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#customercontactinfo
    contactInfo (data) {
        return this.request.post('/customer/contactinfo', data);
    }
}

module.exports = Customer;
