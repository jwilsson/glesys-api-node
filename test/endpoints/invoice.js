'use strict';

const Invoice = require('../../lib/endpoints/invoice');
const Request = require('../../lib/request');

describe('endpoints/invoice', () => {
    let invoice;
    let request;

    beforeEach(() => {
        request = new Request();
        invoice = new Invoice(request);
    });

    test('billingPeriod()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            account: 'account',
        };

        invoice.billingPeriod(data);

        expect(spy).toHaveBeenCalledWith('/invoice/billingperiod', data);
    });

    test('list()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        invoice.list();

        expect(spy).toHaveBeenCalledWith('/invoice/list');
    });

    test('next()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        invoice.next();

        expect(spy).toHaveBeenCalledWith('/invoice/next');
    });

    test('payByPaypal()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            invoicenumbers: 1,
        };

        invoice.payByPaypal(data);

        expect(spy).toHaveBeenCalledWith('/invoice/paybypaypal', data);
    });
});
