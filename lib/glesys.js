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

    get changelog () {
        return this.getEndpoint('changelog');
    }

    get contactPerson () {
        return this.getEndpoint('contactperson');
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

    get invoice () {
        return this.getEndpoint('invoice');
    }

    get ip () {
        return this.getEndpoint('ip');
    }

    get liveChat () {
        return this.getEndpoint('livechat');
    }

    get loadBalancer () {
        return this.getEndpoint('loadbalancer');
    }

    get paymentCard () {
        return this.getEndpoint('paymentcard');
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
