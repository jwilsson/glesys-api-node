'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Invoice = require('../../lib/endpoints/invoice');
const Request = require('../../lib/request');

describe('endpoints/invoice', () => {
    describe('allowedArguments', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const invoice = new Invoice(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/invoice/allowedarguments');
            });

            invoice.allowedArguments();

            assert.ok(stub.called);
        });
    });

    describe('billingPeriod', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const invoice = new Invoice(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/invoice/billingperiod');
            });

            invoice.billingPeriod();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const invoice = new Invoice(request);
            const expected = {
                account: 'account',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            invoice.billingPeriod(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const invoice = new Invoice(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/invoice/list');
            });

            invoice.list();

            assert.ok(stub.called);
        });
    });

    describe('next', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const invoice = new Invoice(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/invoice/next');
            });

            invoice.next();

            assert.ok(stub.called);
        });
    });

    describe('payByPaypal', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const invoice = new Invoice(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/invoice/paybypaypal');
            });

            invoice.payByPaypal();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const invoice = new Invoice(request);
            const expected = {
                invoicenumbers: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            invoice.payByPaypal(expected);

            assert.ok(stub.called);
        });
    });

    describe('paymentHistory', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const invoice = new Invoice(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/invoice/paymenthistory');
            });

            invoice.paymentHistory();

            assert.ok(stub.called);
        });
    });

    describe('settings', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const invoice = new Invoice(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/invoice/settings');
            });

            invoice.settings();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const invoice = new Invoice(request);
            const expected = {
                invoiceemailaddress: 'example@example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            invoice.settings(expected);

            assert.ok(stub.called);
        });
    });
});
