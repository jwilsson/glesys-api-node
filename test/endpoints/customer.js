'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Customer = require('../../lib/endpoints/customer');
const Request = require('../../lib/request');

describe('endpoints/customer', () => {
    describe('contactInfo', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const customer = new Customer(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/customer/contactinfo');
            });

            customer.contactInfo();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const customer = new Customer(request);
            const expected = {
                companyname: 'companyname',
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            customer.contactInfo(expected);

            assert.ok(stub.called);
        });
    });
});
