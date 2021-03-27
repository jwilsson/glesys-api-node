import Invoice from '../../lib/endpoints/invoice.js';
import Request from '../../lib/request.js';

describe('endpoints/invoice', () => {
    let invoice;
    let request;

    beforeEach(() => {
        request = new Request();
        invoice = new Invoice(request);
    });

    test('billingPeriod()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            account: 'account',
        };

        invoice.billingPeriod(data);

        expect(spy).toHaveBeenCalledWith('/invoice/billingperiod', data);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        invoice.list();

        expect(spy).toHaveBeenCalledWith('/invoice/list');
    });

    test('next()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        invoice.next();

        expect(spy).toHaveBeenCalledWith('/invoice/next');
    });

    test('payByPaypal()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            invoicenumbers: 1,
        };

        invoice.payByPaypal(data);

        expect(spy).toHaveBeenCalledWith('/invoice/paybypaypal', data);
    });
});
