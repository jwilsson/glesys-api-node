'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Vpn = require('../../lib/endpoints/vpn');
var Request = require('../../lib/request');

describe('endpoints/vpn', function () {
    describe('createUser', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var vpn;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/vpn/createuser');
            });

            vpn = new Vpn(request);
            vpn.createUser();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var vpn;
            var stub;
            var expected = {
                username: 'username',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            vpn = new Vpn(request);
            vpn.createUser(expected);

            assert.ok(stub.called);
        });
    });

    describe('deleteUser', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var vpn;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/vpn/deleteuser');
            });

            vpn = new Vpn(request);
            vpn.deleteUser();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var vpn;
            var stub;
            var expected = {
                username: 'username',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            vpn = new Vpn(request);
            vpn.deleteUser(expected);

            assert.ok(stub.called);
        });
    });

    describe('editUser', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var vpn;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/vpn/edituser');
            });

            vpn = new Vpn(request);
            vpn.editUser();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var vpn;
            var stub;
            var expected = {
                username: 'username',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            vpn = new Vpn(request);
            vpn.editUser(expected);

            assert.ok(stub.called);
        });
    });

    describe('listUsers', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var vpn;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/vpn/listusers');
            });

            vpn = new Vpn(request);
            vpn.listUsers();

            assert.ok(stub.called);
        });
    });
});
