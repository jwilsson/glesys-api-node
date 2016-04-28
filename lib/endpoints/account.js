'use strict';

class Account {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_account#accountchangepassword
    changePassword (data) {
        return this.request.post('/account/changepassword', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_account#accountinfo
    info () {
        return this.request.get('/account/info');
    }
}

module.exports = Account;
