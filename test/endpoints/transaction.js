'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Transaction = require('../../lib/endpoints/transaction');
const Request = require('../../lib/request');

describe('endpoints/transaction', () => {
    describe('acknowledge', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const transaction = new Transaction(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/transaction/acknowledge');
            });

            transaction.acknowledge();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const transaction = new Transaction(request);
            const expected = {
                transactionid: 1,
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            transaction.acknowledge(expected);

            assert.ok(stub.called);
        });
    });

    describe('cancel', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const transaction = new Transaction(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/transaction/cancel');
            });

            transaction.cancel();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const transaction = new Transaction(request);
            const expected = {
                transactionid: 1,
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            transaction.cancel(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const transaction = new Transaction(request);
            const stub = sinon.stub(request, 'get', (url) => {
                assert.strictEqual(url, '/transaction/list');
            });

            transaction.list();

            assert.ok(stub.called);
        });
    });

    describe('start', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const transaction = new Transaction(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/transaction/start');
            });

            transaction.start();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const transaction = new Transaction(request);
            const expected = {
                transactionid: 1,
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            transaction.start(expected);

            assert.ok(stub.called);
        });
    });
});
