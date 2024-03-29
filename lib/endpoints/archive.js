import Endpoint from '../endpoint.js';

class Archive extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#archiveallowedarguments
    allowedArguments() {
        return this.request.get('/archive/allowedarguments');
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#archivechangedescription
    changeDescription(data) {
        return this.request.post('/archive/changedescription', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#archivechangepassword
    changePassword(data) {
        return this.request.post('/archive/changepassword', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#archivecreate
    create(data) {
        return this.request.post('/archive/create', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#archivedelete
    delete(data) {
        return this.request.post('/archive/delete', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#archivedetails
    details(data) {
        return this.request.post('/archive/details', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#archivelist
    list() {
        return this.request.get('/archive/list');
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#archiveresize
    resize(data) {
        return this.request.post('/archive/resize', data);
    }
}

export default Archive;
