'use strict';

class Account {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#accountchangepassword
    changePassword (data) {
        return this.request.post('/account/changepassword', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#accountinfo
    info () {
        return this.request.get('/account/info');
    }
}

module.exports = Account;
