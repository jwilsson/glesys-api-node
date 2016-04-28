'use strict';

class Ip {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_ip#ipadd
    add (data) {
        return this.request.post('/ip/add', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_ip#ipdetails
    details (data) {
        return this.request.post('/ip/details', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_ip#iplistfree
    listFree (data) {
        return this.request.post('/ip/listfree', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_ip#iplistown
    listOwn (data) {
        return this.request.post('/ip/listown', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_ip#iprelease
    release (data) {
        return this.request.post('/ip/release', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_ip#ipremove
    remove (data) {
        return this.request.post('/ip/remove', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_ip#ipresetptr
    resetPTR (data) {
        return this.request.post('/ip/resetptr', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_ip#ipsetptr
    setPTR (data) {
        return this.request.post('/ip/setptr', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_ip#iptake
    take (data) {
        return this.request.post('/ip/take', data);
    }
}

module.exports = Ip;
