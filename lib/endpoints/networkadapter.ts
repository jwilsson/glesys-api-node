import Endpoint from '../endpoint.js';

class NetworkAdapter extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkadaptercreate
    create(data) {
        return this.request.post('/networkadapter/create', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkadapterdelete
    delete(data) {
        return this.request.post('/networkadapter/delete', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkadapterdetails
    details(data) {
        return this.request.get('/networkadapter/details', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkadapteredit
    edit(data) {
        return this.request.post('/networkadapter/edit', data);
    }
}

export default NetworkAdapter;
