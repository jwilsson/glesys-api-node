'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Server = require('../../lib/endpoints/server');
var Request = require('../../lib/request');

describe('endpoints/server', function () {
    describe('addISO', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/addiso');
            });

            server.addISO();
        });

        it('should set the request body', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                archiveusername: 'example',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.addISO(expected);
        });
    });

    describe('allowedArguments', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/allowedarguments');
            });

            server.allowedArguments();
        });

        it('should set the query string', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.allowedArguments(expected);
        });
    });

    describe('backup', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/backup');
            });

            server.backup();
        });

        it('should set the request body', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.backup(expected);
        });
    });

    describe('clone', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/clone');
            });

            server.clone();
        });

        it('should set the request body', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.clone(expected);
        });
    });

    describe('console', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/console');
            });

            server.console();
        });

        it('should set the query string', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.console(expected);
        });
    });

    describe('costs', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/costs');
            });

            server.costs();
        });

        it('should set the query string', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.costs(expected);
        });
    });

    describe('create', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/create');
            });

            server.create();
        });

        it('should set the request body', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                datacenter: 'datacenter',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.create(expected);
        });
    });

    describe('destroy', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/destroy');
            });

            server.destroy();
        });

        it('should set the request body', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.destroy(expected);
        });
    });

    describe('details', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/details');
            });

            server.details();
        });

        it('should set the query string', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.details(expected);
        });
    });

    describe('edit', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/edit');
            });

            server.edit();
        });

        it('should set the request body', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.edit(expected);
        });
    });

    describe('limits', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/limits');
            });

            server.limits();
        });

        it('should set the query string', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.limits(expected);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/list');
            });

            server.list();
        });
    });

    describe('listISO', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/listiso');
            });

            server.listISO();
        });

        it('should set the query string', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.listISO(expected);
        });
    });

    describe('mountISO', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/mountiso');
            });

            server.mountISO();
        });

        it('should set the request body', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.mountISO(expected);
        });
    });

    describe('reboot', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/reboot');
            });

            server.reboot();
        });

        it('should set the request body', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.reboot(expected);
        });
    });

    describe('resetLimit', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/resetlimit');
            });

            server.resetLimit();
        });

        it('should set the request body', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.resetLimit(expected);
        });
    });

    describe('resetPassword', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/resetpassword');
            });

            server.resetPassword();
        });

        it('should set the request body', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.resetPassword(expected);
        });
    });

    describe('resourceUsage', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/resourceusage');
            });

            server.resourceUsage();
        });

        it('should set the query string', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.resourceUsage(expected);
        });
    });

    describe('start', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/start');
            });

            server.start();
        });

        it('should set the request body', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.start(expected);
        });
    });

    describe('status', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/status');
            });

            server.status();
        });

        it('should set the query string', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.status(expected);
        });
    });

    describe('stop', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/stop');
            });

            server.stop();
        });

        it('should set the request body', function () {
            var request = new Request();
            var server = new Server(request);
            var expected = {
                serverid: 'z1',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server.stop(expected);
        });
    });

    describe('templates', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server = new Server(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/templates');
            });

            server.templates();
        });
    });
});
