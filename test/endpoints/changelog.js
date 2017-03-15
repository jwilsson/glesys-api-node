'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Changelog = require('../../lib/endpoints/changelog');
const Request = require('../../lib/request');

describe('endpoints/changelog', () => {
    describe('api', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const changelog = new Changelog(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/changelog/api');
            });

            changelog.api();

            assert.ok(stub.called);
        });
    });

    describe('controlPanel', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const changelog = new Changelog(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/changelog/controlpanel');
            });

            changelog.controlPanel();

            assert.ok(stub.called);
        });
    });
});
