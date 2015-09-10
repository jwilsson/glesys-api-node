'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Ip = require('../../lib/endpoints/ip');
var Request = require('../../lib/request');

describe('endpoints/ip', function () {
    describe('add', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip = new Ip(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/ip/add');
            });

            ip.add();
        });

        it('should set the request body', function () {
            var request = new Request();
            var ip = new Ip(request);
            var expected = {
                ipaddress: '127.0.0.1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip.add(expected);
        });
    });

    describe('details', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip = new Ip(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/ip/details');
            });

            ip.details();
        });

        it('should set the query string', function () {
            var request = new Request();
            var ip = new Ip(request);
            var expected = {
                ipaddress: '127.0.0.1',
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip.details(expected);
        });
    });

    describe('listFree', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip = new Ip(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/ip/listfree');
            });

            ip.listFree();
        });

        it('should set the query string', function () {
            var request = new Request();
            var ip = new Ip(request);
            var expected = {
                ipversion: 4,
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip.listFree(expected);
        });
    });

    describe('listOwn', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip = new Ip(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/ip/listown');
            });

            ip.listOwn();
        });

        it('should set the query string', function () {
            var request = new Request();
            var ip = new Ip(request);
            var expected = {
                ipversion: 4,
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip.listOwn(expected);
        });
    });

    describe('release', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip = new Ip(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/ip/release');
            });

            ip.release();
        });

        it('should set the request body', function () {
            var request = new Request();
            var ip = new Ip(request);
            var expected = {
                ipaddress: '127.0.0.1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip.release(expected);
        });
    });

    describe('remove', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip = new Ip(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/ip/remove');
            });

            ip.remove();
        });

        it('should set the request body', function () {
            var request = new Request();
            var ip = new Ip(request);
            var expected = {
                ipaddress: '127.0.0.1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip.remove(expected);
        });
    });

    describe('resetPTR', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip = new Ip(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/ip/resetptr');
            });

            ip.resetPTR();
        });

        it('should set the request body', function () {
            var request = new Request();
            var ip = new Ip(request);
            var expected = {
                ipaddress: '127.0.0.1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip.resetPTR(expected);
        });
    });

    describe('setPTR', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip = new Ip(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/ip/setptr');
            });

            ip.setPTR();
        });

        it('should set the request body', function () {
            var request = new Request();
            var ip = new Ip(request);
            var expected = {
                ipaddress: '127.0.0.1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip.setPTR(expected);
        });
    });

    describe('take', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var ip = new Ip(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/ip/take');
            });

            ip.take();
        });

        it('should set the request body', function () {
            var request = new Request();
            var ip = new Ip(request);
            var expected = {
                ipaddress: '127.0.0.1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            ip.take(expected);
        });
    });
});
