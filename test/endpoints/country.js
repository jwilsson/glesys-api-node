'use strict';

const Country = require('../../lib/endpoints/country');
const Request = require('../../lib/request');

describe('endpoints/country', () => {
    let country;
    let request;

    beforeEach(() => {
        request = new Request();
        country = new Country(request);
    });

    test('list()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        country.list();

        expect(spy).toHaveBeenCalledWith('/country/list');
    });
});
