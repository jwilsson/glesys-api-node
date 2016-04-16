'use strict';

var assert = require('assert');
var sinon = require('sinon');

var ContactPerson = require('../../lib/endpoints/contactperson');
var Request = require('../../lib/request');

describe('endpoints/contactperson', function () {
    describe('add', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var contactPerson;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/contactperson/add');
            });

            contactPerson = new ContactPerson(request);
            contactPerson.add();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var contactPerson;
            var stub;
            var expected = {
                name: 'name',
                phonenumber: '1234567890',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            contactPerson = new ContactPerson(request);
            contactPerson.add(expected);

            assert.ok(stub.called);
        });
    });

    describe('delete', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var contactPerson;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/contactperson/delete');
            });

            contactPerson = new ContactPerson(request);
            contactPerson.delete();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var contactPerson;
            var stub;
            var expected = {
                contactpersonid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            contactPerson = new ContactPerson(request);
            contactPerson.delete(expected);

            assert.ok(stub.called);
        });
    });

    describe('edit', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var contactPerson;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/contactperson/edit');
            });

            contactPerson = new ContactPerson(request);
            contactPerson.edit();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var contactPerson;
            var stub;
            var expected = {
                contactpersonid: 1,
                name: 'name',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            contactPerson = new ContactPerson(request);
            contactPerson.edit(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var contactPerson;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/contactperson/list');
            });

            contactPerson = new ContactPerson(request);
            contactPerson.list();

            assert.ok(stub.called);
        });
    });
});
