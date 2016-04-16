'use strict';

var Server = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_server#serveraddiso
Server.prototype.addISO = function (data) {
    return this.request.post('/server/addiso', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverallowedarguments
Server.prototype.allowedArguments = function (data) {
    return this.request.post('/server/allowedarguments', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverbackup
Server.prototype.backup = function (data) {
    return this.request.post('/server/backup', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverclone
Server.prototype.clone = function (data) {
    return this.request.post('/server/clone', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverconsole
Server.prototype.console = function (data) {
    return this.request.post('/server/console', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#servercosts
Server.prototype.costs = function (data) {
    return this.request.post('/server/costs', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#servercreate
Server.prototype.create = function (data) {
    return this.request.post('/server/create', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverdestroy
Server.prototype.destroy = function (data) {
    return this.request.post('/server/destroy', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverdetails
Server.prototype.details = function (data) {
    return this.request.post('/server/details', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serveredit
Server.prototype.edit = function (data) {
    return this.request.post('/server/edit', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverlimits
Server.prototype.limits = function (data) {
    return this.request.post('/server/limits', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverlist
Server.prototype.list = function () {
    return this.request.get('/server/list');
};

// https://github.com/GleSYS/API/wiki/functions_server#serverlistiso
Server.prototype.listISO = function (data) {
    return this.request.post('/server/listiso', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#servermountiso
Server.prototype.mountISO = function (data) {
    return this.request.post('/server/mountiso', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverreboot
Server.prototype.reboot = function (data) {
    return this.request.post('/server/reboot', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverresetlimit
Server.prototype.resetLimit = function (data) {
    return this.request.post('/server/resetlimit', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverresetpassword
Server.prototype.resetPassword = function (data) {
    return this.request.post('/server/resetpassword', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverresourceusage
Server.prototype.resourceUsage = function (data) {
    return this.request.post('/server/resourceusage', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverstart
Server.prototype.start = function (data) {
    return this.request.post('/server/start', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverstatus
Server.prototype.status = function (data) {
    return this.request.post('/server/status', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#serverstop
Server.prototype.stop = function (data) {
    return this.request.post('/server/stop', data);
};

// https://github.com/GleSYS/API/wiki/functions_server#servertemplates
Server.prototype.templates = function () {
    return this.request.get('/server/templates');
};

module.exports = Server;
