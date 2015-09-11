'use strict';

var assert = require('assert');
var sinon = require('sinon');

var Server = require('../../lib/endpoints/server');
var Request = require('../../lib/request');

describe('endpoints/server', function () {
    describe('addISO', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/addiso');
            });

            server = new Server(request);
            server.addISO();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                archiveusername: 'example',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.addISO(expected);

            assert.ok(stub.called);
        });
    });

    describe('allowedArguments', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/allowedarguments');
            });

            server = new Server(request);
            server.allowedArguments();

            assert.ok(stub.called);
        });

        it('should set the query string', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.allowedArguments(expected);

            assert.ok(stub.called);
        });
    });

    describe('backup', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/backup');
            });

            server = new Server(request);
            server.backup();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.backup(expected);

            assert.ok(stub.called);
        });
    });

    describe('clone', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/clone');
            });

            server = new Server(request);
            server.clone();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.clone(expected);

            assert.ok(stub.called);
        });
    });

    describe('console', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/console');
            });

            server = new Server(request);
            server.console();

            assert.ok(stub.called);
        });

        it('should set the query string', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.console(expected);

            assert.ok(stub.called);
        });
    });

    describe('costs', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/costs');
            });

            server = new Server(request);
            server.costs();

            assert.ok(stub.called);
        });

        it('should set the query string', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.costs(expected);

            assert.ok(stub.called);
        });
    });

    describe('create', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/create');
            });

            server = new Server(request);
            server.create();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                datacenter: 'datacenter',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.create(expected);

            assert.ok(stub.called);
        });
    });

    describe('destroy', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/destroy');
            });

            server = new Server(request);
            server.destroy();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.destroy(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/details');
            });

            server = new Server(request);
            server.details();

            assert.ok(stub.called);
        });

        it('should set the query string', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.details(expected);

            assert.ok(stub.called);
        });
    });

    describe('edit', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/edit');
            });

            server = new Server(request);
            server.edit();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.edit(expected);

            assert.ok(stub.called);
        });
    });

    describe('limits', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/limits');
            });

            server = new Server(request);
            server.limits();

            assert.ok(stub.called);
        });

        it('should set the query string', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.limits(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/list');
            });

            server = new Server(request);
            server.list();

            assert.ok(stub.called);
        });
    });

    describe('listISO', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/listiso');
            });

            server = new Server(request);
            server.listISO();

            assert.ok(stub.called);
        });

        it('should set the query string', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.listISO(expected);

            assert.ok(stub.called);
        });
    });

    describe('mountISO', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/mountiso');
            });

            server = new Server(request);
            server.mountISO();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.mountISO(expected);

            assert.ok(stub.called);
        });
    });

    describe('reboot', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/reboot');
            });

            server = new Server(request);
            server.reboot();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.reboot(expected);

            assert.ok(stub.called);
        });
    });

    describe('resetLimit', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/resetlimit');
            });

            server = new Server(request);
            server.resetLimit();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.resetLimit(expected);

            assert.ok(stub.called);
        });
    });

    describe('resetPassword', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/resetpassword');
            });

            server = new Server(request);
            server.resetPassword();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.resetPassword(expected);

            assert.ok(stub.called);
        });
    });

    describe('resourceUsage', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/resourceusage');
            });

            server = new Server(request);
            server.resourceUsage();

            assert.ok(stub.called);
        });

        it('should set the query string', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.resourceUsage(expected);

            assert.ok(stub.called);
        });
    });

    describe('start', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/start');
            });

            server = new Server(request);
            server.start();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.start(expected);

            assert.ok(stub.called);
        });
    });

    describe('status', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/status');
            });

            server = new Server(request);
            server.status();

            assert.ok(stub.called);
        });

        it('should set the query string', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.status(expected);

            assert.ok(stub.called);
        });
    });

    describe('stop', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/server/stop');
            });

            server = new Server(request);
            server.stop();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var server;
            var stub;
            var expected = {
                serverid: 'z1',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            server = new Server(request);
            server.stop(expected);

            assert.ok(stub.called);
        });
    });

    describe('templates', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var server;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/server/templates');
            });

            server = new Server(request);
            server.templates();

            assert.ok(stub.called);
        });
    });
});
