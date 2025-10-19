import { beforeEach, describe, expect, test } from 'vitest';
import { PaymentCard } from '../../lib/endpoints/paymentcard.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/paymentcard', () => {
    let paymentCard: PaymentCard;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        paymentCard = new PaymentCard(request);
    });

    test('add()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            description: 'description',
        };

        await paymentCard.add(data);

        expect(spy).toHaveBeenCalledWith('/paymentcard/add', data);
    });
});
