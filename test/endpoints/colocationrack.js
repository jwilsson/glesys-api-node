import { ColocationRack } from '../../lib/endpoints/colocationrack.js';
import { Request } from '../../lib/request.js';

describe('endpoints/colocationrack', () => {
    let request;
    let colocationRack;

    beforeEach(() => {
        request = new Request();
        colocationRack = new ColocationRack(request);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        colocationRack.list();

        expect(spy).toHaveBeenCalledWith('/colocationrack/list');
    });
});
