import { beforeEach, describe, expect, test } from 'vitest';
import { Account } from '../../lib/endpoints/account.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/account', () => {
    let account: Account;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        account = new Account(request);
    });

    test('info()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await account.info();

        expect(spy).toHaveBeenCalledWith('/account/info');
    });
});
