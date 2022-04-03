import Endpoint from '../endpoint.js';

class Project extends Endpoint {
    // https://github.com/glesys/API/wiki/API-Documentation#projectedit
    edit(data) {
        return this.request.post('/project/edit', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#projectdelete
    delete() {
        return this.request.post('/project/delete');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#projectrename
    rename(data) {
        return this.request.post('/project/rename', data);
    }
}

export default Project;
