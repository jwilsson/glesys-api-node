import Email from '../../lib/endpoints/email.js';
import Request from '../../lib/request.js';

describe('endpoints/email', () => {
    let request;
    let email;

    beforeEach(() => {
        request = new Request();
        email = new Email(request);
    });

    test('costs()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        email.costs();

        expect(spy).toHaveBeenCalledWith('/email/costs');
    });

    test('createAccount()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            emailaccount: 'example@example.com',
        };

        email.createAccount(data);

        expect(spy).toHaveBeenCalledWith('/email/createaccount', data);
    });

    test('createAlias()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            emailalias: 'emailalias',
        };

        email.createAlias(data);

        expect(spy).toHaveBeenCalledWith('/email/createalias', data);
    });

    test('delete()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            email: 'email',
        };

        email.delete(data);

        expect(spy).toHaveBeenCalledWith('/email/delete', data);
    });

    test('editAccount()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            emailaccount: 'example@example.com',
        };

        email.editAccount(data);

        expect(spy).toHaveBeenCalledWith('/email/editaccount', data);
    });

    test('editAlias()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            emailalias: 'alias@example.com',
        };

        email.editAlias(data);

        expect(spy).toHaveBeenCalledWith('/email/editalias', data);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            domainname: 'example.com',
        };

        email.list(data);

        expect(spy).toHaveBeenCalledWith('/email/list', data);
    });

    test('overview()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');
        const data = {
            page: 1,
        };

        email.overview(data);

        expect(spy).toHaveBeenCalledWith('/email/overview', data);
    });

    test('quota()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            emailaccount: 'example@example.com',
        };

        email.quota(data);

        expect(spy).toHaveBeenCalledWith('/email/quota', data);
    });

    test('resetPassword()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            emailaccount: 'example@example.com',
        };

        email.resetPassword(data);

        expect(spy).toHaveBeenCalledWith('/email/resetpassword', data);
    });
});
