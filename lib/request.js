'use strict';

var merge = require('lodash.merge');
var got = require('got');

var Request = function (options) {
    options = options || {};

    this.baseUrl = 'https://api.glesys.com';
    this.userAgent = 'https://github.com/jwilsson/glesys-api';

    this.apiKey = options.apiKey;
    this.apiUser = options.apiUser;
};

Request.prototype.get = function (url, data, callback) {
    var options = {
        method: 'GET',
        query: data,
    };

    url = this.baseUrl + url;

    return this.request(url, options, callback);
};

Request.prototype.post = function (url, data, callback) {
    var options = {
        body: data,
        method: 'POST',
    };

    url = this.baseUrl + url;

    return this.request(url, options, callback);
};

Request.prototype.request = function (url, options, callback) {
    var defaults = {
        headers: {
            Authorization: 'Basic ' + new Buffer(this.apiUser + ':' + this.apiKey).toString('base64'),
        },
        json: true,
    };

    options = merge(defaults, options);

    return got(url, options, callback);
};

module.exports = Request;
