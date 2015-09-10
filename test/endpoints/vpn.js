'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Vpn = require('../../lib/endpoints/vpn');
var Request = require('../../lib/request');

describe('endpoints/vpn', function () {
    describe('createUser', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var vpn = new Vpn(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/vpn/createuser');
            });

            vpn.createUser();
        });

        it('should set the request body', function () {
            var request = new Request();
            var vpn = new Vpn(request);
            var expected = {
                username: 'username',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            vpn.createUser(expected);
        });
    });

    describe('deleteUser', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var vpn = new Vpn(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/vpn/deleteuser');
            });

            vpn.deleteUser();
        });

        it('should set the request body', function () {
            var request = new Request();
            var vpn = new Vpn(request);
            var expected = {
                username: 'username',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            vpn.deleteUser(expected);
        });
    });

    describe('editUser', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var vpn = new Vpn(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/vpn/edituser');
            });

            vpn.editUser();
        });

        it('should set the request body', function () {
            var request = new Request();
            var vpn = new Vpn(request);
            var expected = {
                username: 'username',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            vpn.editUser(expected);
        });
    });

    describe('listUsers', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var vpn = new Vpn(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/vpn/listusers');
            });

            vpn.listUsers();
        });
    });
});
