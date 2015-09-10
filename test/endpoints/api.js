'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Api = require('../../lib/endpoints/api');
var Request = require('../../lib/request');

describe('endpoints/api', function () {
    describe('listFunctions', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var api = new Api(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/api/listfunctions');
            });

            api.listFunctions();
        });
    });

    describe('maintenance', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var api = new Api(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/api/maintenance');
            });

            api.maintenance();
        });
    });

    describe('serviceInfo', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var api = new Api(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/api/serviceinfo');
            });

            api.serviceInfo();
        });
    });
});
