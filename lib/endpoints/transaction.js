'use strict';

var Transaction = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_transaction#transactionacknowledge
Transaction.prototype.acknowledge = function (data) {
    return this.request.post('/transaction/acknowledge', data);
};

// https://github.com/GleSYS/API/wiki/functions_transaction#transactioncancel
Transaction.prototype.cancel = function (data) {
    return this.request.post('/transaction/cancel', data);
};

// https://github.com/GleSYS/API/wiki/functions_transaction#transactionlist
Transaction.prototype.list = function () {
    return this.request.get('/transaction/list');
};

// https://github.com/GleSYS/API/wiki/functions_transaction#transactionstart
Transaction.prototype.start = function (data) {
    return this.request.post('/transaction/start', data);
};

module.exports = Transaction;
