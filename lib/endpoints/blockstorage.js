import Endpoint from '../endpoint.js';

class BlockStorage extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#blockstorageattach
    attach(data) {
        return this.request.post('/blockstorage/attach', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#blockstoragecreate
    create(data) {
        return this.request.post('/blockstorage/create', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#blockstoragedelete
    delete(data) {
        return this.request.post('/blockstorage/delete', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#blockstoragedetach
    detach(data) {
        return this.request.post('/blockstorage/detach', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#blockstoragedetails
    details(data) {
        return this.request.get('/blockstorage/details', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#blockstorageedit
    edit(data) {
        return this.request.post('/blockstorage/edit', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#blockstoragelist
    list(data) {
        return this.request.get('/blockstorage/list', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#blockstoragelisttiers
    listTiers() {
        return this.request.get('/blockstorage/listtiers');
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#blockstorageresize
    resize(data) {
        return this.request.post('/blockstorage/resize', data);
    }
}

export default BlockStorage;
