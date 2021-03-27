import Vpn from '../../lib/endpoints/vpn';
import Request from '../../lib/request';

describe('endpoints/vpn', () => {
    let vpn;
    let request;

    beforeEach(() => {
        request = new Request();
        vpn = new Vpn(request);
    });

    test('createUser()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        vpn.createUser(data);

        expect(spy).toHaveBeenCalledWith('/vpn/createuser', data);
    });

    test('deleteUser()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        vpn.deleteUser(data);

        expect(spy).toHaveBeenCalledWith('/vpn/deleteuser', data);
    });

    test('editUser()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        vpn.editUser(data);

        expect(spy).toHaveBeenCalledWith('/vpn/edituser', data);
    });

    test('listUsers()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        vpn.listUsers();

        expect(spy).toHaveBeenCalledWith('/vpn/listusers');
    });
});
