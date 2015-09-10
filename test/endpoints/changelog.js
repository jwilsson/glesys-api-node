'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Changelog = require('../../lib/endpoints/changelog');
var Request = require('../../lib/request');

describe('endpoints/changelog', function () {
    describe('api', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var changelog = new Changelog(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/changelog/api');
            });

            changelog.api();
        });
    });

    describe('controlPanel', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var changelog = new Changelog(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/changelog/controlpanel');
            });

            changelog.controlPanel();
        });
    });
});
