import { Endpoint } from '../endpoint.js';

export class Country extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#countrylist
    list() {
        return this.request.get('/country/list');
    }
}
