'use strict';

const Archive = require('../../lib/endpoints/archive');
const Request = require('../../lib/request');

describe('endpoints/archive', () => {
    let archive;
    let request;

    beforeEach(() => {
        request = new Request();
        archive = new Archive(request);
    });

    test('allowedArguments()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        archive.allowedArguments();

        expect(spy).toHaveBeenCalledWith('/archive/allowedarguments');
    });

    test('changeDescription()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            description: 'description',
            username: 'username',
        };

        archive.changeDescription(data);

        expect(spy).toHaveBeenCalledWith('/archive/changedescription', data);
    });

    test('changePassword()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            password: 'password',
            username: 'username',
        };

        archive.changePassword(data);

        expect(spy).toHaveBeenCalledWith('/archive/changepassword', data);
    });

    test('create()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            password: 'password',
            size: 1,
            username: 'username',
        };

        archive.create(data);

        expect(spy).toHaveBeenCalledWith('/archive/create', data);
    });

    test('delete()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        archive.delete(data);

        expect(spy).toHaveBeenCalledWith('/archive/delete', data);
    });

    test('details()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            username: 'username',
        };

        archive.details(data);

        expect(spy).toHaveBeenCalledWith('/archive/details', data);
    });

    test('list()', () => {
        const spy = global.setupRequestSpy(request, 'get');

        archive.list();

        expect(spy).toHaveBeenCalledWith('/archive/list');
    });

    test('resize()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            size: 1,
            username: 'username',
        };

        archive.resize(data);

        expect(spy).toHaveBeenCalledWith('/archive/resize', data);
    });
});
