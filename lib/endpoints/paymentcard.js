import Endpoint from '../endpoint.js';

class PaymentCard extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#paymentcardadd
    add(data) {
        return this.request.post('/paymentcard/add', data);
    }
}

export default PaymentCard;
