import { beforeEach, describe, expect, test } from 'vitest';
import Vpn from '../../lib/endpoints/vpn.js';
import Request from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/vpn', () => {
    let vpn: Vpn;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        vpn = new Vpn(request);
    });

    test('createUser()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        await vpn.createUser(data);

        expect(spy).toHaveBeenCalledWith('/vpn/createuser', data);
    });

    test('deleteUser()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        await vpn.deleteUser(data);

        expect(spy).toHaveBeenCalledWith('/vpn/deleteuser', data);
    });

    test('editUser()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        await vpn.editUser(data);

        expect(spy).toHaveBeenCalledWith('/vpn/edituser', data);
    });

    test('listUsers()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await vpn.listUsers();

        expect(spy).toHaveBeenCalledWith('/vpn/listusers');
    });
});
