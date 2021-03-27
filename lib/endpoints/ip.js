'use strict';

class Ip {
    constructor(request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#ipadd
    add(data) {
        return this.request.post('/ip/add', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#ipdetails
    details(data) {
        return this.request.post('/ip/details', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#iplistfree
    listFree(data) {
        return this.request.post('/ip/listfree', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#iplistown
    listOwn(data) {
        return this.request.post('/ip/listown', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#iprelease
    release(data) {
        return this.request.post('/ip/release', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#ipremove
    remove(data) {
        return this.request.post('/ip/remove', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#ipresetptr
    resetPTR(data) {
        return this.request.post('/ip/resetptr', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#ipsetptr
    setPTR(data) {
        return this.request.post('/ip/setptr', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#iptake
    take(data) {
        return this.request.post('/ip/take', data);
    }
}

module.exports = Ip;
