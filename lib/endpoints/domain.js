import Endpoint from '../endpoint.js';

class Domain extends Endpoint {
    // https://github.com/glesys/API/wiki/API-Documentation#domainadd
    add(data) {
        return this.request.post('/domain/add', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domainaddrecord
    addRecord(data) {
        return this.request.post('/domain/addrecord', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domainallowedarguments
    allowedArguments() {
        return this.request.get('/domain/allowedarguments');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domainavailable
    available(data) {
        return this.request.post('/domain/available', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domainchangenameservers
    changeNameServers(data) {
        return this.request.post('/domain/changenameservers', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domaindelete
    delete(data) {
        return this.request.post('/domain/delete', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domaindeleterecord
    deleteRecord(data) {
        return this.request.post('/domain/deleterecord', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domaindetails
    details(data) {
        return this.request.post('/domain/details', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domainedit
    edit(data) {
        return this.request.post('/domain/edit', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domainexport
    export(data) {
        return this.request.post('/domain/export', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domainlegacywebhosting
    legacyWebHosting() {
        return this.request.get('/domain/legacywebhosting');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domainlist
    list() {
        return this.request.get('/domain/list');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domainlistrecords
    listRecords(data) {
        return this.request.post('/domain/listrecords', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domainpricelist
    priceList() {
        return this.request.get('/domain/pricelist');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domainregister
    register(data) {
        return this.request.post('/domain/register', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domainrenew
    renew(data) {
        return this.request.post('/domain/renew', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domainsetautorenew
    setAutoRenew(data) {
        return this.request.post('/domain/setautorenew', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domaintransfer
    transfer(data) {
        return this.request.post('/domain/transfer', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#domainupdaterecord
    updateRecord(data) {
        return this.request.post('/domain/updaterecord', data);
    }
}

export default Domain;
