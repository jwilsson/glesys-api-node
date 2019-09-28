'use strict';

const assert = require('assert');
const sinon = require('sinon');

const User = require('../../lib/endpoints/user');
const Request = require('../../lib/request');

describe('endpoints/user', () => {
    describe('changePassword', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/user/changepassword');
            });

            user.changePassword();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const user = new User(request);
            const expected = {
                currentpassword: 'currentpassword',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            user.changePassword(expected);

            assert.ok(stub.called);
        });
    });

    describe('confirm', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/user/confirm');
            });

            user.confirm();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const user = new User(request);
            const expected = {
                token: 'token',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            user.confirm(expected);

            assert.ok(stub.called);
        });
    });

    describe('createOrganization', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/user/createorganization');
            });

            user.createOrganization();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const user = new User(request);
            const expected = {
                country: 'country',
                name: 'name',
                type: 'type',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            user.createOrganization(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/user/details');
            });

            user.details();

            assert.ok(stub.called);
        });
    });

    describe('disableTwoFactor', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/user/disabletwofactor');
            });

            user.disableTwoFactor();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const user = new User(request);
            const expected = {
                password: 'password',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            user.disableTwoFactor(expected);

            assert.ok(stub.called);
        });
    });

    describe('edit', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/user/edit');
            });

            user.edit();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const user = new User(request);
            const expected = {
                name: 'name',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            user.edit(expected);

            assert.ok(stub.called);
        });
    });

    describe('enableTwoFactor', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/user/enabletwofactor');
            });

            user.enableTwoFactor();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const user = new User(request);
            const expected = {
                method: 'method',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            user.enableTwoFactor(expected);

            assert.ok(stub.called);
        });
    });

    describe('listOrganizations', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/user/listorganizations');
            });

            user.listOrganizations();

            assert.ok(stub.called);
        });
    });

    describe('login', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/user/login');
            });

            user.login();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const user = new User(request);
            const expected = {
                username: 'username',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            user.login(expected);

            assert.ok(stub.called);
        });
    });

    describe('logout', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/user/logout');
            });

            user.logout();

            assert.ok(stub.called);
        });
    });

    describe('searchData', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/user/searchdata');
            });

            user.searchData();

            assert.ok(stub.called);
        });
    });

    describe('signUp', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const user = new User(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/user/signup');
            });

            user.signUp();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const user = new User(request);
            const expected = {
                email: 'email',
                locale: 'locale',
                name: 'name',
                password: 'password',
                termsofservice: 'termsofservice',
                useragent: 'useragent',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            user.signUp(expected);

            assert.ok(stub.called);
        });
    });
});
