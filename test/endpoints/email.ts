import { beforeEach, describe, expect, test } from 'vitest';
import Email from '../../lib/endpoints/email.js';
import Request from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/email', () => {
    let email: Email;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        email = new Email(request);
    });

    test('costs()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await email.costs();

        expect(spy).toHaveBeenCalledWith('/email/costs');
    });

    test('createAccount()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            emailaccount: 'example@example.com',
        };

        await email.createAccount(data);

        expect(spy).toHaveBeenCalledWith('/email/createaccount', data);
    });

    test('createAlias()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            emailalias: 'emailalias',
        };

        await email.createAlias(data);

        expect(spy).toHaveBeenCalledWith('/email/createalias', data);
    });

    test('delete()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            email: 'email',
        };

        await email.delete(data);

        expect(spy).toHaveBeenCalledWith('/email/delete', data);
    });

    test('editAccount()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            emailaccount: 'example@example.com',
        };

        await email.editAccount(data);

        expect(spy).toHaveBeenCalledWith('/email/editaccount', data);
    });

    test('editAlias()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            emailalias: 'alias@example.com',
        };

        await email.editAlias(data);

        expect(spy).toHaveBeenCalledWith('/email/editalias', data);
    });

    test('list()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        await email.list(data);

        expect(spy).toHaveBeenCalledWith('/email/list', data);
    });

    test('overview()', async () => {
        const spy = setupRequestSpy(request, 'get');
        const data = {
            page: 1,
        };

        await email.overview(data);

        expect(spy).toHaveBeenCalledWith('/email/overview', data);
    });

    test('quota()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            emailaccount: 'example@example.com',
        };

        await email.quota(data);

        expect(spy).toHaveBeenCalledWith('/email/quota', data);
    });

    test('resetPassword()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            emailaccount: 'example@example.com',
        };

        await email.resetPassword(data);

        expect(spy).toHaveBeenCalledWith('/email/resetpassword', data);
    });
});
