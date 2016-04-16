'use strict';

var SshKey = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_sshkey#sshkeyadd
SshKey.prototype.add = function (data) {
    return this.request.post('/sshkey/add', data);
};

// https://github.com/GleSYS/API/wiki/functions_sshkey#sshkeylist
SshKey.prototype.list = function () {
    return this.request.get('/sshkey/list');
};

// https://github.com/GleSYS/API/wiki/functions_sshkey#sshkeyremove
SshKey.prototype.remove = function (data) {
    return this.request.post('/sshkey/remove', data);
};

module.exports = SshKey;
