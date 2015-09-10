'use strict';

var assert = require('assert');
var sinon = require('sinon');

var SshKey = require('../../lib/endpoints/sshkey');
var Request = require('../../lib/request');

describe('endpoints/sshkey', function () {
    describe('add', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var sshKey = new SshKey(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/sshkey/add');
            });

            sshKey.add();
        });

        it('should set the request body', function () {
            var request = new Request();
            var sshKey = new SshKey(request);
            var expected = {
                sshkey: 'abc123',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            sshKey.add(expected);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var sshKey = new SshKey(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/sshkey/list');
            });

            sshKey.list();
        });
    });

    describe('remove', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var sshKey = new SshKey(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/sshkey/remove');
            });

            sshKey.remove();
        });

        it('should set the request body', function () {
            var request = new Request();
            var sshKey = new SshKey(request);
            var expected = {
                sshkeyids: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            sshKey.remove(expected);
        });
    });
});
