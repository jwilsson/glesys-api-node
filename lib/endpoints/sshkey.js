import Endpoint from '../endpoint.js';

class SshKey extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#sshkeyadd
    add(data) {
        return this.request.post('/sshkey/add', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#sshkeylist
    list() {
        return this.request.get('/sshkey/list');
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#sshkeyremove
    remove(data) {
        return this.request.post('/sshkey/remove', data);
    }
}

export default SshKey;
