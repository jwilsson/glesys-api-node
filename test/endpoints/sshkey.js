import SshKey from '../../lib/endpoints/sshkey.js';
import Request from '../../lib/request.js';

describe('endpoints/sshkey', () => {
    let request;
    let sshKey;

    beforeEach(() => {
        request = new Request();
        sshKey = new SshKey(request);
    });

    test('add()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            sshkey: 'abc123',
        };

        sshKey.add(data);

        expect(spy).toHaveBeenCalledWith('/sshkey/add', data);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        sshKey.list();

        expect(spy).toHaveBeenCalledWith('/sshkey/list');
    });

    test('remove()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            sshkeyids: 1,
        };

        sshKey.remove(data);

        expect(spy).toHaveBeenCalledWith('/sshkey/remove', data);
    });
});
