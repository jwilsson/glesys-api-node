'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Invoice = require('../../lib/endpoints/invoice');
var Request = require('../../lib/request');

describe('endpoints/invoice', function () {
    describe('allowedArguments', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice = new Invoice(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/invoice/allowedarguments');
            });

            invoice.allowedArguments();
        });
    });

    describe('billingPeriod', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice = new Invoice(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/invoice/billingperiod');
            });

            invoice.billingPeriod();
        });

        it('should set the request body', function () {
            var request = new Request();
            var invoice = new Invoice(request);
            var expected = {
                account: 'account',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            invoice.billingPeriod(expected);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice = new Invoice(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/invoice/list');
            });

            invoice.list();
        });
    });

    describe('next', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice = new Invoice(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/invoice/next');
            });

            invoice.next();
        });
    });

    describe('payByCard', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice = new Invoice(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/invoice/paybycard');
            });

            invoice.payByCard();
        });

        it('should set the request body', function () {
            var request = new Request();
            var invoice = new Invoice(request);
            var expected = {
                invoicenumbers: 1,
                paymentcardid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            invoice.payByCard(expected);
        });
    });

    describe('payByPaypal', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice = new Invoice(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/invoice/paybypaypal');
            });

            invoice.payByPaypal();
        });

        it('should set the request body', function () {
            var request = new Request();
            var invoice = new Invoice(request);
            var expected = {
                invoicenumbers: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            invoice.payByPaypal(expected);
        });
    });

    describe('paymentHistory', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice = new Invoice(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/invoice/paymenthistory');
            });

            invoice.paymentHistory();
        });
    });

    describe('settings', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice = new Invoice(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/invoice/settings');
            });

            invoice.settings();
        });

        it('should set the request body', function () {
            var request = new Request();
            var invoice = new Invoice(request);
            var expected = {
                invoiceemailaddress: 'example@example.com',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            invoice.settings(expected);
        });
    });
});
