'use strict';

var Account = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_account#accountchangepassword
Account.prototype.changePassword = function (data) {
    return this.request.post('/account/changepassword', data);
};

// https://github.com/GleSYS/API/wiki/functions_account#accountinfo
Account.prototype.info = function () {
    return this.request.get('/account/info');
};

module.exports = Account;
