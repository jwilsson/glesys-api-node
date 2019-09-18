'use strict';

class User {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#userchangepassword
    changePassword (data) {
        return this.request.post('/user/changepassword', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#userdetails
    details () {
        return this.request.get('/user/details');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#userdisabletwofactor
    disableTwoFactor (data) {
        return this.request.post('/user/disabletwofactor', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#useredit
    edit (data) {
        return this.request.post('/user/edit', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#userenabletwofactor
    enableTwoFactor (data) {
        return this.request.post('/user/enabletwofactor', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#userlogin
    login (data) {
        return this.request.post('/user/login', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#userlogout
    logout () {
        return this.request.post('/user/logout');
    }
}

module.exports = User;
