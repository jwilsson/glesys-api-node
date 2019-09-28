'use strict';

class Network {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#networkcreate
    create (data) {
        return this.request.post('/network/create', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#networkdelete
    delete (data) {
        return this.request.post('/network/delete', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#networkdetails
    details (data) {
        return this.request.get('/network/details', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#networkedit
    edit (data) {
        return this.request.post('/network/edit', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#networklist
    list () {
        return this.request.get('/network/list');
    }
}

module.exports = Network;
