import { beforeEach, describe, expect, test } from 'vitest';
import { Country } from '../../lib/endpoints/country.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/country', () => {
    let country: Country;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        country = new Country(request);
    });

    test('list()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await country.list();

        expect(spy).toHaveBeenCalledWith('/country/list');
    });
});
