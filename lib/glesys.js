'use strict';

const Request = require('./request');

class GleSYSAPI {
    constructor (options = {}) {
        const { apiKey, apiUser } = options;

        this.request = new Request({
            apiKey,
            apiUser,
        });
    }

    getEndpoint (endpoint) {
        // eslint-disable-next-line global-require
        endpoint = require(`./endpoints/${endpoint}`);

        // eslint-disable-next-line new-cap
        return new endpoint(this.request);
    }

    get account () {
        return this.getEndpoint('account');
    }

    get api () {
        return this.getEndpoint('api');
    }

    get archive () {
        return this.getEndpoint('archive');
    }

    get country () {
        return this.getEndpoint('country');
    }

    get customer () {
        return this.getEndpoint('customer');
    }

    get domain () {
        return this.getEndpoint('domain');
    }

    get email () {
        return this.getEndpoint('email');
    }

    get fileStorage () {
        return this.getEndpoint('filestorage');
    }

    get invoice () {
        return this.getEndpoint('invoice');
    }

    get ip () {
        return this.getEndpoint('ip');
    }

    get loadBalancer () {
        return this.getEndpoint('loadbalancer');
    }

    get network () {
        return this.getEndpoint('network');
    }

    get networkAdapter () {
        return this.getEndpoint('networkadapter');
    }

    get paymentCard () {
        return this.getEndpoint('paymentcard');
    }

    get project () {
        return this.getEndpoint('project');
    }

    get server () {
        return this.getEndpoint('server');
    }

    get sshKey () {
        return this.getEndpoint('sshkey');
    }

    get transaction () {
        return this.getEndpoint('transaction');
    }

    get user () {
        return this.getEndpoint('user');
    }

    get vpn () {
        return this.getEndpoint('vpn');
    }
}

module.exports = GleSYSAPI;
