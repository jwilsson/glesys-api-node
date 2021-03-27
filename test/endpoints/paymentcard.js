import PaymentCard from '../../lib/endpoints/paymentcard';
import Request from '../../lib/request';

describe('endpoints/paymentcard', () => {
    let paymentCard;
    let request;

    beforeEach(() => {
        request = new Request();
        paymentCard = new PaymentCard(request);
    });

    test('add()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            description: 'description',
        };

        paymentCard.add(data);

        expect(spy).toHaveBeenCalledWith('/paymentcard/add', data);
    });

    test('delete()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            paymentcardid: 1,
        };

        paymentCard.delete(data);

        expect(spy).toHaveBeenCalledWith('/paymentcard/delete', data);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        paymentCard.list();

        expect(spy).toHaveBeenCalledWith('/paymentcard/list');
    });

    test('payInvoices()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            invoicenumbers: 1,
            paymentcardid: 1,
        };

        paymentCard.payInvoices(data);

        expect(spy).toHaveBeenCalledWith('/paymentcard/payinvoices', data);
    });
});
