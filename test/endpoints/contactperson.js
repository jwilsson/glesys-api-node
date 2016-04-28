'use strict';

const assert = require('assert');
const sinon = require('sinon');

const ContactPerson = require('../../lib/endpoints/contactperson');
const Request = require('../../lib/request');

describe('endpoints/contactperson', () => {
    describe('add', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const contactPerson = new ContactPerson(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/contactperson/add');
            });

            contactPerson.add();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const contactPerson = new ContactPerson(request);
            const expected = {
                name: 'name',
                phonenumber: '1234567890',
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            contactPerson.add(expected);

            assert.ok(stub.called);
        });
    });

    describe('delete', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const contactPerson = new ContactPerson(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/contactperson/delete');
            });

            contactPerson.delete();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const contactPerson = new ContactPerson(request);
            const expected = {
                contactpersonid: 1,
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            contactPerson.delete(expected);

            assert.ok(stub.called);
        });
    });

    describe('edit', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const contactPerson = new ContactPerson(request);
            const stub = sinon.stub(request, 'post', (url) => {
                assert.strictEqual(url, '/contactperson/edit');
            });

            contactPerson.edit();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const contactPerson = new ContactPerson(request);
            const expected = {
                contactpersonid: 1,
                name: 'name',
            };

            const stub = sinon.stub(request, 'post', (url, data) => {
                assert.deepEqual(data, expected);
            });

            contactPerson.edit(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const contactPerson = new ContactPerson(request);
            const stub = sinon.stub(request, 'get', (url) => {
                assert.strictEqual(url, '/contactperson/list');
            });

            contactPerson.list();

            assert.ok(stub.called);
        });
    });
});
