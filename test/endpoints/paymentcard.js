import PaymentCard from '../../lib/endpoints/paymentcard.js';
import Request from '../../lib/request.js';

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
});
