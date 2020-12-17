'use strict';

const assert = require('assert');
const GleSYSAPI = require('../lib/glesys');

describe('GleSYSAPI', () => {
    it('should set apiKey and apiUser on Request object', () => {
        const glesys = new GleSYSAPI({
            apiKey: 'key',
            apiUser: 'user',
        });

        assert.strictEqual(glesys.request.apiKey, 'key');
        assert.strictEqual(glesys.request.apiUser, 'user');
    });

    it('should expose API methods', () => {
        const glesys = new GleSYSAPI();

        // We're just checking for existence
        assert.ok(glesys.account);
        assert.ok(glesys.api);
        assert.ok(glesys.archive);
        assert.ok(glesys.country);
        assert.ok(glesys.customer);
        assert.ok(glesys.domain);
        assert.ok(glesys.email);
        assert.ok(glesys.fileStorage);
        assert.ok(glesys.invoice);
        assert.ok(glesys.ip);
        assert.ok(glesys.loadBalancer);
        assert.ok(glesys.network);
        assert.ok(glesys.networkAdapter);
        assert.ok(glesys.objectStorage);
        assert.ok(glesys.paymentCard);
        assert.ok(glesys.project);
        assert.ok(glesys.server);
        assert.ok(glesys.sshKey);
        assert.ok(glesys.transaction);
        assert.ok(glesys.user);
        assert.ok(glesys.vpn);
    });
});
