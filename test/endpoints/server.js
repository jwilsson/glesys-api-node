'use strict';

const Server = require('../../lib/endpoints/server');
const Request = require('../../lib/request');

describe('endpoints/server', () => {
    let server;
    let request;

    beforeEach(() => {
        request = new Request();
        server = new Server(request);
    });

    test('addISO()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            archiveusername: 'example',
        };

        server.addISO(data);

        expect(spy).toHaveBeenCalledWith('/server/addiso', data);
    });

    test('allowedArguments()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.allowedArguments(data);

        expect(spy).toHaveBeenCalledWith('/server/allowedarguments', data);
    });

    test('backup()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.backup(data);

        expect(spy).toHaveBeenCalledWith('/server/backup', data);
    });

    test('clone()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.clone(data);

        expect(spy).toHaveBeenCalledWith('/server/clone', data);
    });

    test('console()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.console(data);

        expect(spy).toHaveBeenCalledWith('/server/console', data);
    });

    test('costs()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.costs(data);

        expect(spy).toHaveBeenCalledWith('/server/costs', data);
    });

    test('create()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            datacenter: 'datacenter',
        };

        server.create(data);

        expect(spy).toHaveBeenCalledWith('/server/create', data);
    });

    test('createFromBackup()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            backupid: 'b1',
        };

        server.createFromBackup(data);

        expect(spy).toHaveBeenCalledWith('/server/createfrombackup', data);
    });

    test('destroy()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.destroy(data);

        expect(spy).toHaveBeenCalledWith('/server/destroy', data);
    });

    test('details()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.details(data);

        expect(spy).toHaveBeenCalledWith('/server/details', data);
    });

    test('edit()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.edit(data);

        expect(spy).toHaveBeenCalledWith('/server/edit', data);
    });

    test('estimatedCost()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.estimatedCost(data);

        expect(spy).toHaveBeenCalledWith('/server/estimatedcost', data);
    });

    test('limits()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.limits(data);

        expect(spy).toHaveBeenCalledWith('/server/limits', data);
    });

    test('list()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        server.list();

        expect(spy).toHaveBeenCalledWith('/server/list');
    });

    test('listBackups()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.listBackups(data);

        expect(spy).toHaveBeenCalledWith('/server/listbackups', data);
    });

    test('listISO()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.listISO(data);

        expect(spy).toHaveBeenCalledWith('/server/listiso', data);
    });

    test('mountISO()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.mountISO(data);

        expect(spy).toHaveBeenCalledWith('/server/mountiso', data);
    });

    test('networkAdapters()', () => {
        const spy = global.setupRequestSpy(request, 'get');
        const data = {
            serverid: 'z1',
        };

        server.networkAdapters(data);

        expect(spy).toHaveBeenCalledWith('/server/networkadapters', data);
    });

    test('previewCloudConfig()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            cloudconfig: 'config',
        };

        server.previewCloudConfig(data);

        expect(spy).toHaveBeenCalledWith('/server/previewcloudconfig', data);
    });

    test('reboot()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.reboot(data);

        expect(spy).toHaveBeenCalledWith('/server/reboot', data);
    });

    test('resetLimit()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.resetLimit(data);

        expect(spy).toHaveBeenCalledWith('/server/resetlimit', data);
    });

    test('resetPassword()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.resetPassword(data);

        expect(spy).toHaveBeenCalledWith('/server/resetpassword', data);
    });

    test('resourceUsage()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.resourceUsage(data);

        expect(spy).toHaveBeenCalledWith('/server/resourceusage', data);
    });

    test('start()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.start(data);

        expect(spy).toHaveBeenCalledWith('/server/start', data);
    });

    test('status()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.status(data);

        expect(spy).toHaveBeenCalledWith('/server/status', data);
    });

    test('stop()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        server.stop(data);

        expect(spy).toHaveBeenCalledWith('/server/stop', data);
    });

    test('templates()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        server.templates();

        expect(spy).toHaveBeenCalledWith('/server/templates');
    });
});
