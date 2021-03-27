class Api {
    constructor(request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#apilistfunctions
    listFunctions() {
        return this.request.get('/api/listfunctions');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#apimaintenance
    maintenance() {
        return this.request.get('/api/maintenance');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#apiserviceinfo
    serviceInfo() {
        return this.request.get('/api/serviceinfo');
    }
}

export default Api;
