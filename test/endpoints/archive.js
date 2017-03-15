'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Archive = require('../../lib/endpoints/archive');
const Request = require('../../lib/request');

describe('endpoints/archive', () => {
    describe('allowedArguments', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const archive = new Archive(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/archive/allowedarguments');
            });

            archive.allowedArguments();

            assert.ok(stub.called);
        });
    });

    describe('changeDescription', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const archive = new Archive(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/archive/changedescription');
            });

            archive.changeDescription();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const archive = new Archive(request);
            const expected = {
                description: 'description',
                username: 'username',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepEqual(data, expected);
            });

            archive.changeDescription(expected);

            assert.ok(stub.called);
        });
    });

    describe('changePassword', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const archive = new Archive(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/archive/changepassword');
            });

            archive.changePassword();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const archive = new Archive(request);
            const expected = {
                password: 'password',
                username: 'username',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepEqual(data, expected);
            });

            archive.changePassword(expected);

            assert.ok(stub.called);
        });
    });

    describe('create', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const archive = new Archive(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/archive/create');
            });

            archive.create();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const archive = new Archive(request);
            const expected = {
                password: 'password',
                size: 1,
                username: 'username',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepEqual(data, expected);
            });

            archive.create(expected);

            assert.ok(stub.called);
        });
    });

    describe('delete', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const archive = new Archive(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/archive/delete');
            });

            archive.delete();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const archive = new Archive(request);
            const expected = {
                username: 'username',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepEqual(data, expected);
            });

            archive.delete(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const archive = new Archive(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/archive/details');
            });

            archive.details();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const archive = new Archive(request);
            const expected = {
                username: 'username',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepEqual(data, expected);
            });

            archive.details(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const archive = new Archive(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/archive/list');
            });

            archive.list();

            assert.ok(stub.called);
        });
    });

    describe('resize', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const archive = new Archive(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/archive/resize');
            });

            archive.resize();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const archive = new Archive(request);
            const expected = {
                size: 1,
                username: 'username',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepEqual(data, expected);
            });

            archive.resize(expected);

            assert.ok(stub.called);
        });
    });
});
