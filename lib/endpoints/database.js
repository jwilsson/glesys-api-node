import { Endpoint } from '../endpoint.js';

export class Database extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databaseconnectiondetails
    connectionDetails(data) {
        return this.request.post('/database/connectiondetails', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databasecreate
    create(data) {
        return this.request.post('/database/create', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databasecreatedatabase
    createDatabase(data) {
        return this.request.post('/database/createdatabase', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databasecreateuser
    createUser(data) {
        return this.request.post('/database/createuser', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databasedelete
    delete(data) {
        return this.request.post('/database/delete', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databasedeletedatabase
    deleteDatabase(data) {
        return this.request.post('/database/deletedatabase', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databasedeleteuser
    deleteUser(data) {
        return this.request.post('/database/deleteuser', data);
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

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databaseresetuserpassword
    resetUserPassword(data) {
        return this.request.post('/database/resetuserpassword', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databasesetuserpermissions
    setUserPermissions(data) {
        return this.request.post('/database/setuserpermissions', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#databaseupdateallowlist
    updateAllowList(data) {
        return this.request.post('/database/updateallowlist', data);
    }
}
