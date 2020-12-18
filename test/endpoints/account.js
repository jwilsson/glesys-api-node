'use strict';

const Account = require('../../lib/endpoints/account');
const Request = require('../../lib/request');

describe('endpoints/account', () => {
    let account;
    let request;

    beforeEach(() => {
        request = new Request();
        account = new Account(request);
    });

    test('info()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        account.info();

        expect(spy).toHaveBeenCalledWith('/account/info');
    });
});
