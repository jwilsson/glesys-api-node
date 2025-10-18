import Endpoint from '../endpoint.js';

class Email extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#emailcosts
    costs() {
        return this.request.get('/email/costs');
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#emailcreateaccount
    createAccount(data) {
        return this.request.post('/email/createaccount', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#emailcreatealias
    createAlias(data) {
        return this.request.post('/email/createalias', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#emaildelete
    delete(data) {
        return this.request.post('/email/delete', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#emaileditaccount
    editAccount(data) {
        return this.request.post('/email/editaccount', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#emaileditalias
    editAlias(data) {
        return this.request.post('/email/editalias', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#emaillist
    list(data) {
        return this.request.post('/email/list', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#emailoverview
    overview(data) {
        return this.request.get('/email/overview', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#emailquota
    quota(data) {
        return this.request.post('/email/quota', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#emailresetpassword
    resetPassword(data) {
        return this.request.post('/email/resetpassword', data);
    }
}

export default Email;
