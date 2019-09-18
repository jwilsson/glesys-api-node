'use strict';

class ContactPerson {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#contactpersonadd
    add (data) {
        return this.request.post('/contactperson/add', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#contactpersondelete
    delete (data) {
        return this.request.post('/contactperson/delete', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#contactpersonedit
    edit (data) {
        return this.request.post('/contactperson/edit', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#contactpersonlist
    list () {
        return this.request.get('/contactperson/list');
    }
}

module.exports = ContactPerson;
