'use strict';

var ContactPerson = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_contactperson#contactpersonadd
ContactPerson.prototype.add = function (data) {
    return this.request.post('/contactperson/add', data);
};

// https://github.com/GleSYS/API/wiki/functions_contactperson#contactpersondelete
ContactPerson.prototype.delete = function (data) {
    return this.request.post('/contactperson/delete', data);
};

// https://github.com/GleSYS/API/wiki/functions_contactperson#contactpersonedit
ContactPerson.prototype.edit = function (data) {
    return this.request.post('/contactperson/edit', data);
};

// https://github.com/GleSYS/API/wiki/functions_contactperson#contactpersonlist
ContactPerson.prototype.list = function () {
    return this.request.get('/contactperson/list');
};

module.exports = ContactPerson;
