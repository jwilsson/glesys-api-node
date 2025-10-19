import { beforeEach, describe, expect, test } from 'vitest';
import { Invoice } from '../../lib/endpoints/invoice.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/invoice', () => {
    let invoice: Invoice;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        invoice = new Invoice(request);
    });

    test('list()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await invoice.list();

        expect(spy).toHaveBeenCalledWith('/invoice/list');
    });

    test('next()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await invoice.next();

        expect(spy).toHaveBeenCalledWith('/invoice/next');
    });

    test('payByPaypal()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            invoicenumbers: 1,
        };

        await invoice.payByPaypal(data);

        expect(spy).toHaveBeenCalledWith('/invoice/paybypaypal', data);
    });
});
