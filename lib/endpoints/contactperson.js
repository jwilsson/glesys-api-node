'use strict';

class ContactPerson {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_contactperson#contactpersonadd
    add (data) {
        return this.request.post('/contactperson/add', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_contactperson#contactpersondelete
    delete (data) {
        return this.request.post('/contactperson/delete', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_contactperson#contactpersonedit
    edit (data) {
        return this.request.post('/contactperson/edit', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_contactperson#contactpersonlist
    list () {
        return this.request.get('/contactperson/list');
    }
}

module.exports = ContactPerson;
