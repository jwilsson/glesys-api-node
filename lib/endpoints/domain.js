'use strict';

class Domain {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domainadd
    add (data) {
        return this.request.post('/domain/add', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domainaddrecord
    addRecord (data) {
        return this.request.post('/domain/addrecord', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domainallowedarguments
    allowedArguments () {
        return this.request.get('/domain/allowedarguments');
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domainavailable
    available (data) {
        return this.request.post('/domain/available', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domainchangenameservers
    changeNameServers (data) {
        return this.request.post('/domain/changenameservers', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domaindelete
    delete (data) {
        return this.request.post('/domain/delete', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domaindeleterecord
    deleteRecord (data) {
        return this.request.post('/domain/deleterecord', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domaindetails
    details (data) {
        return this.request.post('/domain/details', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domainedit
    edit (data) {
        return this.request.post('/domain/edit', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domainlegacywebhosting
    legacyWebHosting () {
        return this.request.get('/domain/legacywebhosting');
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domainlist
    list () {
        return this.request.get('/domain/list');
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domainlistrecords
    listRecords (data) {
        return this.request.post('/domain/listrecords', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domainpricelist
    priceList () {
        return this.request.get('/domain/pricelist');
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domainregister
    register (data) {
        return this.request.post('/domain/register', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domainrenew
    renew (data) {
        return this.request.post('/domain/renew', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domainsetautorenew
    setAutoRenew (data) {
        return this.request.post('/domain/setautorenew', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domaintransfer
    transfer (data) {
        return this.request.post('/domain/transfer', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_domain#domainupdaterecord
    updateRecord (data) {
        return this.request.post('/domain/updaterecord', data);
    }
}

module.exports = Domain;
