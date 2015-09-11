'use strict';

var assert = require('assert');
var sinon = require('sinon');

var PaymentCard = require('../../lib/endpoints/paymentcard');
var Request = require('../../lib/request');

describe('endpoints/paymentcard', function () {
    describe('add', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var paymentCard;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/paymentcard/add');
            });

            paymentCard = new PaymentCard(request);
            paymentCard.add();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var paymentCard;
            var stub;
            var expected = {
                description: 'description',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            paymentCard = new PaymentCard(request);
            paymentCard.add(expected);

            assert.ok(stub.called);
        });
    });

    describe('delete', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var paymentCard;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/paymentcard/delete');
            });

            paymentCard = new PaymentCard(request);
            paymentCard.delete();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var paymentCard;
            var stub;
            var expected = {
                paymentcardid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            paymentCard = new PaymentCard(request);
            paymentCard.delete(expected);

            assert.ok(stub.called);
        });
    });

    describe('edit', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var paymentCard;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/paymentcard/edit');
            });

            paymentCard = new PaymentCard(request);
            paymentCard.edit();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var paymentCard;
            var stub;
            var expected = {
                paymentcardid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            paymentCard = new PaymentCard(request);
            paymentCard.edit(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var paymentCard;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/paymentcard/list');
            });

            paymentCard = new PaymentCard(request);
            paymentCard.list();

            assert.ok(stub.called);
        });
    });
});
