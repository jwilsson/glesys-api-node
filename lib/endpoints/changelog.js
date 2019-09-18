'use strict';

class Changelog {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#changelogapi
    api () {
        return this.request.get('/changelog/api');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#changelogcontrolpanel
    controlPanel () {
        return this.request.get('/changelog/controlpanel');
    }
}

module.exports = Changelog;
