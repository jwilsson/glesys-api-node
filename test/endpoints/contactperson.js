'use strict';

var assert = require('assert');
var sinon = require('sinon');

var ContactPerson = require('../../lib/endpoints/contactperson');
var Request = require('../../lib/request');

describe('endpoints/contactperson', function () {
    describe('add', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var contactPerson = new ContactPerson(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/contactperson/add');
            });

            contactPerson.add();
        });

        it('should set the request body', function () {
            var request = new Request();
            var contactPerson = new ContactPerson(request);
            var expected = {
                name: 'name',
                phonenumber: '1234567890',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            contactPerson.add(expected);
        });
    });

    describe('delete', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var contactPerson = new ContactPerson(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/contactperson/delete');
            });

            contactPerson.delete();
        });

        it('should set the request body', function () {
            var request = new Request();
            var contactPerson = new ContactPerson(request);
            var expected = {
                contactpersonid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            contactPerson.delete(expected);
        });
    });

    describe('edit', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var contactPerson = new ContactPerson(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/contactperson/edit');
            });

            contactPerson.edit();
        });

        it('should set the request body', function () {
            var request = new Request();
            var contactPerson = new ContactPerson(request);
            var expected = {
                contactpersonid: 1,
                name: 'name',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            contactPerson.edit(expected);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var contactPerson = new ContactPerson(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/contactperson/list');
            });

            contactPerson.list();
        });
    });
});
