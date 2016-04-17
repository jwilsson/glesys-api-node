'use strict';

class Vpn {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_vpn#vpncreateuser
    createUser (data) {
        return this.request.post('/vpn/createuser', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_vpn#vpndeleteuser
    deleteUser (data) {
        return this.request.post('/vpn/deleteuser', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_vpn#vpnedituser
    editUser (data) {
        return this.request.post('/vpn/edituser', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_vpn#vpnlistusers
    listUsers () {
        return this.request.get('/vpn/listusers');
    }
}

module.exports = Vpn;
