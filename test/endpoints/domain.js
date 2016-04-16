'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Domain = require('../../lib/endpoints/domain');
var Request = require('../../lib/request');

describe('endpoints/domain', function () {
    describe('add', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/domain/add');
            });

            domain = new Domain(request);
            domain.add();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain;
            var stub;
            var expected = {
                domainname: 'example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            domain = new Domain(request);
            domain.add(expected);

            assert.ok(stub.called);
        });
    });

    describe('addRecord', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/domain/addrecord');
            });

            domain = new Domain(request);
            domain.addRecord();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain;
            var stub;
            var expected = {
                domainname: 'example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            domain = new Domain(request);
            domain.addRecord(expected);

            assert.ok(stub.called);
        });
    });

    describe('allowedArguments', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/domain/allowedarguments');
            });

            domain = new Domain(request);
            domain.allowedArguments();

            assert.ok(stub.called);
        });
    });

    describe('available', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/domain/available');
            });

            domain = new Domain(request);
            domain.available();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain;
            var stub;
            var expected = {
                search: 'search',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            domain = new Domain(request);
            domain.available(expected);

            assert.ok(stub.called);
        });
    });

    describe('changeNameServers', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/domain/changenameservers');
            });

            domain = new Domain(request);
            domain.changeNameServers();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain;
            var stub;
            var expected = {
                domainname: 'example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            domain = new Domain(request);
            domain.changeNameServers(expected);

            assert.ok(stub.called);
        });
    });

    describe('delete', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/domain/delete');
            });

            domain = new Domain(request);
            domain.delete();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain;
            var stub;
            var expected = {
                domainname: 'example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            domain = new Domain(request);
            domain.delete(expected);

            assert.ok(stub.called);
        });
    });

    describe('deleteRecord', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/domain/deleterecord');
            });

            domain = new Domain(request);
            domain.deleteRecord();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain;
            var stub;
            var expected = {
                recordid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            domain = new Domain(request);
            domain.deleteRecord(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/domain/details');
            });

            domain = new Domain(request);
            domain.details();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain;
            var stub;
            var expected = {
                domainname: 'example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            domain = new Domain(request);
            domain.details(expected);

            assert.ok(stub.called);
        });
    });

    describe('edit', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/domain/edit');
            });

            domain = new Domain(request);
            domain.edit();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain;
            var stub;
            var expected = {
                domainname: 'example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            domain = new Domain(request);
            domain.edit(expected);

            assert.ok(stub.called);
        });
    });

    describe('legacyWebHosting', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/domain/legacywebhosting');
            });

            domain = new Domain(request);
            domain.legacyWebHosting();

            assert.ok(stub.called);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/domain/list');
            });

            domain = new Domain(request);
            domain.list();

            assert.ok(stub.called);
        });
    });

    describe('listRecords', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/domain/listrecords');
            });

            domain = new Domain(request);
            domain.listRecords();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain;
            var stub;
            var expected = {
                domainname: 'example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            domain = new Domain(request);
            domain.listRecords(expected);

            assert.ok(stub.called);
        });
    });

    describe('priceList', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'get', function (url) {
                assert.strictEqual(url, '/domain/pricelist');
            });

            domain = new Domain(request);
            domain.priceList();

            assert.ok(stub.called);
        });
    });

    describe('register', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/domain/register');
            });

            domain = new Domain(request);
            domain.register();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain;
            var stub;
            var expected = {
                domainname: 'example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            domain = new Domain(request);
            domain.register(expected);

            assert.ok(stub.called);
        });
    });

    describe('renew', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/domain/renew');
            });

            domain = new Domain(request);
            domain.renew();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain;
            var stub;
            var expected = {
                domainname: 'example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            domain = new Domain(request);
            domain.renew(expected);

            assert.ok(stub.called);
        });
    });

    describe('setAutoRenew', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/domain/setautorenew');
            });

            domain = new Domain(request);
            domain.setAutoRenew();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain;
            var stub;
            var expected = {
                domainname: 'example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            domain = new Domain(request);
            domain.setAutoRenew(expected);

            assert.ok(stub.called);
        });
    });

    describe('transfer', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/domain/transfer');
            });

            domain = new Domain(request);
            domain.transfer();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain;
            var stub;
            var expected = {
                domainname: 'example.com',
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            domain = new Domain(request);
            domain.transfer(expected);

            assert.ok(stub.called);
        });
    });

    describe('updateRecord', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain;
            var stub;

            stub = sinon.stub(request, 'post', function (url) {
                assert.strictEqual(url, '/domain/updaterecord');
            });

            domain = new Domain(request);
            domain.updateRecord();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain;
            var stub;
            var expected = {
                recordid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data) {
                assert.deepEqual(data, expected);
            });

            domain = new Domain(request);
            domain.updateRecord(expected);

            assert.ok(stub.called);
        });
    });
});
