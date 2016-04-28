'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Api = require('../../lib/endpoints/api');
const Request = require('../../lib/request');

describe('endpoints/api', () => {
    describe('listFunctions', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const api = new Api(request);
            const stub = sinon.stub(request, 'get', (url) => {
                assert.strictEqual(url, '/api/listfunctions');
            });

            api.listFunctions();

            assert.ok(stub.called);
        });
    });

    describe('maintenance', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const api = new Api(request);
            const stub = sinon.stub(request, 'get', (url) => {
                assert.strictEqual(url, '/api/maintenance');
            });

            api.maintenance();

            assert.ok(stub.called);
        });
    });

    describe('serviceInfo', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const api = new Api(request);
            const stub = sinon.stub(request, 'get', (url) => {
                assert.strictEqual(url, '/api/serviceinfo');
            });

            api.serviceInfo();

            assert.ok(stub.called);
        });
    });
});
