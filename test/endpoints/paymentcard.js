'use strict';

const assert = require('assert');
const sinon = require('sinon');

const PaymentCard = require('../../lib/endpoints/paymentcard');
const Request = require('../../lib/request');

describe('endpoints/paymentcard', () => {
    describe('add', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const paymentCard = new PaymentCard(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/paymentcard/add');
            });

            paymentCard.add();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const paymentCard = new PaymentCard(request);
            const expected = {
                description: 'description',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            paymentCard.add(expected);

            assert.ok(stub.called);
        });
    });

    describe('delete', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const paymentCard = new PaymentCard(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/paymentcard/delete');
            });

            paymentCard.delete();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const paymentCard = new PaymentCard(request);
            const expected = {
                paymentcardid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            paymentCard.delete(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const paymentCard = new PaymentCard(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/paymentcard/list');
            });

            paymentCard.list();

            assert.ok(stub.called);
        });
    });

    describe('payInvoices', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const paymentCard = new PaymentCard(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/paymentcard/payinvoices');
            });

            paymentCard.payInvoices();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const paymentCard = new PaymentCard(request);
            const expected = {
                invoicenumbers: 1,
                paymentcardid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            paymentCard.payInvoices(expected);

            assert.ok(stub.called);
        });
    });
});
