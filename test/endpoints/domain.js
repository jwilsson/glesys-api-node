'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Domain = require('../../lib/endpoints/domain');
var Request = require('../../lib/request');

describe('endpoints/domain', function () {
    describe('add', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/domain/add');
            });

            domain.add();
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain = new Domain(request);
            var expected = {
                domainname: 'example.com',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            domain.add(expected);
        });
    });

    describe('addRecord', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/domain/addrecord');
            });

            domain.addRecord();
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain = new Domain(request);
            var expected = {
                domainname: 'example.com',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            domain.addRecord(expected);
        });
    });

    describe('allowedArguments', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/domain/allowedarguments');
            });

            domain.allowedArguments();
        });
    });

    describe('available', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/domain/available');
            });

            domain.available();
        });

        it('should set the query string', function () {
            var request = new Request();
            var domain = new Domain(request);
            var expected = {
                search: 'search',
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            domain.available(expected);
        });
    });

    describe('changeNameServers', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/domain/changenameservers');
            });

            domain.changeNameServers();
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain = new Domain(request);
            var expected = {
                domainname: 'example.com',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            domain.changeNameServers(expected);
        });
    });

    describe('delete', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/domain/delete');
            });

            domain.delete();
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain = new Domain(request);
            var expected = {
                domainname: 'example.com',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            domain.delete(expected);
        });
    });

    describe('deleteRecord', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/domain/deleterecord');
            });

            domain.deleteRecord();
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain = new Domain(request);
            var expected = {
                recordid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            domain.deleteRecord(expected);
        });
    });

    describe('details', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/domain/details');
            });

            domain.details();
        });

        it('should set the query string', function () {
            var request = new Request();
            var domain = new Domain(request);
            var expected = {
                domainname: 'example.com',
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            domain.details(expected);
        });
    });

    describe('edit', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/domain/edit');
            });

            domain.edit();
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain = new Domain(request);
            var expected = {
                domainname: 'example.com',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            domain.edit(expected);
        });
    });

    describe('legacyWebHosting', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/domain/legacywebhosting');
            });

            domain.legacyWebHosting();
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/domain/list');
            });

            domain.list();
        });
    });

    describe('listRecords', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/domain/listrecords');
            });

            domain.listRecords();
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain = new Domain(request);
            var expected = {
                domainname: 'example.com',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            domain.listRecords(expected);
        });
    });

    describe('priceList', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/domain/pricelist');
            });

            domain.priceList();
        });
    });

    describe('register', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/domain/register');
            });

            domain.register();
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain = new Domain(request);
            var expected = {
                domainname: 'example.com',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            domain.register(expected);
        });
    });

    describe('renew', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/domain/renew');
            });

            domain.renew();
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain = new Domain(request);
            var expected = {
                domainname: 'example.com',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            domain.renew(expected);
        });
    });

    describe('setAutoRenew', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/domain/setautorenew');
            });

            domain.setAutoRenew();
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain = new Domain(request);
            var expected = {
                domainname: 'example.com',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            domain.setAutoRenew(expected);
        });
    });

    describe('transfer', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/domain/transfer');
            });

            domain.transfer();
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain = new Domain(request);
            var expected = {
                domainname: 'example.com',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            domain.transfer(expected);
        });
    });

    describe('updateRecord', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var domain = new Domain(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/domain/updaterecord');
            });

            domain.updateRecord();
        });

        it('should set the request body', function () {
            var request = new Request();
            var domain = new Domain(request);
            var expected = {
                recordid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            domain.updateRecord(expected);
        });
    });
});
