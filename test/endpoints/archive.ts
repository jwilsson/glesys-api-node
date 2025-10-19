import { beforeEach, describe, expect, test } from 'vitest';
import { Archive } from '../../lib/endpoints/archive.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/archive', () => {
    let archive: Archive;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        archive = new Archive(request);
    });

    test('allowedArguments()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await archive.allowedArguments();

        expect(spy).toHaveBeenCalledWith('/archive/allowedarguments');
    });

    test('changeDescription()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            description: 'description',
            username: 'username',
        };

        await archive.changeDescription(data);

        expect(spy).toHaveBeenCalledWith('/archive/changedescription', data);
    });

    test('changePassword()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            password: 'password',
            username: 'username',
        };

        await archive.changePassword(data);

        expect(spy).toHaveBeenCalledWith('/archive/changepassword', data);
    });

    test('create()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            password: 'password',
            size: 1,
            username: 'username',
        };

        await archive.create(data);

        expect(spy).toHaveBeenCalledWith('/archive/create', data);
    });

    test('delete()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        await archive.delete(data);

        expect(spy).toHaveBeenCalledWith('/archive/delete', data);
    });

    test('details()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        await archive.details(data);

        expect(spy).toHaveBeenCalledWith('/archive/details', data);
    });

    test('list()', async () => {
        const spy = setupRequestSpy(request, 'get');

        await archive.list();

        expect(spy).toHaveBeenCalledWith('/archive/list');
    });

    test('resize()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            size: 1,
            username: 'username',
        };

        await archive.resize(data);

        expect(spy).toHaveBeenCalledWith('/archive/resize', data);
    });
});
