'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Archive = require('../../lib/endpoints/archive');
var Request = require('../../lib/request');

describe('endpoints/archive', function () {
    describe('allowedArguments', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/archive/allowedarguments');
            });

            archive = new Archive(request);
            archive.allowedArguments();

            assert.ok(stub.called);
        });
    });

    describe('changeDescription', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/archive/changedescription');
            });

            archive = new Archive(request);
            archive.changeDescription();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var archive;
            var stub;
            var expected = {
                description: 'description',
                username: 'username',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            archive = new Archive(request);
            archive.changeDescription(expected);

            assert.ok(stub.called);
        });
    });

    describe('changePassword', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/archive/changepassword');
            });

            archive = new Archive(request);
            archive.changePassword();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var archive;
            var stub;
            var expected = {
                password: 'password',
                username: 'username',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            archive = new Archive(request);
            archive.changePassword(expected);

            assert.ok(stub.called);
        });
    });

    describe('create', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/archive/create');
            });

            archive = new Archive(request);
            archive.create();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var archive;
            var stub;
            var expected = {
                password: 'password',
                size: 1,
                username: 'username',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            archive = new Archive(request);
            archive.create(expected);

            assert.ok(stub.called);
        });
    });

    describe('delete', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/archive/delete');
            });

            archive = new Archive(request);
            archive.delete();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var archive;
            var stub;
            var expected = {
                username: 'username',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            archive = new Archive(request);
            archive.delete(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/archive/details');
            });

            archive = new Archive(request);
            archive.details();

            assert.ok(stub.called);
        });

        it('should set the query string', function () {
            var request = new Request();
            var archive;
            var stub;
            var expected = {
                username: 'username',
            };

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            archive = new Archive(request);
            archive.details(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/archive/list');
            });

            archive = new Archive(request);
            archive.list();

            assert.ok(stub.called);
        });
    });

    describe('resize', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var archive;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/archive/resize');
            });

            archive = new Archive(request);
            archive.resize();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var archive;
            var stub;
            var expected = {
                size: 1,
                username: 'username',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            archive = new Archive(request);
            archive.resize(expected);

            assert.ok(stub.called);
        });
    });
});
