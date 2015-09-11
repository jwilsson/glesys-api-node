'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Api = require('../../lib/endpoints/api');
var Request = require('../../lib/request');

describe('endpoints/api', function () {
    describe('listFunctions', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var api;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/api/listfunctions');
            });

            api = new Api(request);
            api.listFunctions();

            assert.ok(stub.called);
        });
    });

    describe('maintenance', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var api;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/api/maintenance');
            });

            api = new Api(request);
            api.maintenance();

            assert.ok(stub.called);
        });
    });

    describe('serviceInfo', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var api;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/api/serviceinfo');
            });

            api = new Api(request);
            api.serviceInfo();

            assert.ok(stub.called);
        });
    });
});
