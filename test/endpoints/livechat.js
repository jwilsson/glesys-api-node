'use strict';

const assert = require('assert');
const sinon = require('sinon');

const LiveChat = require('../../lib/endpoints/livechat');
const Request = require('../../lib/request');

describe('endpoints/livechat', () => {
    describe('closeSession', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const liveChat = new LiveChat(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/livechat/closesession');
            });

            liveChat.closeSession();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const liveChat = new LiveChat(request);
            const expected = {
                sessionid: 1,
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            liveChat.closeSession(expected);

            assert.ok(stub.called);
        });
    });

    describe('getMessages', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const liveChat = new LiveChat(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/livechat/getmessages');
            });

            liveChat.getMessages();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const liveChat = new LiveChat(request);
            const expected = {
                sessionid: 1,
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            liveChat.getMessages(expected);

            assert.ok(stub.called);
        });
    });

    describe('newSession', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const liveChat = new LiveChat(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/livechat/newsession');
            });

            liveChat.newSession();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const liveChat = new LiveChat(request);
            const expected = {
                name: 'Jonathan',
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            liveChat.newSession(expected);

            assert.ok(stub.called);
        });
    });

    describe('postMessage', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const liveChat = new LiveChat(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/livechat/postmessage');
            });

            liveChat.postMessage();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const liveChat = new LiveChat(request);
            const expected = {
                sessionid: 1,
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            liveChat.postMessage(expected);

            assert.ok(stub.called);
        });
    });

    describe('sessionInfo', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const liveChat = new LiveChat(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/livechat/sessioninfo');
            });

            liveChat.sessionInfo();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const liveChat = new LiveChat(request);
            const expected = {
                sessionid: 1,
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            liveChat.sessionInfo(expected);

            assert.ok(stub.called);
        });
    });

    describe('status', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const liveChat = new LiveChat(request);
            const stub = sinon.stub(request, 'get', (url) => {
                assert.strictEqual(url, '/livechat/status');
            });

            liveChat.status();

            assert.ok(stub.called);
        });
    });
});
