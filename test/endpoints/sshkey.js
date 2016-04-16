'use strict';

var assert = require('assert');
var sinon = require('sinon');

var SshKey = require('../../lib/endpoints/sshkey');
var Request = require('../../lib/request');

describe('endpoints/sshkey', function () {
    describe('add', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var sshKey;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/sshkey/add');
            });

            sshKey = new SshKey(request);
            sshKey.add();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var sshKey;
            var stub;
            var expected = {
                sshkey: 'abc123',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            sshKey = new SshKey(request);
            sshKey.add(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var sshKey;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/sshkey/list');
            });

            sshKey = new SshKey(request);
            sshKey.list();

            assert.ok(stub.called);
        });
    });

    describe('remove', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var sshKey;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/sshkey/remove');
            });

            sshKey = new SshKey(request);
            sshKey.remove();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var sshKey;
            var stub;
            var expected = {
                sshkeyids: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            sshKey = new SshKey(request);
            sshKey.remove(expected);

            assert.ok(stub.called);
        });
    });
});
