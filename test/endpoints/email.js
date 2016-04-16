'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Email = require('../../lib/endpoints/email');
var Request = require('../../lib/request');

describe('endpoints/email', function () {
    describe('costs', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/email/costs');
            });

            email = new Email(request);
            email.costs();

            assert.ok(stub.called);
        });
    });

    describe('createAccount', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/email/createaccount');
            });

            email = new Email(request);
            email.createAccount();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var email;
            var stub;
            var expected = {
                emailaccount: 'example@example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            email = new Email(request);
            email.createAccount(expected);

            assert.ok(stub.called);
        });
    });

    describe('createAlias', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/email/createalias');
            });

            email = new Email(request);
            email.createAlias();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var email;
            var stub;
            var expected = {
                emailalias: 'emailalias',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            email = new Email(request);
            email.createAlias(expected);

            assert.ok(stub.called);
        });
    });

    describe('delete', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/email/delete');
            });

            email = new Email(request);
            email.delete();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var email;
            var stub;
            var expected = {
                email: 'email',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            email = new Email(request);
            email.delete(expected);

            assert.ok(stub.called);
        });
    });

    describe('editAccount', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/email/editaccount');
            });

            email = new Email(request);
            email.editAccount();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var email;
            var stub;
            var expected = {
                emailaccount: 'example@example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            email = new Email(request);
            email.editAccount(expected);

            assert.ok(stub.called);
        });
    });

    describe('editAlias', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/email/editalias');
            });

            email = new Email(request);
            email.editAlias();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var email;
            var stub;
            var expected = {
                emailalias: 'alias@example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            email = new Email(request);
            email.editAlias(expected);

            assert.ok(stub.called);
        });
    });

    describe('globalQuota', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/email/globalquota');
            });

            email = new Email(request);
            email.globalQuota();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var email;
            var stub;
            var expected = {
                globalquota: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            email = new Email(request);
            email.globalQuota(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/email/list');
            });

            email = new Email(request);
            email.list();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var email;
            var stub;
            var expected = {
                domainname: 'example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            email = new Email(request);
            email.list(expected);

            assert.ok(stub.called);
        });
    });

    describe('overview', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/email/overview');
            });

            email = new Email(request);
            email.overview();

            assert.ok(stub.called);
        });
    });

    describe('quota', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var email;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/email/quota');
            });

            email = new Email(request);
            email.quota();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var email;
            var stub;
            var expected = {
                emailaccount: 'example@example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            email = new Email(request);
            email.quota(expected);

            assert.ok(stub.called);
        });
    });
});
