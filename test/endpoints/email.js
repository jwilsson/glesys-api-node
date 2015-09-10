'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Email = require('../../lib/endpoints/email');
var Request = require('../../lib/request');

describe('endpoints/email', function () {
    describe('costs', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email = new Email(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/email/costs');
            });

            email.costs();
        });
    });

    describe('createAccount', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email = new Email(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/email/createaccount');
            });

            email.createAccount();
        });

        it('should set the request body', function () {
            var request = new Request();
            var email = new Email(request);
            var expected = {
                emailaccount: 'example@example.com',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            email.createAccount(expected);
        });
    });

    describe('createAlias', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email = new Email(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/email/createalias');
            });

            email.createAlias();
        });

        it('should set the request body', function () {
            var request = new Request();
            var email = new Email(request);
            var expected = {
                emailalias: 'emailalias',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            email.createAlias(expected);
        });
    });

    describe('delete', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email = new Email(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/email/delete');
            });

            email.delete();
        });

        it('should set the request body', function () {
            var request = new Request();
            var email = new Email(request);
            var expected = {
                email: 'email',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            email.delete(expected);
        });
    });

    describe('editAccount', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email = new Email(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/email/editaccount');
            });

            email.editAccount();
        });

        it('should set the request body', function () {
            var request = new Request();
            var email = new Email(request);
            var expected = {
                emailaccount: 'example@example.com',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            email.editAccount(expected);
        });
    });

    describe('editAlias', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email = new Email(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/email/editalias');
            });

            email.editAlias();
        });

        it('should set the request body', function () {
            var request = new Request();
            var email = new Email(request);
            var expected = {
                emailalias: 'alias@example.com',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            email.editAlias(expected);
        });
    });

    describe('globalQuota', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email = new Email(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/email/globalquota');
            });

            email.globalQuota();
        });

        it('should set the request body', function () {
            var request = new Request();
            var email = new Email(request);
            var expected = {
                globalquota: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            email.globalQuota(expected);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email = new Email(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/email/list');
            });

            email.list();
        });

        it('should set the query string', function () {
            var request = new Request();
            var email = new Email(request);
            var expected = {
                domainname: 'example.com',
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            email.list(expected);
        });
    });

    describe('overview', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email = new Email(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/email/overview');
            });

            email.overview();
        });
    });

    describe('quota', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email = new Email(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/email/quota');
            });

            email.quota();
        });

        it('should set the query string', function () {
            var request = new Request();
            var email = new Email(request);
            var expected = {
                emailaccount: 'example@example.com',
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            email.quota(expected);
        });
    });
});
