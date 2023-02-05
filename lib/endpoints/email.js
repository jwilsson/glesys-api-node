import Endpoint from '../endpoint.js';

class Email extends Endpoint {
    // https://github.com/glesys/API/wiki/API-Documentation#emailcosts
    costs() {
        return this.request.get('/email/costs');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#emailcreateaccount
    createAccount(data) {
        return this.request.post('/email/createaccount', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#emailcreatealias
    createAlias(data) {
        return this.request.post('/email/createalias', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#emaildelete
    delete(data) {
        return this.request.post('/email/delete', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#emaileditaccount
    editAccount(data) {
        return this.request.post('/email/editaccount', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#emaileditalias
    editAlias(data) {
        return this.request.post('/email/editalias', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#emailglobalquota
    globalQuota(data) {
        return this.request.post('/email/globalquota', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#emaillist
    list(data) {
        return this.request.post('/email/list', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#emailoverview
    overview(data) {
        return this.request.get('/email/overview', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#emailquota
    quota(data) {
        return this.request.post('/email/quota', data);
    }

    // https://github.com/GleSYS/API/wiki/API-Documentation#emailresetpassword
    resetPassword(data) {
        return this.request.post('/email/resetpassword', data);
    }
}

export default Email;
