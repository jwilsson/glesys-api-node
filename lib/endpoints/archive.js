'use strict';

var Archive = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_archive#archiveallowedarguments
Archive.prototype.allowedArguments = function () {
    return this.request.get('/archive/allowedarguments');
};

// https://github.com/GleSYS/API/wiki/functions_archive#archivechangedescription
Archive.prototype.changeDescription = function (data) {
    return this.request.post('/archive/changedescription', data);
};

// https://github.com/GleSYS/API/wiki/functions_archive#archivechangepassword
Archive.prototype.changePassword = function (data) {
    return this.request.post('/archive/changepassword', data);
};

// https://github.com/GleSYS/API/wiki/functions_archive#archivecreate
Archive.prototype.create = function (data) {
    return this.request.post('/archive/create', data);
};

// https://github.com/GleSYS/API/wiki/functions_archive#archivedelete
Archive.prototype.delete = function (data) {
    return this.request.post('/archive/delete', data);
};

// https://github.com/GleSYS/API/wiki/functions_archive#archivedetails
Archive.prototype.details = function (data) {
    return this.request.get('/archive/details', data);
};

// https://github.com/GleSYS/API/wiki/functions_archive#archivelist
Archive.prototype.list = function () {
    return this.request.get('/archive/list');
};

// https://github.com/GleSYS/API/wiki/functions_archive#archiveresize
Archive.prototype.resize = function (data) {
    return this.request.post('/archive/resize', data);
};

module.exports = Archive;
