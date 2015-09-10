'use strict';

var Domain = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_domain#domainadd
Domain.prototype.add = function (data) {
    return this.request.post('/domain/add', data);
};

// https://github.com/GleSYS/API/wiki/functions_domain#domainaddrecord
Domain.prototype.addRecord = function (data) {
    return this.request.post('/domain/addrecord', data);
};

// https://github.com/GleSYS/API/wiki/functions_domain#domainallowedarguments
Domain.prototype.allowedArguments = function () {
    return this.request.get('/domain/allowedarguments');
};

// https://github.com/GleSYS/API/wiki/functions_domain#domainavailable
Domain.prototype.available = function (data) {
    return this.request.get('/domain/available', data);
};

// https://github.com/GleSYS/API/wiki/functions_domain#domainchangenameservers
Domain.prototype.changeNameServers = function (data) {
    return this.request.post('/domain/changenameservers', data);
};

// https://github.com/GleSYS/API/wiki/functions_domain#domaindelete
Domain.prototype.delete = function (data) {
    return this.request.post('/domain/delete', data);
};

// https://github.com/GleSYS/API/wiki/functions_domain#domaindeleterecord
Domain.prototype.deleteRecord = function (data) {
    return this.request.post('/domain/deleterecord', data);
};

// https://github.com/GleSYS/API/wiki/functions_domain#domaindetails
Domain.prototype.details = function (data) {
    return this.request.get('/domain/details', data);
};

// https://github.com/GleSYS/API/wiki/functions_domain#domainedit
Domain.prototype.edit = function (data) {
    return this.request.post('/domain/edit', data);
};

// https://github.com/GleSYS/API/wiki/functions_domain#domainlegacywebhosting
Domain.prototype.legacyWebHosting = function () {
    return this.request.get('/domain/legacywebhosting');
};

// https://github.com/GleSYS/API/wiki/functions_domain#domainlist
Domain.prototype.list = function () {
    return this.request.get('/domain/list');
};

// https://github.com/GleSYS/API/wiki/functions_domain#domainlistrecords
Domain.prototype.listRecords = function (data) {
    return this.request.post('/domain/listrecords', data);
};

// https://github.com/GleSYS/API/wiki/functions_domain#domainpricelist
Domain.prototype.priceList = function () {
    return this.request.get('/domain/pricelist');
};

// https://github.com/GleSYS/API/wiki/functions_domain#domainregister
Domain.prototype.register = function (data) {
    return this.request.post('/domain/register', data);
};

// https://github.com/GleSYS/API/wiki/functions_domain#domainrenew
Domain.prototype.renew = function (data) {
    return this.request.post('/domain/renew', data);
};

// https://github.com/GleSYS/API/wiki/functions_domain#domainsetautorenew
Domain.prototype.setAutoRenew = function (data) {
    return this.request.post('/domain/setautorenew', data);
};

// https://github.com/GleSYS/API/wiki/functions_domain#domaintransfer
Domain.prototype.transfer = function (data) {
    return this.request.post('/domain/transfer', data);
};

// https://github.com/GleSYS/API/wiki/functions_domain#domainupdaterecord
Domain.prototype.updateRecord = function (data) {
    return this.request.post('/domain/updaterecord', data);
};

module.exports = Domain;
