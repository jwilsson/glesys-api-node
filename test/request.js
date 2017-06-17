'use strict';

const assert = require('assert');
const sinon = require('sinon');
const Request = require('../lib/request');

describe('request', () => {
    const authOptions = {
        apiKey: 'key',
        apiUser: 'user',
    };

    it('should set apiKey and apiUser', () => {
        const request = new Request(authOptions);

        assert.strictEqual(request.apiKey, authOptions.apiKey);
        assert.strictEqual(request.apiUser, authOptions.apiUser);
    });

    describe('get()', () => {
        it('should set the request method to "GET"', () => {
            const request = new Request({});
            const stub = sinon.stub(request, 'request').callsFake((url, options) => {
                assert.strictEqual(options.method, 'GET');
            });

            request.get('https://api.glesys.com');

            assert.ok(stub.called);
        });

        it('should set the query string', () => {
            const request = new Request({});
            const data = {
                foo: 'bar',
            };

            const stub = sinon.stub(request, 'request').callsFake((url, options) => {
                assert.strictEqual(options.query, data);
            });

            request.get('/api/serviceinfo', data);

            assert.ok(stub.called);
        });
    });

    describe('post()', () => {
        it('should set the request method to "POST"', () => {
            const request = new Request({});
            const stub = sinon.stub(request, 'request').callsFake((url, options) => {
                assert.strictEqual(options.method, 'POST');
            });

            request.post('https://api.glesys.com');

            assert.ok(stub.called);
        });

        it('should set the body', () => {
            const request = new Request({});
            const data = {
                foo: 'bar',
            };

            const stub = sinon.stub(request, 'request').callsFake((url, options) => {
                assert.strictEqual(options.body, data);
            });

            request.post('/api/serviceinfo', data);

            assert.ok(stub.called);
        });
    });
});
