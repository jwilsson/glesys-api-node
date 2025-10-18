import Endpoint from '../endpoint.js';

class Api extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#apilistfunctions
    listFunctions() {
        return this.request.get('/api/listfunctions');
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#apimaintenance
    maintenance() {
        return this.request.get('/api/maintenance');
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#apiserviceinfo
    serviceInfo() {
        return this.request.get('/api/serviceinfo');
    }
}

export default Api;
