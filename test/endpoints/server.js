'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Server = require('../../lib/endpoints/server');
const Request = require('../../lib/request');

describe('endpoints/server', () => {
    describe('addISO', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/addiso');
            });

            server.addISO();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                archiveusername: 'example',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.addISO(expected);

            assert.ok(stub.called);
        });
    });

    describe('allowedArguments', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/allowedarguments');
            });

            server.allowedArguments();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.allowedArguments(expected);

            assert.ok(stub.called);
        });
    });

    describe('backup', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/backup');
            });

            server.backup();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.backup(expected);

            assert.ok(stub.called);
        });
    });

    describe('clone', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/clone');
            });

            server.clone();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.clone(expected);

            assert.ok(stub.called);
        });
    });

    describe('console', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/console');
            });

            server.console();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.console(expected);

            assert.ok(stub.called);
        });
    });

    describe('costs', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/costs');
            });

            server.costs();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.costs(expected);

            assert.ok(stub.called);
        });
    });

    describe('create', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/create');
            });

            server.create();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                datacenter: 'datacenter',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.create(expected);

            assert.ok(stub.called);
        });
    });

    describe('destroy', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/destroy');
            });

            server.destroy();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.destroy(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/details');
            });

            server.details();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.details(expected);

            assert.ok(stub.called);
        });
    });

    describe('edit', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/edit');
            });

            server.edit();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.edit(expected);

            assert.ok(stub.called);
        });
    });

    describe('limits', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/limits');
            });

            server.limits();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.limits(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/server/list');
            });

            server.list();

            assert.ok(stub.called);
        });
    });

    describe('listISO', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/listiso');
            });

            server.listISO();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.listISO(expected);

            assert.ok(stub.called);
        });
    });

    describe('mountISO', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/mountiso');
            });

            server.mountISO();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.mountISO(expected);

            assert.ok(stub.called);
        });
    });

    describe('networkAdapters', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/server/networkadapters');
            });

            server.networkAdapters();

            assert.ok(stub.called);
        });

        it('should set the query string', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'get').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.networkAdapters(expected);

            assert.ok(stub.called);
        });
    });

    describe('reboot', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/reboot');
            });

            server.reboot();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.reboot(expected);

            assert.ok(stub.called);
        });
    });

    describe('resetLimit', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/resetlimit');
            });

            server.resetLimit();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.resetLimit(expected);

            assert.ok(stub.called);
        });
    });

    describe('resetPassword', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/resetpassword');
            });

            server.resetPassword();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.resetPassword(expected);

            assert.ok(stub.called);
        });
    });

    describe('resourceUsage', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/resourceusage');
            });

            server.resourceUsage();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.resourceUsage(expected);

            assert.ok(stub.called);
        });
    });

    describe('start', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/start');
            });

            server.start();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.start(expected);

            assert.ok(stub.called);
        });
    });

    describe('status', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/status');
            });

            server.status();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.status(expected);

            assert.ok(stub.called);
        });
    });

    describe('stop', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/server/stop');
            });

            server.stop();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const server = new Server(request);
            const expected = {
                serverid: 'z1',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            server.stop(expected);

            assert.ok(stub.called);
        });
    });

    describe('templates', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const server = new Server(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/server/templates');
            });

            server.templates();

            assert.ok(stub.called);
        });
    });
});
