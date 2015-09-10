'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Customer = require('../../lib/endpoints/customer');
var Request = require('../../lib/request');

describe('endpoints/customer', function () {
    describe('contactInfo', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var customer = new Customer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/customer/contactinfo');
            });

            customer.contactInfo();
        });

        it('should set the request body', function () {
            var request = new Request();
            var customer = new Customer(request);
            var expected = {
                companyname: 'companyname',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            customer.contactInfo(expected);
        });
    });
});
