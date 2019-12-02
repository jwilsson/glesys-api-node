'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Domain = require('../../lib/endpoints/domain');
const Request = require('../../lib/request');

describe('endpoints/domain', () => {
    describe('add', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/domain/add');
            });

            domain.add();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const domain = new Domain(request);
            const expected = {
                domainname: 'example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            domain.add(expected);

            assert.ok(stub.called);
        });
    });

    describe('addRecord', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);

            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/domain/addrecord');
            });

            domain.addRecord();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const domain = new Domain(request);
            const expected = {
                domainname: 'example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            domain.addRecord(expected);

            assert.ok(stub.called);
        });
    });

    describe('allowedArguments', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/domain/allowedarguments');
            });

            domain.allowedArguments();

            assert.ok(stub.called);
        });
    });

    describe('available', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/domain/available');
            });

            domain.available();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const domain = new Domain(request);
            const expected = {
                search: 'search',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            domain.available(expected);

            assert.ok(stub.called);
        });
    });

    describe('changeNameServers', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/domain/changenameservers');
            });

            domain.changeNameServers();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const domain = new Domain(request);
            const expected = {
                domainname: 'example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            domain.changeNameServers(expected);

            assert.ok(stub.called);
        });
    });

    describe('delete', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/domain/delete');
            });

            domain.delete();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const domain = new Domain(request);
            const expected = {
                domainname: 'example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            domain.delete(expected);

            assert.ok(stub.called);
        });
    });

    describe('deleteRecord', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/domain/deleterecord');
            });

            domain.deleteRecord();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const domain = new Domain(request);
            const expected = {
                recordid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            domain.deleteRecord(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/domain/details');
            });

            domain.details();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const domain = new Domain(request);
            const expected = {
                domainname: 'example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            domain.details(expected);

            assert.ok(stub.called);
        });
    });

    describe('edit', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/domain/edit');
            });

            domain.edit();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const domain = new Domain(request);
            const expected = {
                domainname: 'example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            domain.edit(expected);

            assert.ok(stub.called);
        });
    });

    describe('legacyWebHosting', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/domain/legacywebhosting');
            });

            domain.legacyWebHosting();

            assert.ok(stub.called);
        });
    });

    describe('list', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/domain/list');
            });

            domain.list();

            assert.ok(stub.called);
        });
    });

    describe('listRecords', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/domain/listrecords');
            });

            domain.listRecords();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const domain = new Domain(request);
            const expected = {
                domainname: 'example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            domain.listRecords(expected);

            assert.ok(stub.called);
        });
    });

    describe('priceList', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/domain/pricelist');
            });

            domain.priceList();

            assert.ok(stub.called);
        });
    });

    describe('register', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/domain/register');
            });

            domain.register();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const domain = new Domain(request);
            const expected = {
                domainname: 'example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            domain.register(expected);

            assert.ok(stub.called);
        });
    });

    describe('renew', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/domain/renew');
            });

            domain.renew();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const domain = new Domain(request);
            const expected = {
                domainname: 'example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            domain.renew(expected);

            assert.ok(stub.called);
        });
    });

    describe('setAutoRenew', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/domain/setautorenew');
            });

            domain.setAutoRenew();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const domain = new Domain(request);
            const expected = {
                domainname: 'example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            domain.setAutoRenew(expected);

            assert.ok(stub.called);
        });
    });

    describe('transfer', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/domain/transfer');
            });

            domain.transfer();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const domain = new Domain(request);
            const expected = {
                domainname: 'example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            domain.transfer(expected);

            assert.ok(stub.called);
        });
    });

    describe('updateRecord', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const domain = new Domain(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/domain/updaterecord');
            });

            domain.updateRecord();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const domain = new Domain(request);
            const expected = {
                recordid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            domain.updateRecord(expected);

            assert.ok(stub.called);
        });
    });
});
