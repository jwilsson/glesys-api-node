'use strict';

class LoadBalancer {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceraddbackend
    addBackEnd (data) {
        return this.request.post('/loadbalancer/addbackend', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceraddcertificate
    addCertificate (data) {
        return this.request.post('/loadbalancer/addcertificate', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceraddfrontend
    addFrontEnd (data) {
        return this.request.post('/loadbalancer/addfrontend', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceraddtarget
    addTarget (data) {
        return this.request.post('/loadbalancer/addtarget', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancercreate
    create (data) {
        return this.request.post('/loadbalancer/create', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerdestroy
    destroy (data) {
        return this.request.post('/loadbalancer/destroy', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerdetails
    details (data) {
        return this.request.post('/loadbalancer/details', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerdisabletarget
    disableTarget (data) {
        return this.request.post('/loadbalancer/disabletarget', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceredit
    edit (data) {
        return this.request.post('/loadbalancer/edit', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancereditbackend
    editBackEnd (data) {
        return this.request.post('/loadbalancer/editbackend', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancereditfrontend
    editFrontEnd (data) {
        return this.request.post('/loadbalancer/editfrontend', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceredittarget
    editTarget (data) {
        return this.request.post('/loadbalancer/edittarget', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerenabletarget
    enableTarget (data) {
        return this.request.post('/loadbalancer/enabletarget', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerlist
    list () {
        return this.request.get('/loadbalancer/list');
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerlistcertificate
    listCertificate (data) {
        return this.request.post('/loadbalancer/listcertificate', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerremovebackend
    removeBackEnd (data) {
        return this.request.post('/loadbalancer/removebackend', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerremovecertificate
    removeCertificate (data) {
        return this.request.post('/loadbalancer/removecertificate', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerremovefrontend
    removeFrontEnd (data) {
        return this.request.post('/loadbalancer/removefrontend', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerremovetarget
    removeTarget (data) {
        return this.request.post('/loadbalancer/removetarget', data);
    }
}

module.exports = LoadBalancer;
