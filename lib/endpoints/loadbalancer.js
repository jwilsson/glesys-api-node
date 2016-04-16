'use strict';

var LoadBalancer = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceraddbackend
LoadBalancer.prototype.addBackEnd = function (data) {
    return this.request.post('/loadbalancer/addbackend', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceraddcertificate
LoadBalancer.prototype.addCertificate = function (data) {
    return this.request.post('/loadbalancer/addcertificate', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceraddfrontend
LoadBalancer.prototype.addFrontEnd = function (data) {
    return this.request.post('/loadbalancer/addfrontend', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceraddtarget
LoadBalancer.prototype.addTarget = function (data) {
    return this.request.post('/loadbalancer/addtarget', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancercreate
LoadBalancer.prototype.create = function (data) {
    return this.request.post('/loadbalancer/create', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerdestroy
LoadBalancer.prototype.destroy = function (data) {
    return this.request.post('/loadbalancer/destroy', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerdetails
LoadBalancer.prototype.details = function (data) {
    return this.request.post('/loadbalancer/details', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerdisabletarget
LoadBalancer.prototype.disableTarget = function (data) {
    return this.request.post('/loadbalancer/disabletarget', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceredit
LoadBalancer.prototype.edit = function (data) {
    return this.request.post('/loadbalancer/edit', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancereditbackend
LoadBalancer.prototype.editBackEnd = function (data) {
    return this.request.post('/loadbalancer/editbackend', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancereditfrontend
LoadBalancer.prototype.editFrontEnd = function (data) {
    return this.request.post('/loadbalancer/editfrontend', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceredittarget
LoadBalancer.prototype.editTarget = function (data) {
    return this.request.post('/loadbalancer/edittarget', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerenabletarget
LoadBalancer.prototype.enableTarget = function (data) {
    return this.request.post('/loadbalancer/enabletarget', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerlist
LoadBalancer.prototype.list = function () {
    return this.request.get('/loadbalancer/list');
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerlistcertificate
LoadBalancer.prototype.listCertificate = function (data) {
    return this.request.post('/loadbalancer/listcertificate', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerremovebackend
LoadBalancer.prototype.removeBackEnd = function (data) {
    return this.request.post('/loadbalancer/removebackend', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerremovecertificate
LoadBalancer.prototype.removeCertificate = function (data) {
    return this.request.post('/loadbalancer/removecertificate', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerremovefrontend
LoadBalancer.prototype.removeFrontEnd = function (data) {
    return this.request.post('/loadbalancer/removefrontend', data);
};

// https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerremovetarget
LoadBalancer.prototype.removeTarget = function (data) {
    return this.request.post('/loadbalancer/removetarget', data);
};

module.exports = LoadBalancer;
