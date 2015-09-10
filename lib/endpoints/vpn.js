'use strict';

var Vpn = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_vpn#vpncreateuser
Vpn.prototype.createUser = function (data) {
    return this.request.post('/vpn/createuser', data);
};

// https://github.com/GleSYS/API/wiki/functions_vpn#vpndeleteuser
Vpn.prototype.deleteUser = function (data) {
    return this.request.post('/vpn/deleteuser', data);
};

// https://github.com/GleSYS/API/wiki/functions_vpn#vpnedituser
Vpn.prototype.editUser = function (data) {
    return this.request.post('/vpn/edituser', data);
};

// https://github.com/GleSYS/API/wiki/functions_vpn#vpnlistusers
Vpn.prototype.listUsers = function () {
    return this.request.get('/vpn/listusers');
};

module.exports = Vpn;
