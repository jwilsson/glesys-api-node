'use strict';

class NetworkAdapter {
    constructor(request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#networkadaptercreate
    create(data) {
        return this.request.post('/networkadapter/create', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#networkadapterdelete
    delete(data) {
        return this.request.post('/networkadapter/delete', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#networkadapterdetails
    details(data) {
        return this.request.get('/networkadapter/details', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#networkadapteredit
    edit(data) {
        return this.request.post('/networkadapter/edit', data);
    }
}

module.exports = NetworkAdapter;
