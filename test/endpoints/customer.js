'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Customer = require('../../lib/endpoints/customer');
var Request = require('../../lib/request');

describe('endpoints/customer', function () {
    describe('contactInfo', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var customer;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/customer/contactinfo');
            });

            customer = new Customer(request);
            customer.contactInfo();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var customer;
            var stub;
            var expected = {
                companyname: 'companyname',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            customer = new Customer(request);
            customer.contactInfo(expected);

            assert.ok(stub.called);
        });
    });
});
