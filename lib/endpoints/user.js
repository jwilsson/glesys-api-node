'use strict';

var User = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_user#userchangepassword
User.prototype.changePassword = function (data) {
    return this.request.post('/user/changepassword', data);
};

// https://github.com/GleSYS/API/wiki/functions_user#userdetails
User.prototype.details = function () {
    return this.request.get('/user/details');
};

// https://github.com/GleSYS/API/wiki/functions_user#userdisabletwofactor
User.prototype.disableTwoFactor = function (data) {
    return this.request.post('/user/disabletwofactor', data);
};

// https://github.com/GleSYS/API/wiki/functions_user#useredit
User.prototype.edit = function (data) {
    return this.request.post('/user/edit', data);
};

// https://github.com/GleSYS/API/wiki/functions_user#userenabletwofactor
User.prototype.enableTwoFactor = function (data) {
    return this.request.post('/user/enabletwofactor', data);
};

// https://github.com/GleSYS/API/wiki/functions_user#userlogin
User.prototype.login = function (data) {
    return this.request.post('/user/login', data);
};

// https://github.com/GleSYS/API/wiki/functions_user#userlogout
User.prototype.logout = function () {
    return this.request.post('/user/logout');
};

module.exports = User;
