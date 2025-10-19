import { beforeEach, describe, expect, test } from 'vitest';
import { NetworkCircuit } from '../../lib/endpoints/networkcircuit.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/networkcircuit', () => {
    let networkCircuit: NetworkCircuit;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        networkCircuit = new NetworkCircuit(request);
    });

    test('details()', async () => {
        const spy = setupRequestSpy(request, 'get');
        const data = {
            networkcircuitid: 1,
        };

        await networkCircuit.details(data);

        expect(spy).toHaveBeenCalledWith('/networkcircuit/details', data);
    });

    test('list()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await networkCircuit.list();

        expect(spy).toHaveBeenCalledWith('/networkcircuit/list');
    });
});
