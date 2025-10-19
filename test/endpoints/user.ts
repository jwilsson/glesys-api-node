import { beforeEach, describe, expect, test } from 'vitest';
import { User } from '../../lib/endpoints/user.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/user', () => {
    let user: User;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        user = new User(request);
    });

    test('changePassword()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            currentpassword: 'currentpassword',
        };

        await user.changePassword(data);

        expect(spy).toHaveBeenCalledWith('/user/changepassword', data);
    });

    test('confirm()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            token: 'token',
        };

        await user.confirm(data);

        expect(spy).toHaveBeenCalledWith('/user/confirm', data);
    });

    test('createOrganization()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            country: 'country',
            name: 'name',
            type: 'type',
        };

        await user.createOrganization(data);

        expect(spy).toHaveBeenCalledWith('/user/createorganization', data);
    });

    test('details()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await user.details();

        expect(spy).toHaveBeenCalledWith('/user/details');
    });

    test('disableTwoFactor()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            password: 'password',
        };

        await user.disableTwoFactor(data);

        expect(spy).toHaveBeenCalledWith('/user/disabletwofactor', data);
    });

    test('edit()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        await user.edit(data);

        expect(spy).toHaveBeenCalledWith('/user/edit', data);
    });

    test('enableTwoFactor()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            method: 'method',
        };

        await user.enableTwoFactor(data);

        expect(spy).toHaveBeenCalledWith('/user/enabletwofactor', data);
    });

    test('initiateSupportChallenge()', async () => {
        const spy = setupRequestSpy(request, 'post');

        await user.initiateSupportChallenge();

        expect(spy).toHaveBeenCalledWith('/user/initiatesupportchallenge');
    });

    test('listOrganizations()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await user.listOrganizations();

        expect(spy).toHaveBeenCalledWith('/user/listorganizations');
    });

    test('login()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        await user.login(data);

        expect(spy).toHaveBeenCalledWith('/user/login', data);
    });

    test('logout()', async () => {
        const spy = setupRequestSpy(request, 'post');

        await user.logout();

        expect(spy).toHaveBeenCalledWith('/user/logout');
    });

    test('searchData()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await user.searchData();

        expect(spy).toHaveBeenCalledWith('/user/searchdata');
    });

    test('signUp()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            email: 'email',
            locale: 'locale',
            name: 'name',
            password: 'password',
            termsofservice: 'termsofservice',
            useragent: 'useragent',
        };

        await user.signUp(data);

        expect(spy).toHaveBeenCalledWith('/user/signup', data);
    });

    test('supportChallenge()', async () => {
        const spy = setupRequestSpy(request, 'post');

        await user.supportChallenge();

        expect(spy).toHaveBeenCalledWith('/user/supportchallenge');
    });
});
