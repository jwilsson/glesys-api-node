import Endpoint from '../endpoint.js';

class Customer extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#customercreateproject
    createProject(data) {
        return this.request.post('/customer/createproject', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#customereditcollaborator
    editCollaborator(data) {
        return this.request.post('/customer/editcollaborator', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#customerlistcollaborators
    listCollaborators() {
        return this.request.get('/customer/listcollaborators');
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#customerlistprojects
    listProjects() {
        return this.request.get('/customer/listprojects');
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#customerremovecollaborator
    removeCollaborator(data) {
        return this.request.post('/customer/removecollaborator', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#customersettings
    settings(data) {
        return this.request.post('/customer/settings', data);
    }
}

export default Customer;
