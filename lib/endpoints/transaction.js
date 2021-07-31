import Endpoint from '../endpoint';

class Transaction extends Endpoint {
    // https://github.com/glesys/API/wiki/API-Documentation#transactionacknowledge
    acknowledge(data) {
        return this.request.post('/transaction/acknowledge', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#transactioncancel
    cancel(data) {
        return this.request.post('/transaction/cancel', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#transactionlist
    list() {
        return this.request.get('/transaction/list');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#transactionstart
    start(data) {
        return this.request.post('/transaction/start', data);
    }
}

export default Transaction;
