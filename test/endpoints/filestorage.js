'use strict';

const assert = require('assert');
const sinon = require('sinon');

const FileStorage = require('../../lib/endpoints/filestorage');
const Request = require('../../lib/request');

describe('endpoints/filestorage', () => {
    describe('createVolume', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const fileStorage = new FileStorage(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/filestorage/createvolume');
            });

            fileStorage.createVolume();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const fileStorage = new FileStorage(request);
            const expected = {
                datacenter: 'datacenter',
                planid: 'planid',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            fileStorage.createVolume(expected);

            assert.ok(stub.called);
        });
    });

    describe('editVolume', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const fileStorage = new FileStorage(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/filestorage/editvolume');
            });

            fileStorage.editVolume();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const fileStorage = new FileStorage(request);
            const expected = {
                volumeid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            fileStorage.editVolume(expected);

            assert.ok(stub.called);
        });
    });

    describe('deleteVolume', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const fileStorage = new FileStorage(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/filestorage/deletevolume');
            });

            fileStorage.deleteVolume();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const fileStorage = new FileStorage(request);
            const expected = {
                volumeid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            fileStorage.deleteVolume(expected);

            assert.ok(stub.called);
        });
    });

    describe('listPlans', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const fileStorage = new FileStorage(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/filestorage/listplans');
            });

            fileStorage.listPlans();

            assert.ok(stub.called);
        });

        it('should set the query string', () => {
            const request = new Request();
            const fileStorage = new FileStorage(request);
            const expected = {
                volumeid: 1,
            };

            const stub = sinon.stub(request, 'get').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            fileStorage.listPlans(expected);

            assert.ok(stub.called);
        });
    });

    describe('listVolumes', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const fileStorage = new FileStorage(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/filestorage/listvolumes');
            });

            fileStorage.listVolumes();

            assert.ok(stub.called);
        });
    });

    describe('resourceUsage', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const fileStorage = new FileStorage(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/filestorage/resourceusage');
            });

            fileStorage.resourceUsage();

            assert.ok(stub.called);
        });

        it('should set the query string', () => {
            const request = new Request();
            const fileStorage = new FileStorage(request);
            const expected = {
                volumeid: 1,
            };

            const stub = sinon.stub(request, 'get').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            fileStorage.resourceUsage(expected);

            assert.ok(stub.called);
        });
    });

    describe('volumeDetails', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const fileStorage = new FileStorage(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/filestorage/volumedetails');
            });

            fileStorage.volumeDetails();

            assert.ok(stub.called);
        });

        it('should set the query string', () => {
            const request = new Request();
            const fileStorage = new FileStorage(request);
            const expected = {
                volumeid: 1,
            };

            const stub = sinon.stub(request, 'get').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            fileStorage.volumeDetails(expected);

            assert.ok(stub.called);
        });
    });
});
