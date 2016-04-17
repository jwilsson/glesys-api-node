'use strict';

class User {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_user#userchangepassword
    changePassword (data) {
        return this.request.post('/user/changepassword', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_user#userdetails
    details () {
        return this.request.get('/user/details');
    }

    // https://github.com/GleSYS/API/wiki/functions_user#userdisabletwofactor
    disableTwoFactor (data) {
        return this.request.post('/user/disabletwofactor', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_user#useredit
    edit (data) {
        return this.request.post('/user/edit', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_user#userenabletwofactor
    enableTwoFactor (data) {
        return this.request.post('/user/enabletwofactor', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_user#userlogin
    login (data) {
        return this.request.post('/user/login', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_user#userlogout
    logout () {
        return this.request.post('/user/logout');
    }
}

module.exports = User;
