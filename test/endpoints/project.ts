import { beforeEach, describe, expect, test } from 'vitest';
import { Project } from '../../lib/endpoints/project.js';
import { Request } from '../../lib/request.js';
import { setupRequest, setupRequestSpy } from '../../vitest.helpers.js';

describe('endpoints/project', () => {
    let project: Project;
    let request: Request;

    beforeEach(() => {
        request = setupRequest();
        project = new Project(request);
    });

    test('edit()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        await project.edit(data);

        expect(spy).toHaveBeenCalledWith('/project/edit', data);
    });

    test('delete()', async () => {
        const spy = setupRequestSpy(request, 'post');

        await project.delete();

        expect(spy).toHaveBeenCalledWith('/project/delete');
    });

    test('rename()', async () => {
        const spy = setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        await project.rename(data);

        expect(spy).toHaveBeenCalledWith('/project/rename', data);
    });
});
