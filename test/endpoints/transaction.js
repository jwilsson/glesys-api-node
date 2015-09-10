'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Transaction = require('../../lib/endpoints/transaction');
var Request = require('../../lib/request');

describe('endpoints/transaction', function () {
    describe('acknowledge', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var transaction = new Transaction(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/transaction/acknowledge');
            });

            transaction.acknowledge();
        });

        it('should set the request body', function () {
            var request = new Request();
            var transaction = new Transaction(request);
            var expected = {
                transactionid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            transaction.acknowledge(expected);
        });
    });

    describe('cancel', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var transaction = new Transaction(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/transaction/cancel');
            });

            transaction.cancel();
        });

        it('should set the request body', function () {
            var request = new Request();
            var transaction = new Transaction(request);
            var expected = {
                transactionid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            transaction.cancel(expected);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var transaction = new Transaction(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/transaction/list');
            });

            transaction.list();
        });
    });

    describe('start', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var transaction = new Transaction(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/transaction/start');
            });

            transaction.start();
        });

        it('should set the request body', function () {
            var request = new Request();
            var transaction = new Transaction(request);
            var expected = {
                transactionid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            transaction.start(expected);
        });
    });
});
