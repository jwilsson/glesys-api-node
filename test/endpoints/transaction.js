import Transaction from '../../lib/endpoints/transaction.js';
import Request from '../../lib/request.js';

describe('endpoints/transaction', () => {
    let transaction;
    let request;

    beforeEach(() => {
        request = new Request();
        transaction = new Transaction(request);
    });

    test('acknowledge()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            transactionid: 1,
        };

        transaction.acknowledge(data);

        expect(spy).toHaveBeenCalledWith('/transaction/acknowledge', data);
    });

    test('cancel()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            transactionid: 1,
        };

        transaction.cancel(data);

        expect(spy).toHaveBeenCalledWith('/transaction/cancel', data);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        transaction.list();

        expect(spy).toHaveBeenCalledWith('/transaction/list');
    });

    test('start()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            transactionid: 1,
        };

        transaction.start(data);

        expect(spy).toHaveBeenCalledWith('/transaction/start', data);
    });
});
