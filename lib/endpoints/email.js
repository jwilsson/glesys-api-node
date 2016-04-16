'use strict';

var Email = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_email#emailcosts
Email.prototype.costs = function () {
    return this.request.get('/email/costs');
};

// https://github.com/GleSYS/API/wiki/functions_email#emailcreateaccount
Email.prototype.createAccount = function (data) {
    return this.request.post('/email/createaccount', data);
};

// https://github.com/GleSYS/API/wiki/functions_email#emailcreatealias
Email.prototype.createAlias = function (data) {
    return this.request.post('/email/createalias', data);
};

// https://github.com/GleSYS/API/wiki/functions_email#emaildelete
Email.prototype.delete = function (data) {
    return this.request.post('/email/delete', data);
};

// https://github.com/GleSYS/API/wiki/functions_email#emaileditaccount
Email.prototype.editAccount = function (data) {
    return this.request.post('/email/editaccount', data);
};

// https://github.com/GleSYS/API/wiki/functions_email#emaileditalias
Email.prototype.editAlias = function (data) {
    return this.request.post('/email/editalias', data);
};

// https://github.com/GleSYS/API/wiki/functions_email#emailglobalquota
Email.prototype.globalQuota = function (data) {
    return this.request.post('/email/globalquota', data);
};

// https://github.com/GleSYS/API/wiki/functions_email#emaillist
Email.prototype.list = function (data) {
    return this.request.post('/email/list', data);
};

// https://github.com/GleSYS/API/wiki/functions_email#emailoverview
Email.prototype.overview = function () {
    return this.request.get('/email/overview');
};

// https://github.com/GleSYS/API/wiki/functions_email#emailquota
Email.prototype.quota = function (data) {
    return this.request.post('/email/quota', data);
};

module.exports = Email;
