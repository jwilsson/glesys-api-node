'use strict';

class Server {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serveraddiso
    addISO (data) {
        return this.request.post('/server/addiso', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverallowedarguments
    allowedArguments (data) {
        return this.request.post('/server/allowedarguments', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverbackup
    backup (data) {
        return this.request.post('/server/backup', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverclone
    clone (data) {
        return this.request.post('/server/clone', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverconsole
    console (data) {
        return this.request.post('/server/console', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#servercosts
    costs (data) {
        return this.request.post('/server/costs', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#servercreate
    create (data) {
        return this.request.post('/server/create', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverdestroy
    destroy (data) {
        return this.request.post('/server/destroy', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverdetails
    details (data) {
        return this.request.post('/server/details', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serveredit
    edit (data) {
        return this.request.post('/server/edit', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverlimits
    limits (data) {
        return this.request.post('/server/limits', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverlist
    list () {
        return this.request.get('/server/list');
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverlistiso
    listISO (data) {
        return this.request.post('/server/listiso', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#servermountiso
    mountISO (data) {
        return this.request.post('/server/mountiso', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverreboot
    reboot (data) {
        return this.request.post('/server/reboot', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverresetlimit
    resetLimit (data) {
        return this.request.post('/server/resetlimit', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverresetpassword
    resetPassword (data) {
        return this.request.post('/server/resetpassword', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverresourceusage
    resourceUsage (data) {
        return this.request.post('/server/resourceusage', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverstart
    start (data) {
        return this.request.post('/server/start', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverstatus
    status (data) {
        return this.request.post('/server/status', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#serverstop
    stop (data) {
        return this.request.post('/server/stop', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_server#servertemplates
    templates () {
        return this.request.get('/server/templates');
    }
}

module.exports = Server;
