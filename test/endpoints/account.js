'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Account = require('../../lib/endpoints/account');
var Request = require('../../lib/request');

describe('endpoints/account', function () {
    describe('changePassword', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var account = new Account(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/account/changepassword');
            });

            account.changePassword();
        });

        it('should set the request body', function () {
            var request = new Request();
            var account = new Account(request);
            var expected = {
                password: 'password',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            account.changePassword(expected);
        });
    });

    describe('info', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var account = new Account(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/account/info');
            });

            account.info();
        });
    });
});
