'use strict';

class Archive {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_archive#archiveallowedarguments
    allowedArguments () {
        return this.request.get('/archive/allowedarguments');
    }

    // https://github.com/GleSYS/API/wiki/functions_archive#archivechangedescription
    changeDescription (data) {
        return this.request.post('/archive/changedescription', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_archive#archivechangepassword
    changePassword (data) {
        return this.request.post('/archive/changepassword', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_archive#archivecreate
    create (data) {
        return this.request.post('/archive/create', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_archive#archivedelete
    delete (data) {
        return this.request.post('/archive/delete', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_archive#archivedetails
    details (data) {
        return this.request.post('/archive/details', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_archive#archivelist
    list () {
        return this.request.get('/archive/list');
    }

    // https://github.com/GleSYS/API/wiki/functions_archive#archiveresize
    resize (data) {
        return this.request.post('/archive/resize', data);
    }
}

module.exports = Archive;
