import Endpoint from '../endpoint.js';

class User extends Endpoint {
    // https://github.com/glesys/API/wiki/API-Documentation#userchangepassword
    changePassword(data) {
        return this.request.post('/user/changepassword', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#userconfirm
    confirm(data) {
        return this.request.post('/user/confirm', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#usercreateorganization
    createOrganization(data) {
        return this.request.post('/user/createorganization', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#userdetails
    details() {
        return this.request.get('/user/details');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#userdisabletwofactor
    disableTwoFactor(data) {
        return this.request.post('/user/disabletwofactor', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#useredit
    edit(data) {
        return this.request.post('/user/edit', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#userenabletwofactor
    enableTwoFactor(data) {
        return this.request.post('/user/enabletwofactor', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#userlistorganizations
    listOrganizations() {
        return this.request.get('/user/listorganizations');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#userlogin
    login(data) {
        return this.request.post('/user/login', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#userlogout
    logout() {
        return this.request.post('/user/logout');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#usersearchdata
    searchData() {
        return this.request.get('/user/searchdata');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#usersignup
    signUp(data) {
        return this.request.post('/user/signup', data);
    }
}

export default User;
