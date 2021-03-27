import Country from '../../lib/endpoints/country';
import Request from '../../lib/request';

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
