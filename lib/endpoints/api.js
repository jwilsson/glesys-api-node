'use strict';

var Api = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_api#apilistfunctions
Api.prototype.listFunctions = function () {
    return this.request.get('/api/listfunctions');
};

// https://github.com/GleSYS/API/wiki/functions_api#apimaintenance
Api.prototype.maintenance = function () {
    return this.request.get('/api/maintenance');
};

// https://github.com/GleSYS/API/wiki/functions_api#apiserviceinfo
Api.prototype.serviceInfo = function () {
    return this.request.get('/api/serviceinfo');
};

module.exports = Api;
