'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Vpn = require('../../lib/endpoints/vpn');
const Request = require('../../lib/request');

describe('endpoints/vpn', () => {
    describe('createUser', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const vpn = new Vpn(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/vpn/createuser');
            });

            vpn.createUser();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const vpn = new Vpn(request);
            const expected = {
                username: 'username',
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            vpn.createUser(expected);

            assert.ok(stub.called);
        });
    });

    describe('deleteUser', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const vpn = new Vpn(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/vpn/deleteuser');
            });

            vpn.deleteUser();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const vpn = new Vpn(request);
            const expected = {
                username: 'username',
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            vpn.deleteUser(expected);

            assert.ok(stub.called);
        });
    });

    describe('editUser', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const vpn = new Vpn(request);

            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/vpn/edituser');
            });

            vpn.editUser();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const vpn = new Vpn(request);
            const expected = {
                username: 'username',
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            vpn.editUser(expected);

            assert.ok(stub.called);
        });
    });

    describe('listUsers', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const vpn = new Vpn(request);
            const stub = sinon.stub(request, 'get', (url) => {
                assert.strictEqual(url, '/vpn/listusers');
            });

            vpn.listUsers();

            assert.ok(stub.called);
        });
    });
});
