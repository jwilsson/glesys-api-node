'use strict';

class Project {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#projectdelete
    delete () {
        return this.request.post('/project/delete');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#projectrename
    rename (data) {
        return this.request.post('/project/rename', data);
    }
}

module.exports = Project;
