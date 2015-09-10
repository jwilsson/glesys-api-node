'use strict';

var assert = require('assert');
var sinon = require('sinon');

var LiveChat = require('../../lib/endpoints/livechat');
var Request = require('../../lib/request');

describe('endpoints/livechat', function () {
    describe('closeSession', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var livechat = new LiveChat(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/livechat/closesession');
            });

            livechat.closeSession();
        });

        it('should set the request body', function () {
            var request = new Request();
            var livechat = new LiveChat(request);
            var expected = {
                sessionid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            livechat.closeSession(expected);
        });
    });

    describe('getMessages', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var livechat = new LiveChat(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/livechat/getmessages');
            });

            livechat.getMessages();
        });

        it('should set the query string', function () {
            var request = new Request();
            var livechat = new LiveChat(request);
            var expected = {
                sessionid: 1,
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            livechat.getMessages(expected);
        });
    });

    describe('newSession', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var livechat = new LiveChat(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/livechat/newsession');
            });

            livechat.newSession();
        });

        it('should set the request body', function () {
            var request = new Request();
            var livechat = new LiveChat(request);
            var expected = {
                name: 'Jonathan',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            livechat.newSession(expected);
        });
    });

    describe('postMessage', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var livechat = new LiveChat(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/livechat/postmessage');
            });

            livechat.postMessage();
        });

        it('should set the request body', function () {
            var request = new Request();
            var livechat = new LiveChat(request);
            var expected = {
                sessionid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            livechat.postMessage(expected);
        });
    });

    describe('sessionInfo', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var livechat = new LiveChat(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/livechat/sessioninfo');
            });

            livechat.sessionInfo();
        });

        it('should set the request body', function () {
            var request = new Request();
            var livechat = new LiveChat(request);
            var expected = {
                sessionid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            livechat.sessionInfo(expected);
        });
    });

    describe('status', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var livechat = new LiveChat(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/livechat/status');
            });

            livechat.status();
        });
    });
});
