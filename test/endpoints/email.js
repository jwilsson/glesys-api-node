'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Email = require('../../lib/endpoints/email');
const Request = require('../../lib/request');

describe('endpoints/email', () => {
    describe('costs', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const email = new Email(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/email/costs');
            });

            email.costs();

            assert.ok(stub.called);
        });
    });

    describe('createAccount', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const email = new Email(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/email/createaccount');
            });

            email.createAccount();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const email = new Email(request);
            const expected = {
                emailaccount: 'example@example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            email.createAccount(expected);

            assert.ok(stub.called);
        });
    });

    describe('createAlias', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const email = new Email(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/email/createalias');
            });

            email.createAlias();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const email = new Email(request);
            const expected = {
                emailalias: 'emailalias',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            email.createAlias(expected);

            assert.ok(stub.called);
        });
    });

    describe('delete', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const email = new Email(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/email/delete');
            });

            email.delete();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const email = new Email(request);
            const expected = {
                email: 'email',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            email.delete(expected);

            assert.ok(stub.called);
        });
    });

    describe('editAccount', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const email = new Email(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/email/editaccount');
            });

            email.editAccount();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const email = new Email(request);
            const expected = {
                emailaccount: 'example@example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            email.editAccount(expected);

            assert.ok(stub.called);
        });
    });

    describe('editAlias', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const email = new Email(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/email/editalias');
            });

            email.editAlias();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const email = new Email(request);
            const expected = {
                emailalias: 'alias@example.com',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            email.editAlias(expected);

            assert.ok(stub.called);
        });
    });

    describe('globalQuota', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const email = new Email(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/email/globalquota');
            });

            email.globalQuota();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const email = new Email(request);
            const expected = {
                globalquota: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            email.globalQuota(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const email = new Email(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/email/list');
            });

            email.list();

            assert.ok(stub.called);
        });

        it('should set the query string', () => {
            const request = new Request();
            const email = new Email(request);
            const expected = {
                domainname: 'example.com',
            };

            const stub = sinon.stub(request, 'get').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            email.list(expected);

            assert.ok(stub.called);
        });
    });

    describe('overview', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const email = new Email(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/email/overview');
            });

            email.overview();

            assert.ok(stub.called);
        });
    });

    describe('quota', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const email = new Email(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/email/quota');
            });

            email.quota();

            assert.ok(stub.called);
        });

        it('should set the query string', () => {
            const request = new Request();
            const email = new Email(request);
            const expected = {
                emailaccount: 'example@example.com',
            };

            const stub = sinon.stub(request, 'get').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            email.quota(expected);

            assert.ok(stub.called);
        });
    });
});
