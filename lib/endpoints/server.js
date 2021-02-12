'use strict';

class Server {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverallowedarguments
    allowedArguments (data) {
        return this.request.post('/server/allowedarguments', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverbackup
    backup (data) {
        return this.request.post('/server/backup', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverclone
    clone (data) {
        return this.request.post('/server/clone', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverconsole
    console (data) {
        return this.request.post('/server/console', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#servercosts
    costs (data) {
        return this.request.post('/server/costs', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#servercreate
    create (data) {
        return this.request.post('/server/create', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#servercreatefrombackup
    createFromBackup (data) {
        return this.request.post('/server/createfrombackup', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverdestroy
    destroy (data) {
        return this.request.post('/server/destroy', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverdetails
    details (data) {
        return this.request.post('/server/details', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serveredit
    edit (data) {
        return this.request.post('/server/edit', data);
    }

    // https://github.com/GleSYS/API/wiki/API-Documentation#serverestimatedcost
    estimatedCost (data) {
        return this.request.post('/server/estimatedcost', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverlimits
    limits (data) {
        return this.request.post('/server/limits', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverlist
    list () {
        return this.request.get('/server/list');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverlistbackups
    listBackups (data) {
        return this.request.post('/server/listbackups', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverlistiso
    listISO (data) {
        return this.request.post('/server/listiso', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#servermountiso
    mountISO (data) {
        return this.request.post('/server/mountiso', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#servernetworkadapters
    networkAdapters (data) {
        return this.request.get('/server/networkadapters', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverpreviewcloudconfig
    previewCloudConfig (data) {
        return this.request.post('/server/previewcloudconfig', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverreboot
    reboot (data) {
        return this.request.post('/server/reboot', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverresetlimit
    resetLimit (data) {
        return this.request.post('/server/resetlimit', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverresetpassword
    resetPassword (data) {
        return this.request.post('/server/resetpassword', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverresourceusage
    resourceUsage (data) {
        return this.request.post('/server/resourceusage', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverstart
    start (data) {
        return this.request.post('/server/start', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverstatus
    status (data) {
        return this.request.post('/server/status', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#serverstop
    stop (data) {
        return this.request.post('/server/stop', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#servertemplates
    templates () {
        return this.request.get('/server/templates');
    }
}

module.exports = Server;
