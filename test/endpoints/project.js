import Project from '../../lib/endpoints/project.js';
import Request from '../../lib/request.js';

describe('endpoints/project', () => {
    let project;
    let request;

    beforeEach(() => {
        request = new Request();
        project = new Project(request);
    });

    test('delete()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');

        project.delete();

        expect(spy).toHaveBeenCalledWith('/project/delete');
    });

    test('rename()', () => {
        const spy = globalThis.setupRequestSpy(request, 'post');
        const data = {
            name: 'name',
        };

        project.rename(data);

        expect(spy).toHaveBeenCalledWith('/project/rename', data);
    });
});
