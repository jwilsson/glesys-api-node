'use strict';

var assert = require('assert');
var sinon = require('sinon');

var User = require('../../lib/endpoints/user');
var Request = require('../../lib/request');

describe('endpoints/user', function () {
    describe('changePassword', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var user = new User(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/user/changepassword');
            });

            user.changePassword();
        });

        it('should set the request body', function () {
            var request = new Request();
            var user = new User(request);
            var expected = {
                currentpassword: 'currentpassword',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            user.changePassword(expected);
        });
    });

    describe('details', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var user = new User(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/user/details');
            });

            user.details();
        });
    });

    describe('disableTwoFactor', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var user = new User(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/user/disabletwofactor');
            });

            user.disableTwoFactor();
        });

        it('should set the request body', function () {
            var request = new Request();
            var user = new User(request);
            var expected = {
                password: 'password',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            user.disableTwoFactor(expected);
        });
    });

    describe('edit', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var user = new User(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/user/edit');
            });

            user.edit();
        });

        it('should set the request body', function () {
            var request = new Request();
            var user = new User(request);
            var expected = {
                name: 'name',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            user.edit(expected);
        });
    });

    describe('enableTwoFactor', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var user = new User(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/user/enabletwofactor');
            });

            user.enableTwoFactor();
        });

        it('should set the request body', function () {
            var request = new Request();
            var user = new User(request);
            var expected = {
                method: 'method',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            user.enableTwoFactor(expected);
        });
    });

    describe('login', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var user = new User(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/user/login');
            });

            user.login();
        });

        it('should set the request body', function () {
            var request = new Request();
            var user = new User(request);
            var expected = {
                username: 'username',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            user.login(expected);
        });
    });

    describe('logout', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var user = new User(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/user/logout');
            });

            user.logout();
        });
    });
});
