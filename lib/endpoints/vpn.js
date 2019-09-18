'use strict';

class Vpn {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#vpncreateuser
    createUser (data) {
        return this.request.post('/vpn/createuser', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#vpndeleteuser
    deleteUser (data) {
        return this.request.post('/vpn/deleteuser', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#vpnedituser
    editUser (data) {
        return this.request.post('/vpn/edituser', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#vpnlistusers
    listUsers () {
        return this.request.get('/vpn/listusers');
    }
}

module.exports = Vpn;
