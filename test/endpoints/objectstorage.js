'use strict';

const assert = require('assert');
const sinon = require('sinon');

const ObjectStorage = require('../../lib/endpoints/objectstorage');
const Request = require('../../lib/request');

describe('endpoints/objectstorage', () => {
    describe('createCredential', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/objectstorage/createcredential');
            });

            objectStorage.createCredential();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const expected = {
                description: 'description',
                instanceid: 'os-123',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            objectStorage.createCredential(expected);

            assert.ok(stub.called);
        });
    });

    describe('createInstance', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/objectstorage/createinstance');
            });

            objectStorage.createInstance();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const expected = {
                createinitialbucket: true,
                datacenter: 'dc-sto1',
                projectkey: 'cl123',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            objectStorage.createInstance(expected);

            assert.ok(stub.called);
        });
    });

    describe('deleteCredential', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/objectstorage/deletecredential');
            });

            objectStorage.deleteCredential();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const expected = {
                credentialid: 'abc123',
                instanceid: 'os-123',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            objectStorage.deleteCredential(expected);

            assert.ok(stub.called);
        });
    });

    describe('deleteInstance', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/objectstorage/deleteinstance');
            });

            objectStorage.deleteInstance();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const expected = {
                instanceid: 'os-123',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            objectStorage.deleteInstance(expected);

            assert.ok(stub.called);
        });
    });

    describe('editInstance', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/objectstorage/editinstance');
            });

            objectStorage.editInstance();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const expected = {
                description: 'new description',
                instanceid: 'os-123',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            objectStorage.editInstance(expected);

            assert.ok(stub.called);
        });
    });

    describe('estimatedCost', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/objectstorage/estimatedcost');
            });

            objectStorage.estimatedCost();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const expected = {
                averageUsageInGib: 10,
                instanceid: 'os-123',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            objectStorage.estimatedCost(expected);

            assert.ok(stub.called);
        });
    });

    describe('instanceDetails', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/objectstorage/instancedetails');
            });

            objectStorage.instanceDetails();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const expected = {
                instanceid: 'os-123',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            objectStorage.instanceDetails(expected);

            assert.ok(stub.called);
        });
    });

    describe('listInstances', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const objectStorage = new ObjectStorage(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/objectstorage/listinstances');
            });

            objectStorage.listInstances();

            assert.ok(stub.called);
        });
    });
});
