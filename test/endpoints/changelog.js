'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Changelog = require('../../lib/endpoints/changelog');
var Request = require('../../lib/request');

describe('endpoints/changelog', function () {
    describe('api', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var changelog;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/changelog/api');
            });

            changelog = new Changelog(request);
            changelog.api();

            assert.ok(stub.called);
        });
    });

    describe('controlPanel', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var changelog;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/changelog/controlpanel');
            });

            changelog = new Changelog(request);
            changelog.controlPanel();

            assert.ok(stub.called);
        });
    });
});
