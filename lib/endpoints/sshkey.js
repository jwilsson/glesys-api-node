'use strict';

class SshKey {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#sshkeyadd
    add (data) {
        return this.request.post('/sshkey/add', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#sshkeylist
    list () {
        return this.request.get('/sshkey/list');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#sshkeyremove
    remove (data) {
        return this.request.post('/sshkey/remove', data);
    }
}

module.exports = SshKey;
