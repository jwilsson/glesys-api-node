'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Ip = require('../../lib/endpoints/ip');
var Request = require('../../lib/request');

describe('endpoints/ip', function () {
    describe('add', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/ip/add');
            });

            ip = new Ip(request);
            ip.add();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var ip;
            var stub;
            var expected = {
                ipaddress: '127.0.0.1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip = new Ip(request);
            ip.add(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/ip/details');
            });

            ip = new Ip(request);
            ip.details();

            assert.ok(stub.called);
        });

        it('should set the query string', function () {
            var request = new Request();
            var ip;
            var stub;
            var expected = {
                ipaddress: '127.0.0.1',
            };

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip = new Ip(request);
            ip.details(expected);

            assert.ok(stub.called);
        });
    });

    describe('listFree', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/ip/listfree');
            });

            ip = new Ip(request);
            ip.listFree();

            assert.ok(stub.called);
        });

        it('should set the query string', function () {
            var request = new Request();
            var ip;
            var stub;
            var expected = {
                ipversion: 4,
            };

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip = new Ip(request);
            ip.listFree(expected);

            assert.ok(stub.called);
        });
    });

    describe('listOwn', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/ip/listown');
            });

            ip = new Ip(request);
            ip.listOwn();

            assert.ok(stub.called);
        });

        it('should set the query string', function () {
            var request = new Request();
            var ip;
            var stub;
            var expected = {
                ipversion: 4,
            };

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip = new Ip(request);
            ip.listOwn(expected);

            assert.ok(stub.called);
        });
    });

    describe('release', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/ip/release');
            });

            ip = new Ip(request);
            ip.release();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var ip;
            var stub;
            var expected = {
                ipaddress: '127.0.0.1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip = new Ip(request);
            ip.release(expected);

            assert.ok(stub.called);
        });
    });

    describe('remove', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/ip/remove');
            });

            ip = new Ip(request);
            ip.remove();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var ip;
            var stub;
            var expected = {
                ipaddress: '127.0.0.1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip = new Ip(request);
            ip.remove(expected);

            assert.ok(stub.called);
        });
    });

    describe('resetPTR', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/ip/resetptr');
            });

            ip = new Ip(request);
            ip.resetPTR();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var ip;
            var stub;
            var expected = {
                ipaddress: '127.0.0.1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip = new Ip(request);
            ip.resetPTR(expected);

            assert.ok(stub.called);
        });
    });

    describe('setPTR', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/ip/setptr');
            });

            ip = new Ip(request);
            ip.setPTR();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var ip;
            var stub;
            var expected = {
                ipaddress: '127.0.0.1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip = new Ip(request);
            ip.setPTR(expected);

            assert.ok(stub.called);
        });
    });

    describe('take', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/ip/take');
            });

            ip = new Ip(request);
            ip.take();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var ip;
            var stub;
            var expected = {
                ipaddress: '127.0.0.1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip = new Ip(request);
            ip.take(expected);

            assert.ok(stub.called);
        });
    });
});
