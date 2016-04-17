'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Account = require('../../lib/endpoints/account');
const Request = require('../../lib/request');

describe('endpoints/account', () => {
    describe('changePassword', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const account = new Account(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/account/changepassword');
            });

            account.changePassword();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const account = new Account(request);
            const expected = {
                password: 'password',
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            account.changePassword(expected);

            assert.ok(stub.called);
        });
    });

    describe('info', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const account = new Account(request);
            const stub = sinon.stub(request, 'get', (url) => {
                assert.strictEqual(url, '/account/info');
            });

            account.info();

            assert.ok(stub.called);
        });
    });
});
