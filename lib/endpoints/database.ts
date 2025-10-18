import Endpoint from '../endpoint.js';

class Database extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databaseconnectiondetails
    connectionDetails(data) {
        return this.request.post('/database/connectiondetails', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databasecreate
    create(data) {
        return this.request.post('/database/create', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databasedelete
    delete(data) {
        return this.request.post('/database/delete', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databasedetails
    details(data) {
        return this.request.post('/database/details', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databaseestimatedcost
    estimatedCost(data) {
        return this.request.post('/database/estimatedcost', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databaselist
    list() {
        return this.request.post('/database/list');
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databaselistplans
    listPlans() {
        return this.request.post('/database/listplans');
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databaseupdateallowlist
    updateAllowList(data) {
        return this.request.post('/database/updateallowlist', data);
    }
}

export default Database;
