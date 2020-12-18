'use strict';

const User = require('../../lib/endpoints/user');
const Request = require('../../lib/request');

describe('endpoints/user', () => {
    let request;
    let user;

    beforeEach(() => {
        request = new Request();
        user = new User(request);
    });

    test('changePassword()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            currentpassword: 'currentpassword',
        };

        user.changePassword(data);

        expect(spy).toHaveBeenCalledWith('/user/changepassword', data);
    });

    test('confirm()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            token: 'token',
        };

        user.confirm(data);

        expect(spy).toHaveBeenCalledWith('/user/confirm', data);
    });

    test('createOrganization()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            country: 'country',
            name: 'name',
            type: 'type',
        };

        user.createOrganization(data);

        expect(spy).toHaveBeenCalledWith('/user/createorganization', data);
    });

    test('details()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        user.details();

        expect(spy).toHaveBeenCalledWith('/user/details');
    });

    test('disableTwoFactor()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            password: 'password',
        };

        user.disableTwoFactor(data);

        expect(spy).toHaveBeenCalledWith('/user/disabletwofactor', data);
    });

    test('edit()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        user.edit(data);

        expect(spy).toHaveBeenCalledWith('/user/edit', data);
    });

    test('enableTwoFactor()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            method: 'method',
        };

        user.enableTwoFactor(data);

        expect(spy).toHaveBeenCalledWith('/user/enabletwofactor', data);
    });

    test('listOrganizations()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        user.listOrganizations();

        expect(spy).toHaveBeenCalledWith('/user/listorganizations');
    });

    test('login()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        user.login(data);

        expect(spy).toHaveBeenCalledWith('/user/login', data);
    });

    test('logout()', () => {
        const spy = global.setupRequestSpy(request, 'post');

        user.logout();

        expect(spy).toHaveBeenCalledWith('/user/logout');
    });

    test('searchData()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        user.searchData();

        expect(spy).toHaveBeenCalledWith('/user/searchdata');
    });

    test('signUp()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            email: 'email',
            locale: 'locale',
            name: 'name',
            password: 'password',
            termsofservice: 'termsofservice',
            useragent: 'useragent',
        };

        user.signUp(data);

        expect(spy).toHaveBeenCalledWith('/user/signup', data);
    });
});
