'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Country = require('../../lib/endpoints/country');
const Request = require('../../lib/request');

describe('endpoints/country', () => {
    describe('list', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const country = new Country(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/country/list');
            });

            country.list();

            assert.ok(stub.called);
        });
    });
});
