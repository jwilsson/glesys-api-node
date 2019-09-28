'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Customer = require('../../lib/endpoints/customer');
const Request = require('../../lib/request');

describe('endpoints/customer', () => {
    describe('contactInfo', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const customer = new Customer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/customer/contactinfo');
            });

            customer.contactInfo();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const customer = new Customer(request);
            const expected = {
                companyname: 'companyname',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            customer.contactInfo(expected);

            assert.ok(stub.called);
        });
    });

    describe('createProject', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const customer = new Customer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/customer/createproject');
            });

            customer.createProject();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const customer = new Customer(request);
            const expected = {
                name: 'name',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            customer.createProject(expected);

            assert.ok(stub.called);
        });
    });

    describe('editCollaborator', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const customer = new Customer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/customer/editcollaborator');
            });

            customer.editCollaborator();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const customer = new Customer(request);
            const expected = {
                collaboratorid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            customer.editCollaborator(expected);

            assert.ok(stub.called);
        });
    });

    describe('listCollaborators', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const customer = new Customer(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/customer/listcollaborators');
            });

            customer.listCollaborators();

            assert.ok(stub.called);
        });
    });

    describe('listProjects', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const customer = new Customer(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/customer/listprojects');
            });

            customer.listProjects();

            assert.ok(stub.called);
        });
    });

    describe('removeCollaborator', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const customer = new Customer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/customer/removecollaborator');
            });

            customer.removeCollaborator();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const customer = new Customer(request);
            const expected = {
                collaboratorid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            customer.removeCollaborator(expected);

            assert.ok(stub.called);
        });
    });

    describe('settings', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const customer = new Customer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/customer/settings');
            });

            customer.settings();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const customer = new Customer(request);
            const expected = {
                name: 'name',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            customer.settings(expected);

            assert.ok(stub.called);
        });
    });
});
