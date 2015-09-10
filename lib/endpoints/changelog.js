'use strict';

var Changelog = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_changelog#changelogapi
Changelog.prototype.api = function () {
    return this.request.get('/changelog/api');
};

// https://github.com/GleSYS/API/wiki/functions_changelog#changelogcontrolpanel
Changelog.prototype.controlPanel = function () {
    return this.request.get('/changelog/controlpanel');
};

module.exports = Changelog;
