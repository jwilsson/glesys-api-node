import Endpoint from '../endpoint.js';

class ServerDisk extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdiskcreate
    create(data) {
        return this.request.post('/serverdisk/create', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdiskdelete
    delete(data) {
        return this.request.post('/serverdisk/delete', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdiskestimatedcost
    estimatedCost(data) {
        return this.request.post('/serverdisk/estimatedcost', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdisklimits
    limits(data) {
        return this.request.post('/serverdisk/limits', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdiskreconfigure
    reconfigure(data) {
        return this.request.post('/serverdisk/reconfigure', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdiskupdatename
    updateName(data) {
        return this.request.post('/serverdisk/updatename', data);
    }
}

export default ServerDisk;
