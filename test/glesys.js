'use strict';

var assert = require('assert');
var rewire = require('rewire');

describe('GleSYSAPI', function () {
    it('should set apiKey and apiUser on Request object', function () {
        var GleSYSAPI = rewire('../lib/glesys');

        GleSYSAPI.__set__('Request', function (options) {
            assert.strictEqual(options.apiKey, 'key');
            assert.strictEqual(options.apiUser, 'user');
        });

        new GleSYSAPI({
            apiKey: 'key',
            apiUser: 'user',
        });
    });

    it('should expose API methods', function () {
        var GleSYSAPI = require('../lib/glesys');
        var glesys = new GleSYSAPI();

        // We're just checking for existence
        assert.ok(glesys.account);
        assert.ok(glesys.api);
        assert.ok(glesys.archive);
        assert.ok(glesys.changelog);
        assert.ok(glesys.contactPerson);
        assert.ok(glesys.customer);
        assert.ok(glesys.domain);
        assert.ok(glesys.email);
        assert.ok(glesys.invoice);
        assert.ok(glesys.ip);
        assert.ok(glesys.liveChat);
        assert.ok(glesys.loadBalancer);
        assert.ok(glesys.paymentCard);
        assert.ok(glesys.server);
        assert.ok(glesys.sshKey);
        assert.ok(glesys.transaction);
        assert.ok(glesys.user);
        assert.ok(glesys.vpn);
    });
});
