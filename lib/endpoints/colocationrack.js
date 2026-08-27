import { Endpoint } from '../endpoint.js';

export class ColocationRack extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#colocationracklist
    list() {
        return this.request.get('/colocationrack/list');
    }
}
