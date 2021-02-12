'use strict';

const Project = require('../../lib/endpoints/project');
const Request = require('../../lib/request');

describe('endpoints/project', () => {
    let project;
    let request;

    beforeEach(() => {
        request = new Request();
        project = new Project(request);
    });

    test('delete()', () => {
        const spy = global.setupRequestSpy(request, 'post');

        project.delete();

        expect(spy).toHaveBeenCalledWith('/project/delete');
    });

    test('rename()', () => {
        const spy = global.setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        project.rename(data);

        expect(spy).toHaveBeenCalledWith('/project/rename', data);
    });
});
