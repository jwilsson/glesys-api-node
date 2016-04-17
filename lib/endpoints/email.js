'use strict';

class Email {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_email#emailcosts
    costs () {
        return this.request.get('/email/costs');
    }

    // https://github.com/GleSYS/API/wiki/functions_email#emailcreateaccount
    createAccount (data) {
        return this.request.post('/email/createaccount', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_email#emailcreatealias
    createAlias (data) {
        return this.request.post('/email/createalias', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_email#emaildelete
    delete (data) {
        return this.request.post('/email/delete', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_email#emaileditaccount
    editAccount (data) {
        return this.request.post('/email/editaccount', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_email#emaileditalias
    editAlias (data) {
        return this.request.post('/email/editalias', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_email#emailglobalquota
    globalQuota (data) {
        return this.request.post('/email/globalquota', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_email#emaillist
    list (data) {
        return this.request.post('/email/list', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_email#emailoverview
    overview () {
        return this.request.get('/email/overview');
    }

    // https://github.com/GleSYS/API/wiki/functions_email#emailquota
    quota (data) {
        return this.request.post('/email/quota', data);
    }
}

module.exports = Email;
