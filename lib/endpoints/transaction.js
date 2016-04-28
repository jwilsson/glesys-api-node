'use strict';

class Transaction {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_transaction#transactionacknowledge
    acknowledge (data) {
        return this.request.post('/transaction/acknowledge', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_transaction#transactioncancel
    cancel (data) {
        return this.request.post('/transaction/cancel', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_transaction#transactionlist
    list () {
        return this.request.get('/transaction/list');
    }

    // https://github.com/GleSYS/API/wiki/functions_transaction#transactionstart
    start (data) {
        return this.request.post('/transaction/start', data);
    }
}

module.exports = Transaction;
