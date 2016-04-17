'use strict';

const assert = require('assert');
const sinon = require('sinon');

const User = require('../../lib/endpoints/user');
const Request = require('../../lib/request');

describe('endpoints/user', () => {
    describe('changePassword', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/user/changepassword');
            });

            user.changePassword();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const user = new User(request);
            const expected = {
                currentpassword: 'currentpassword',
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            user.changePassword(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'get', (url) => {
                assert.strictEqual(url, '/user/details');
            });

            user.details();

            assert.ok(stub.called);
        });
    });

    describe('disableTwoFactor', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/user/disabletwofactor');
            });

            user.disableTwoFactor();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const user = new User(request);
            const expected = {
                password: 'password',
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            user.disableTwoFactor(expected);

            assert.ok(stub.called);
        });
    });

    describe('edit', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/user/edit');
            });

            user.edit();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const user = new User(request);
            const expected = {
                name: 'name',
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            user.edit(expected);

            assert.ok(stub.called);
        });
    });

    describe('enableTwoFactor', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/user/enabletwofactor');
            });

            user.enableTwoFactor();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const user = new User(request);
            const expected = {
                method: 'method',
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            user.enableTwoFactor(expected);

            assert.ok(stub.called);
        });
    });

    describe('login', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/user/login');
            });

            user.login();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const user = new User(request);
            const expected = {
                username: 'username',
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            user.login(expected);

            assert.ok(stub.called);
        });
    });

    describe('logout', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/user/logout');
            });

            user.logout();

            assert.ok(stub.called);
        });
    });
});
