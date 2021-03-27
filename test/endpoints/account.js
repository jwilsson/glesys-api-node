import Account from '../../lib/endpoints/account.js';
import Request from '../../lib/request.js';

describe('endpoints/account', () => {
    let account;
    let request;

    beforeEach(() => {
        request = new Request();
        account = new Account(request);
    });

    test('info()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        account.info();

        expect(spy).toHaveBeenCalledWith('/account/info');
    });
});
