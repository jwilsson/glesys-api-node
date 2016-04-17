'use strict';

class Api {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_api#apilistfunctions
    listFunctions () {
        return this.request.get('/api/listfunctions');
    }

    // https://github.com/GleSYS/API/wiki/functions_api#apimaintenance
    maintenance () {
        return this.request.get('/api/maintenance');
    }

    // https://github.com/GleSYS/API/wiki/functions_api#apiserviceinfo
    serviceInfo () {
        return this.request.get('/api/serviceinfo');
    }
}

module.exports = Api;
