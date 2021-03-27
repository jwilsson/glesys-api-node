import Country from '../../lib/endpoints/country.js';
import Request from '../../lib/request.js';

describe('endpoints/country', () => {
    let country;
    let request;

    beforeEach(() => {
        request = new Request();
        country = new Country(request);
    });

    test('list()', () => {
        const spy = globalThis.setupRequestSpy(request, 'get');

        country.list();

        expect(spy).toHaveBeenCalledWith('/country/list');
    });
});
