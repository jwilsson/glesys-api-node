'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Project = require('../../lib/endpoints/project');
const Request = require('../../lib/request');

describe('endpoints/project', () => {
    describe('delete', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const project = new Project(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/project/delete');
            });

            project.delete();

            assert.ok(stub.called);
        });
    });

    describe('rename', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const project = new Project(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/project/rename');
            });

            project.rename();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const project = new Project(request);
            const expected = {
                name: 'name',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            project.rename(expected);

            assert.ok(stub.called);
        });
    });
});
