'use strict';

class Changelog {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_changelog#changelogapi
    api () {
        return this.request.get('/changelog/api');
    }

    // https://github.com/GleSYS/API/wiki/functions_changelog#changelogcontrolpanel
    controlPanel () {
        return this.request.get('/changelog/controlpanel');
    }
}

module.exports = Changelog;
