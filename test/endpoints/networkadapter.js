'use strict';

const assert = require('assert');
const sinon = require('sinon');

const NetworkAdapter = require('../../lib/endpoints/networkadapter');
const Request = require('../../lib/request');

describe('endpoints/networkadapter', () => {
    describe('create', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const networkAdapter = new NetworkAdapter(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/networkadapter/create');
            });

            networkAdapter.create();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const networkAdapter = new NetworkAdapter(request);
            const expected = {
                serverid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            networkAdapter.create(expected);

            assert.ok(stub.called);
        });
    });

    describe('delete', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const networkAdapter = new NetworkAdapter(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/networkadapter/delete');
            });

            networkAdapter.delete();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const networkAdapter = new NetworkAdapter(request);
            const expected = {
                networkadapterid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            networkAdapter.delete(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const networkAdapter = new NetworkAdapter(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/networkadapter/details');
            });

            networkAdapter.details();

            assert.ok(stub.called);
        });

        it('should set the query string', () => {
            const request = new Request();
            const networkAdapter = new NetworkAdapter(request);
            const expected = {
                networkadapterid: 1,
            };

            const stub = sinon.stub(request, 'get').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            networkAdapter.details(expected);

            assert.ok(stub.called);
        });
    });

    describe('edit', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const networkAdapter = new NetworkAdapter(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/networkadapter/edit');
            });

            networkAdapter.edit();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const networkAdapter = new NetworkAdapter(request);
            const expected = {
                networkadapterid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            networkAdapter.edit(expected);

            assert.ok(stub.called);
        });
    });
});
