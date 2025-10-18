import Endpoint from '../endpoint.js';

class Network extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkcreate
    create(data) {
        return this.request.post('/network/create', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkdelete
    delete(data) {
        return this.request.post('/network/delete', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkdetails
    details(data) {
        return this.request.get('/network/details', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkedit
    edit(data) {
        return this.request.post('/network/edit', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#networklist
    list() {
        return this.request.get('/network/list');
    }
}

export default Network;
