import { Endpoint } from '../endpoint.js';

export class Account extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#accountinfo
    info() {
        return this.request.get('/account/info');
    }
}
