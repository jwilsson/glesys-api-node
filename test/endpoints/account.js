'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Account = require('../../lib/endpoints/account');
const Request = require('../../lib/request');

describe('endpoints/account', () => {
    describe('info', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const account = new Account(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/account/info');
            });

            account.info();

            assert.ok(stub.called);
        });
    });
});
