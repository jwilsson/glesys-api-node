class LoadBalancer {
    constructor(request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalanceraddbackend
    addBackEnd(data) {
        return this.request.post('/loadbalancer/addbackend', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalanceraddcertificate
    addCertificate(data) {
        return this.request.post('/loadbalancer/addcertificate', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalanceraddfrontend
    addFrontEnd(data) {
        return this.request.post('/loadbalancer/addfrontend', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalanceraddtarget
    addTarget(data) {
        return this.request.post('/loadbalancer/addtarget', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalanceraddtoblocklist
    addToBlacklist(data) {
        // Deprecated, use addToBlocklist instead
        return this.addToBlocklist(data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalanceraddtoblocklist
    addToBlocklist(data) {
        return this.request.post('/loadbalancer/addtoblocklist', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancercreate
    create(data) {
        return this.request.post('/loadbalancer/create', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancerdestroy
    destroy(data) {
        return this.request.post('/loadbalancer/destroy', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancerdetails
    details(data) {
        return this.request.post('/loadbalancer/details', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancerdisabletarget
    disableTarget(data) {
        return this.request.post('/loadbalancer/disabletarget', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalanceredit
    edit(data) {
        return this.request.post('/loadbalancer/edit', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancereditbackend
    editBackEnd(data) {
        return this.request.post('/loadbalancer/editbackend', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancereditfrontend
    editFrontEnd(data) {
        return this.request.post('/loadbalancer/editfrontend', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalanceredittarget
    editTarget(data) {
        return this.request.post('/loadbalancer/edittarget', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancerenabletarget
    enableTarget(data) {
        return this.request.post('/loadbalancer/enabletarget', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancererrors
    errors(data) {
        return this.request.get('/loadbalancer/errors', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancerlist
    list() {
        return this.request.get('/loadbalancer/list');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancerlistcertificate
    listCertificate(data) {
        return this.request.post('/loadbalancer/listcertificate', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancerremovebackend
    removeBackEnd(data) {
        return this.request.post('/loadbalancer/removebackend', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancerremovecertificate
    removeCertificate(data) {
        return this.request.post('/loadbalancer/removecertificate', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancerremovefromblocklist
    removeFromBlacklist(data) {
        // Deprecated, use removeFromBlocklist instead
        return this.removeFromBlocklist(data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancerremovefromblocklist
    removeFromBlocklist(data) {
        return this.request.post('/loadbalancer/removefromblocklist', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancerremovefrontend
    removeFrontEnd(data) {
        return this.request.post('/loadbalancer/removefrontend', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#loadbalancerremovetarget
    removeTarget(data) {
        return this.request.post('/loadbalancer/removetarget', data);
    }
}

export default LoadBalancer;
