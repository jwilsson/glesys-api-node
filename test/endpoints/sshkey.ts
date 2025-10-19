import { beforeEach, describe, expect, test } from 'vitest';
import { SshKey } from '../../lib/endpoints/sshkey.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/sshkey', () => {
    let sshKey: SshKey;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        sshKey = new SshKey(request);
    });

    test('add()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            sshkey: 'abc123',
        };

        await sshKey.add(data);

        expect(spy).toHaveBeenCalledWith('/sshkey/add', data);
    });

    test('list()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await sshKey.list();

        expect(spy).toHaveBeenCalledWith('/sshkey/list');
    });

    test('remove()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            sshkeyids: 1,
        };

        await sshKey.remove(data);

        expect(spy).toHaveBeenCalledWith('/sshkey/remove', data);
    });
});
