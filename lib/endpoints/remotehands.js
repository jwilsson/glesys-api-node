import { Endpoint } from '../endpoint.js';

export class RemoteHands extends Endpoint {
    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#remotehandscancel
    cancel(data) {
        return this.request.post('/remotehands/cancel', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#remotehandscreate
    create(data) {
        return this.request.post('/remotehands/create', data);
    }

    // https://github.com/GleSYS/API-docs/wiki/API-Documentation#remotehandslist
    list() {
        return this.request.get('/remotehands/list');
    }
}
