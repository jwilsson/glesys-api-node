import { RemoteHands } from '../../lib/endpoints/remotehands.js';
import { Request } from '../../lib/request.js';

describe('endpoints/remotehands', () => {
    let request;
    let remoteHands;

    beforeEach(() => {
        request = new Request();
        remoteHands = new RemoteHands(request);
    });

    test('cancel()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            key: 'abc123',
        };

        remoteHands.cancel(data);

        expect(spy).toHaveBeenCalledWith('/remotehands/cancel', data);
    });

    test('create()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            executionoption: 'asap',
            instructions: 'Reboot the server',
            servicekeys: ['abc123'],
        };

        remoteHands.create(data);

        expect(spy).toHaveBeenCalledWith('/remotehands/create', data);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        remoteHands.list();

        expect(spy).toHaveBeenCalledWith('/remotehands/list');
    });
});
