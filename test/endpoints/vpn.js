'use strict';

const Vpn = require('../../lib/endpoints/vpn');
const Request = require('../../lib/request');

describe('endpoints/vpn', () => {
    let vpn;
    let request;

    beforeEach(() => {
        request = new Request();
        vpn = new Vpn(request);
    });

    test('createUser()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        vpn.createUser(data);

        expect(spy).toHaveBeenCalledWith('/vpn/createuser', data);
    });

    test('deleteUser()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        vpn.deleteUser(data);

        expect(spy).toHaveBeenCalledWith('/vpn/deleteuser', data);
    });

    test('editUser()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        vpn.editUser(data);

        expect(spy).toHaveBeenCalledWith('/vpn/edituser', data);
    });

    test('listUsers()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        vpn.listUsers();

        expect(spy).toHaveBeenCalledWith('/vpn/listusers');
    });
});
