'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Archive = require('../../lib/endpoints/archive');
var Request = require('../../lib/request');

describe('endpoints/archive', function () {
    describe('allowedArguments', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive = new Archive(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/archive/allowedarguments');
            });

            archive.allowedArguments();
        });
    });

    describe('changeDescription', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive = new Archive(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/archive/changedescription');
            });

            archive.changeDescription();
        });

        it('should set the request body', function () {
            var request = new Request();
            var archive = new Archive(request);
            var expected = {
                description: 'description',
                username: 'username',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            archive.changeDescription(expected);
        });
    });

    describe('changePassword', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive = new Archive(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/archive/changepassword');
            });

            archive.changePassword();
        });

        it('should set the request body', function () {
            var request = new Request();
            var archive = new Archive(request);
            var expected = {
                password: 'password',
                username: 'username',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            archive.changePassword(expected);
        });
    });

    describe('create', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive = new Archive(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/archive/create');
            });

            archive.create();
        });

        it('should set the request body', function () {
            var request = new Request();
            var archive = new Archive(request);
            var expected = {
                password: 'password',
                size: 1,
                username: 'username',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            archive.create(expected);
        });
    });

    describe('delete', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive = new Archive(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/archive/delete');
            });

            archive.delete();
        });

        it('should set the request body', function () {
            var request = new Request();
            var archive = new Archive(request);
            var expected = {
                username: 'username',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            archive.delete(expected);
        });
    });

    describe('details', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive = new Archive(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/archive/details');
            });

            archive.details();
        });

        it('should set the query string', function () {
            var request = new Request();
            var archive = new Archive(request);
            var expected = {
                username: 'username',
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            archive.delete(expected);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive = new Archive(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/archive/list');
            });

            archive.list();
        });
    });

    describe('resize', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive = new Archive(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/archive/resize');
            });

            archive.resize();
        });

        it('should set the request body', function () {
            var request = new Request();
            var archive = new Archive(request);
            var expected = {
                size: 1,
                username: 'username',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            archive.resize(expected);
        });
    });
});
