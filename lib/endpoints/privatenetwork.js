import Endpoint from '../endpoint.js';

class PrivateNetwork extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkcreate
    create(data) {
        return this.request.post('/privatenetwork/create', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkcreatesegment
    createSegment(data) {
        return this.request.post('/privatenetwork/createsegment', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkdelete
    delete(data) {
        return this.request.post('/privatenetwork/delete', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkdeletesegment
    deleteSegment(data) {
        return this.request.post('/privatenetwork/deletesegment', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkdetails
    details(data) {
        return this.request.get('/privatenetwork/details', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkedit
    edit(data) {
        return this.request.post('/privatenetwork/edit', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkeditsegment
    editSegment(data) {
        return this.request.post('/privatenetwork/editsegment', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkestimatedcost
    estimatedCost(data) {
        return this.request.post('/privatenetwork/estimatedcost', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworklist
    list() {
        return this.request.get('/privatenetwork/list');
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworklistsegments
    listSegments(data) {
        return this.request.get('/privatenetwork/listsegments', data);
    }
}

export default PrivateNetwork;
