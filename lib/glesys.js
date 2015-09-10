'use strict';

var Request = require('./request');

var GleSYSAPI = function (options) {
    var endpoints = [
        'account',
        'api',
        'archive',
        'changelog',
        'contactPerson',
        'customer',
        'domain',
        'email',
        'invoice',
        'ip',
        'liveChat',
        'loadBalancer',
        'paymentCard',
        'server',
        'sshKey',
        'transaction',
        'user',
        'vpn',
    ];

    options = options || {};

    this.request = new Request({
        apiKey: options.apiKey,
        apiUser: options.apiUser,
    });

    endpoints.forEach(function (endpoint) {
        var file = endpoint.toLowerCase();

        this[endpoint] = require('./endpoints/' + file);
        this[endpoint] = new this[endpoint](this.request);
    }, this);
};

module.exports = GleSYSAPI;
