'use strict';

var assert = require('assert');
var sinon = require('sinon');

var User = require('../../lib/endpoints/user');
var Request = require('../../lib/request');

describe('endpoints/user', function () {
    describe('changePassword', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var user;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/user/changepassword');
            });

            user = new User(request);
            user.changePassword();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var user;
            var stub;
            var expected = {
                currentpassword: 'currentpassword',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            user = new User(request);
            user.changePassword(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var user;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/user/details');
            });

            user = new User(request);
            user.details();

            assert.ok(stub.called);
        });
    });

    describe('disableTwoFactor', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var user;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/user/disabletwofactor');
            });

            user = new User(request);
            user.disableTwoFactor();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var user;
            var stub;
            var expected = {
                password: 'password',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            user = new User(request);
            user.disableTwoFactor(expected);

            assert.ok(stub.called);
        });
    });

    describe('edit', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var user;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/user/edit');
            });

            user = new User(request);
            user.edit();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var user;
            var stub;
            var expected = {
                name: 'name',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            user = new User(request);
            user.edit(expected);

            assert.ok(stub.called);
        });
    });

    describe('enableTwoFactor', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var user;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/user/enabletwofactor');
            });

            user = new User(request);
            user.enableTwoFactor();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var user;
            var stub;
            var expected = {
                method: 'method',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            user = new User(request);
            user.enableTwoFactor(expected);

            assert.ok(stub.called);
        });
    });

    describe('login', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var user;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/user/login');
            });

            user = new User(request);
            user.login();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var user;
            var stub;
            var expected = {
                username: 'username',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            user = new User(request);
            user.login(expected);

            assert.ok(stub.called);
        });
    });

    describe('logout', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var user;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/user/logout');
            });

            user = new User(request);
            user.logout();

            assert.ok(stub.called);
        });
    });
});
