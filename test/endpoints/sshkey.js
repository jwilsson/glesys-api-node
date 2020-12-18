'use strict';

const SshKey = require('../../lib/endpoints/sshkey');
const Request = require('../../lib/request');

describe('endpoints/sshkey', () => {
    let request;
    let sshKey;

    beforeEach(() => {
        request = new Request();
        sshKey = new SshKey(request);
    });

    test('add()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            sshkey: 'abc123',
        };

        sshKey.add(data);

        expect(spy).toHaveBeenCalledWith('/sshkey/add', data);
    });

    test('list()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        sshKey.list();

        expect(spy).toHaveBeenCalledWith('/sshkey/list');
    });

    test('remove()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            sshkeyids: 1,
        };

        sshKey.remove(data);

        expect(spy).toHaveBeenCalledWith('/sshkey/remove', data);
    });
});
