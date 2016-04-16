'use strict';

var assert = require('assert');
var sinon = require('sinon');

var LiveChat = require('../../lib/endpoints/livechat');
var Request = require('../../lib/request');

describe('endpoints/livechat', function () {
    describe('closeSession', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var liveChat;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/livechat/closesession');
            });

            liveChat = new LiveChat(request);
            liveChat.closeSession();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var liveChat;
            var stub;
            var expected = {
                sessionid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            liveChat = new LiveChat(request);
            liveChat.closeSession(expected);

            assert.ok(stub.called);
        });
    });

    describe('getMessages', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var liveChat;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/livechat/getmessages');
            });

            liveChat = new LiveChat(request);
            liveChat.getMessages();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var liveChat;
            var stub;
            var expected = {
                sessionid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            liveChat = new LiveChat(request);
            liveChat.getMessages(expected);

            assert.ok(stub.called);
        });
    });

    describe('newSession', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var liveChat;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/livechat/newsession');
            });

            liveChat = new LiveChat(request);
            liveChat.newSession();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var liveChat;
            var stub;
            var expected = {
                name: 'Jonathan',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            liveChat = new LiveChat(request);
            liveChat.newSession(expected);

            assert.ok(stub.called);
        });
    });

    describe('postMessage', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var liveChat;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/livechat/postmessage');
            });

            liveChat = new LiveChat(request);
            liveChat.postMessage();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var liveChat;
            var stub;
            var expected = {
                sessionid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            liveChat = new LiveChat(request);
            liveChat.postMessage(expected);

            assert.ok(stub.called);
        });
    });

    describe('sessionInfo', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var liveChat;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/livechat/sessioninfo');
            });

            liveChat = new LiveChat(request);
            liveChat.sessionInfo();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var liveChat;
            var stub;
            var expected = {
                sessionid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            liveChat = new LiveChat(request);
            liveChat.sessionInfo(expected);

            assert.ok(stub.called);
        });
    });

    describe('status', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var liveChat;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/livechat/status');
            });

            liveChat = new LiveChat(request);
            liveChat.status();

            assert.ok(stub.called);
        });
    });
});
