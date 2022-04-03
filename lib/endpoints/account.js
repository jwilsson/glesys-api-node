import Endpoint from '../endpoint.js';

class Account extends Endpoint {
    // https://github.com/glesys/API/wiki/API-Documentation#accountinfo
    info() {
        return this.request.get('/account/info');
    }
}

export default Account;
