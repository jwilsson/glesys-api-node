'use strict';

var Ip = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_ip#ipadd
Ip.prototype.add = function (data) {
    return this.request.post('/ip/add', data);
};

// https://github.com/GleSYS/API/wiki/functions_ip#ipdetails
Ip.prototype.details = function (data) {
    return this.request.post('/ip/details', data);
};

// https://github.com/GleSYS/API/wiki/functions_ip#iplistfree
Ip.prototype.listFree = function (data) {
    return this.request.post('/ip/listfree', data);
};

// https://github.com/GleSYS/API/wiki/functions_ip#iplistown
Ip.prototype.listOwn = function (data) {
    return this.request.post('/ip/listown', data);
};

// https://github.com/GleSYS/API/wiki/functions_ip#iprelease
Ip.prototype.release = function (data) {
    return this.request.post('/ip/release', data);
};

// https://github.com/GleSYS/API/wiki/functions_ip#ipremove
Ip.prototype.remove = function (data) {
    return this.request.post('/ip/remove', data);
};

// https://github.com/GleSYS/API/wiki/functions_ip#ipresetptr
Ip.prototype.resetPTR = function (data) {
    return this.request.post('/ip/resetptr', data);
};

// https://github.com/GleSYS/API/wiki/functions_ip#ipsetptr
Ip.prototype.setPTR = function (data) {
    return this.request.post('/ip/setptr', data);
};

// https://github.com/GleSYS/API/wiki/functions_ip#iptake
Ip.prototype.take = function (data) {
    return this.request.post('/ip/take', data);
};

module.exports = Ip;
