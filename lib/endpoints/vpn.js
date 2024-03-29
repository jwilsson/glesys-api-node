import Endpoint from '../endpoint.js';

class Vpn extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#vpncreateuser
    createUser(data) {
        return this.request.post('/vpn/createuser', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#vpndeleteuser
    deleteUser(data) {
        return this.request.post('/vpn/deleteuser', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#vpnedituser
    editUser(data) {
        return this.request.post('/vpn/edituser', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#vpnlistusers
    listUsers() {
        return this.request.get('/vpn/listusers');
    }
}

export default Vpn;
