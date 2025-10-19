import { beforeEach, describe, expect, test } from 'vitest';
import { Server } from '../../lib/endpoints/server.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/server', () => {
    let server: Server;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        server = new Server(request);
    });

    test('allowedArguments()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.allowedArguments(data);

        expect(spy).toHaveBeenCalledWith('/server/allowedarguments', data);
    });

    test('backup()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.backup(data);

        expect(spy).toHaveBeenCalledWith('/server/backup', data);
    });

    test('clone()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.clone(data);

        expect(spy).toHaveBeenCalledWith('/server/clone', data);
    });

    test('console()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.console(data);

        expect(spy).toHaveBeenCalledWith('/server/console', data);
    });

    test('costs()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.costs(data);

        expect(spy).toHaveBeenCalledWith('/server/costs', data);
    });

    test('create()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            datacenter: 'datacenter',
        };

        await server.create(data);

        expect(spy).toHaveBeenCalledWith('/server/create', data);
    });

    test('createFromBackup()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            backupid: 'b1',
        };

        await server.createFromBackup(data);

        expect(spy).toHaveBeenCalledWith('/server/createfrombackup', data);
    });

    test('createManualBackup()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {};

        await server.createManualBackup(data);

        expect(spy).toHaveBeenCalledWith('/server/createmanualbackup', data);
    });

    test('deleteManualBackup()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {};

        await server.deleteManualBackup(data);

        expect(spy).toHaveBeenCalledWith('/server/deletemanualbackup', data);
    });

    test('destroy()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.destroy(data);

        expect(spy).toHaveBeenCalledWith('/server/destroy', data);
    });

    test('details()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.details(data);

        expect(spy).toHaveBeenCalledWith('/server/details', data);
    });

    test('edit()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.edit(data);

        expect(spy).toHaveBeenCalledWith('/server/edit', data);
    });

    test('estimatedBackupCost()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.estimatedBackupCost(data);

        expect(spy).toHaveBeenCalledWith('/server/estimatedbackupcost', data);
    });

    test('estimatedCost()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.estimatedCost(data);

        expect(spy).toHaveBeenCalledWith('/server/estimatedcost', data);
    });

    test('limits()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.limits(data);

        expect(spy).toHaveBeenCalledWith('/server/limits', data);
    });

    test('list()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await server.list();

        expect(spy).toHaveBeenCalledWith('/server/list');
    });

    test('listBackups()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.listBackups(data);

        expect(spy).toHaveBeenCalledWith('/server/listbackups', data);
    });

    test('listISO()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.listISO(data);

        expect(spy).toHaveBeenCalledWith('/server/listiso', data);
    });

    test('mountISO()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.mountISO(data);

        expect(spy).toHaveBeenCalledWith('/server/mountiso', data);
    });

    test('networkAdapters()', async () => {
        const spy = setupRequestSpy(request, 'get');
        const data = {
            serverid: 'z1',
        };

        await server.networkAdapters(data);

        expect(spy).toHaveBeenCalledWith('/server/networkadapters', data);
    });

    test('previewCloudConfig()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            cloudconfig: 'config',
        };

        await server.previewCloudConfig(data);

        expect(spy).toHaveBeenCalledWith('/server/previewcloudconfig', data);
    });

    test('reboot()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.reboot(data);

        expect(spy).toHaveBeenCalledWith('/server/reboot', data);
    });

    test('reset()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.reset(data);

        expect(spy).toHaveBeenCalledWith('/server/reset', data);
    });

    test('resetLimit()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.resetLimit(data);

        expect(spy).toHaveBeenCalledWith('/server/resetlimit', data);
    });

    test('resetPassword()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.resetPassword(data);

        expect(spy).toHaveBeenCalledWith('/server/resetpassword', data);
    });

    test('resourceUsage()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.resourceUsage(data);

        expect(spy).toHaveBeenCalledWith('/server/resourceusage', data);
    });

    test('start()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.start(data);

        expect(spy).toHaveBeenCalledWith('/server/start', data);
    });

    test('status()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.status(data);

        expect(spy).toHaveBeenCalledWith('/server/status', data);
    });

    test('stop()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            serverid: 'z1',
        };

        await server.stop(data);

        expect(spy).toHaveBeenCalledWith('/server/stop', data);
    });

    test('templates()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await server.templates();

        expect(spy).toHaveBeenCalledWith('/server/templates');
    });
});
