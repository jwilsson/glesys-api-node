import NetworkCircuit from '../../lib/endpoints/networkcircuit.js';
import Request from '../../lib/request.js';

describe('endpoints/networkcircuit', () => {
    let networkCircuit;
    let request;

    beforeEach(() => {
        request = new Request();
        networkCircuit = new NetworkCircuit(request);
    });

    test('details()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');
        const data = {
            networkcircuitid: 1,
        };

        networkCircuit.details(data);

        expect(spy).toHaveBeenCalledWith('/networkcircuit/details', data);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        networkCircuit.list();

        expect(spy).toHaveBeenCalledWith('/networkcircuit/list');
    });
});
