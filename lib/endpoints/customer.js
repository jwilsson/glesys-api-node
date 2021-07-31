import Endpoint from '../endpoint';

class Customer extends Endpoint {
    // https://github.com/glesys/API/wiki/API-Documentation#customercreateproject
    createProject(data) {
        return this.request.post('/customer/createproject', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#customereditcollaborator
    editCollaborator(data) {
        return this.request.post('/customer/editcollaborator', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#customerlistcollaborators
    listCollaborators() {
        return this.request.get('/customer/listcollaborators');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#customerlistprojects
    listProjects() {
        return this.request.get('/customer/listprojects');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#customerremovecollaborator
    removeCollaborator(data) {
        return this.request.post('/customer/removecollaborator', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#customersettings
    settings(data) {
        return this.request.post('/customer/settings', data);
    }
}

export default Customer;
