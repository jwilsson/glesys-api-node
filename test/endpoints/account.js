'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Account = require('../../lib/endpoints/account');
var Request = require('../../lib/request');

describe('endpoints/account', function () {
    describe('changePassword', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var account;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/account/changepassword');
            });

            account = new Account(request);
            account.changePassword();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var account;
            var stub;
            var expected = {
                password: 'password',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            account = new Account(request);
            account.changePassword(expected);

            assert.ok(stub.called);
        });
    });

    describe('info', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var account;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/account/info');
            });

            account = new Account(request);
            account.info();

            assert.ok(stub.called);
        });
    });
});
