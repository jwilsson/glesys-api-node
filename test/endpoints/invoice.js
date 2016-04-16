'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Invoice = require('../../lib/endpoints/invoice');
var Request = require('../../lib/request');

describe('endpoints/invoice', function () {
    describe('allowedArguments', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/invoice/allowedarguments');
            });

            invoice = new Invoice(request);
            invoice.allowedArguments();

            assert.ok(stub.called);
        });
    });

    describe('billingPeriod', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/invoice/billingperiod');
            });

            invoice = new Invoice(request);
            invoice.billingPeriod();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var invoice;
            var stub;
            var expected = {
                account: 'account',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            invoice = new Invoice(request);
            invoice.billingPeriod(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/invoice/list');
            });

            invoice = new Invoice(request);
            invoice.list();

            assert.ok(stub.called);
        });
    });

    describe('next', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/invoice/next');
            });

            invoice = new Invoice(request);
            invoice.next();

            assert.ok(stub.called);
        });
    });

    describe('payByCard', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/invoice/paybycard');
            });

            invoice = new Invoice(request);
            invoice.payByCard();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var invoice;
            var stub;
            var expected = {
                invoicenumbers: 1,
                paymentcardid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            invoice = new Invoice(request);
            invoice.payByCard(expected);

            assert.ok(stub.called);
        });
    });

    describe('payByPaypal', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/invoice/paybypaypal');
            });

            invoice = new Invoice(request);
            invoice.payByPaypal();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var invoice;
            var stub;
            var expected = {
                invoicenumbers: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            invoice = new Invoice(request);
            invoice.payByPaypal(expected);

            assert.ok(stub.called);
        });
    });

    describe('paymentHistory', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/invoice/paymenthistory');
            });

            invoice = new Invoice(request);
            invoice.paymentHistory();

            assert.ok(stub.called);
        });
    });

    describe('settings', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var invoice;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/invoice/settings');
            });

            invoice = new Invoice(request);
            invoice.settings();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var invoice;
            var stub;
            var expected = {
                invoiceemailaddress: 'example@example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            invoice = new Invoice(request);
            invoice.settings(expected);

            assert.ok(stub.called);
        });
    });
});
