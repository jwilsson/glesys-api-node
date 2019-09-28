'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Network = require('../../lib/endpoints/network');
const Request = require('../../lib/request');

describe('endpoints/network', () => {
    describe('create', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const network = new Network(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/network/create');
            });

            network.create();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const network = new Network(request);
            const expected = {
                datacenter: 'datacenter',
                description: 'description',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            network.create(expected);

            assert.ok(stub.called);
        });
    });

    describe('delete', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const network = new Network(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/network/delete');
            });

            network.delete();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const network = new Network(request);
            const expected = {
                networkid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            network.delete(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const network = new Network(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/network/details');
            });

            network.details();

            assert.ok(stub.called);
        });

        it('should set the query string', () => {
            const request = new Request();
            const network = new Network(request);
            const expected = {
                networkid: 1,
            };

            const stub = sinon.stub(request, 'get').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            network.details(expected);

            assert.ok(stub.called);
        });
    });

    describe('edit', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const network = new Network(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/network/edit');
            });

            network.edit();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const network = new Network(request);
            const expected = {
                networkid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            network.edit(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const network = new Network(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/network/list');
            });

            network.list();

            assert.ok(stub.called);
        });
    });
});
