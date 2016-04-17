'use strict';

class SshKey {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_sshkey#sshkeyadd
    add (data) {
        return this.request.post('/sshkey/add', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_sshkey#sshkeylist
    list () {
        return this.request.get('/sshkey/list');
    }

    // https://github.com/GleSYS/API/wiki/functions_sshkey#sshkeyremove
    remove (data) {
        return this.request.post('/sshkey/remove', data);
    }
}

module.exports = SshKey;
