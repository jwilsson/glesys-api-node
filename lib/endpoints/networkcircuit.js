import Endpoint from '../endpoint.js';

class NetworkCircuit extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkcircuitdetails
    details(data) {
        return this.request.get('/networkcircuit/details', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkcircuitlist
    list() {
        return this.request.get('/networkcircuit/list');
    }
}

export default NetworkCircuit;
