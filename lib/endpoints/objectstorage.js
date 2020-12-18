'use strict';

class ObjectStorage {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/API-Documentation#objectstoragecreatecredential
    createCredential (data) {
        return this.request.post('/objectstorage/createcredential', data);
    }

    // https://github.com/GleSYS/API/wiki/API-Documentation#objectstoragecreateinstance
    createInstance (data) {
        return this.request.post('/objectstorage/createinstance', data);
    }

    // https://github.com/GleSYS/API/wiki/API-Documentation#objectstoragedeletecredential
    deleteCredential (data) {
        return this.request.post('/objectstorage/deletecredential', data);
    }

    // https://github.com/GleSYS/API/wiki/API-Documentation#objectstoragedeleteinstance
    deleteInstance (data) {
        return this.request.post('/objectstorage/deleteinstance', data);
    }

    // https://github.com/GleSYS/API/wiki/API-Documentation#objectstorageeditinstance
    editInstance (data) {
        return this.request.post('/objectstorage/editinstance', data);
    }

    // https://github.com/GleSYS/API/wiki/API-Documentation#objectstorageestimatedcost
    estimatedCost (data) {
        return this.request.post('/objectstorage/estimatedcost', data);
    }

    // https://github.com/GleSYS/API/wiki/API-Documentation#objectstorageinstancedetails
    instanceDetails (data) {
        return this.request.post('/objectstorage/instancedetails', data);
    }

    // https://github.com/GleSYS/API/wiki/API-Documentation#objectstoragelistinstances
    listInstances () {
        return this.request.get('/objectstorage/listinstances');
    }
}

module.exports = ObjectStorage;
