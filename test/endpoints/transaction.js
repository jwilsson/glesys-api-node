'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Transaction = require('../../lib/endpoints/transaction');
var Request = require('../../lib/request');

describe('endpoints/transaction', function () {
    describe('acknowledge', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var transaction;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/transaction/acknowledge');
            });

            transaction = new Transaction(request);
            transaction.acknowledge();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var transaction;
            var stub;
            var expected = {
                transactionid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            transaction = new Transaction(request);
            transaction.acknowledge(expected);

            assert.ok(stub.called);
        });
    });

    describe('cancel', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var transaction;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/transaction/cancel');
            });

            transaction = new Transaction(request);
            transaction.cancel();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var transaction;
            var stub;
            var expected = {
                transactionid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            transaction = new Transaction(request);
            transaction.cancel(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var transaction;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/transaction/list');
            });

            transaction = new Transaction(request);
            transaction.list();

            assert.ok(stub.called);
        });
    });

    describe('start', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var transaction;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/transaction/start');
            });

            transaction = new Transaction(request);
            transaction.start();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var transaction;
            var stub;
            var expected = {
                transactionid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            transaction = new Transaction(request);
            transaction.start(expected);

            assert.ok(stub.called);
        });
    });
});
