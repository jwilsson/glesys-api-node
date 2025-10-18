import Endpoint from '../endpoint.js';

class Country extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#countrylist
    list() {
        return this.request.get('/country/list');
    }
}

export default Country;
