'use strict';

var assert = require('assert');
var sinon = require('sinon');

var PaymentCard = require('../../lib/endpoints/paymentcard');
var Request = require('../../lib/request');

describe('endpoints/paymentcard', function () {
    describe('add', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var paymentCard = new PaymentCard(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/paymentcard/add');
            });

            paymentCard.add();
        });

        it('should set the request body', function () {
            var request = new Request();
            var paymentCard = new PaymentCard(request);
            var expected = {
                description: 'description',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            paymentCard.add(expected);
        });
    });

    describe('delete', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var paymentCard = new PaymentCard(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/paymentcard/delete');
            });

            paymentCard.delete();
        });

        it('should set the request body', function () {
            var request = new Request();
            var paymentCard = new PaymentCard(request);
            var expected = {
                paymentcardid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            paymentCard.delete(expected);
        });
    });

    describe('edit', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var paymentCard = new PaymentCard(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/paymentcard/edit');
            });

            paymentCard.edit();
        });

        it('should set the request body', function () {
            var request = new Request();
            var paymentCard = new PaymentCard(request);
            var expected = {
                paymentcardid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            paymentCard.edit(expected);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var paymentCard = new PaymentCard(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/paymentcard/list');
            });

            paymentCard.list();
        });
    });
});
