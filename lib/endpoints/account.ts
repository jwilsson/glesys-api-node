import Endpoint from '../endpoint.js';

class Account extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#accountinfo
    info() {
        return this.request.get('/account/info');
    }
}

export default Account;
