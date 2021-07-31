import Endpoint from '../endpoint';

class Country extends Endpoint {
    // https://github.com/glesys/API/wiki/API-Documentation#countrylist
    list() {
        return this.request.get('/country/list');
    }
}

export default Country;
