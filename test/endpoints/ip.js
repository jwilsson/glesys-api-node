'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Ip = require('../../lib/endpoints/ip');
const Request = require('../../lib/request');

describe('endpoints/ip', () => {
    describe('add', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const ip = new Ip(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/ip/add');
            });

            ip.add();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const ip = new Ip(request);
            const expected = {
                ipaddress: '127.0.0.1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            ip.add(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const ip = new Ip(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/ip/details');
            });

            ip.details();

            assert.ok(stub.called);
        });

        it('should set the query string', () => {
            const request = new Request();
            const ip = new Ip(request);
            const expected = {
                ipaddress: '127.0.0.1',
            };

            const stub = sinon.stub(request, 'get').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            ip.details(expected);

            assert.ok(stub.called);
        });
    });

    describe('listFree', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const ip = new Ip(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/ip/listfree');
            });

            ip.listFree();

            assert.ok(stub.called);
        });

        it('should set the query string', () => {
            const request = new Request();
            const ip = new Ip(request);
            const expected = {
                ipversion: 4,
            };

            const stub = sinon.stub(request, 'get').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            ip.listFree(expected);

            assert.ok(stub.called);
        });
    });

    describe('listOwn', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const ip = new Ip(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/ip/listown');
            });

            ip.listOwn();

            assert.ok(stub.called);
        });

        it('should set the query string', () => {
            const request = new Request();
            const ip = new Ip(request);
            const expected = {
                ipversion: 4,
            };

            const stub = sinon.stub(request, 'get').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            ip.listOwn(expected);

            assert.ok(stub.called);
        });
    });

    describe('release', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const ip = new Ip(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/ip/release');
            });

            ip.release();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const ip = new Ip(request);
            const expected = {
                ipaddress: '127.0.0.1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            ip.release(expected);

            assert.ok(stub.called);
        });
    });

    describe('remove', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const ip = new Ip(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/ip/remove');
            });

            ip.remove();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const ip = new Ip(request);
            const expected = {
                ipaddress: '127.0.0.1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            ip.remove(expected);

            assert.ok(stub.called);
        });
    });

    describe('resetPTR', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const ip = new Ip(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/ip/resetptr');
            });

            ip.resetPTR();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const ip = new Ip(request);
            const expected = {
                ipaddress: '127.0.0.1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            ip.resetPTR(expected);

            assert.ok(stub.called);
        });
    });

    describe('setPTR', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const ip = new Ip(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/ip/setptr');
            });

            ip.setPTR();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const ip = new Ip(request);
            const expected = {
                ipaddress: '127.0.0.1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            ip.setPTR(expected);

            assert.ok(stub.called);
        });
    });

    describe('take', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const ip = new Ip(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/ip/take');
            });

            ip.take();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const ip = new Ip(request);
            const expected = {
                ipaddress: '127.0.0.1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            ip.take(expected);

            assert.ok(stub.called);
        });
    });
});
