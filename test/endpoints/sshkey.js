'use strict';

const assert = require('assert');
const sinon = require('sinon');

const SshKey = require('../../lib/endpoints/sshkey');
const Request = require('../../lib/request');

describe('endpoints/sshkey', () => {
    describe('add', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const sshKey = new SshKey(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/sshkey/add');
            });

            sshKey.add();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const sshKey = new SshKey(request);
            const expected = {
                sshkey: 'abc123',
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            sshKey.add(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const sshKey = new SshKey(request);
            const stub = sinon.stub(request, 'get', (url) => {
                assert.strictEqual(url, '/sshkey/list');
            });

            sshKey.list();

            assert.ok(stub.called);
        });
    });

    describe('remove', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const sshKey = new SshKey(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/sshkey/remove');
            });

            sshKey.remove();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const sshKey = new SshKey(request);
            const expected = {
                sshkeyids: 1,
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            sshKey.remove(expected);

            assert.ok(stub.called);
        });
    });
});
