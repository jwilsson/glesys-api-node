'use strict';

var assert = require('assert');
var sinon = require('sinon');

var LoadBalancer = require('../../lib/endpoints/loadbalancer');
var Request = require('../../lib/request');

describe('endpoints/loadbalancer', function () {
    describe('addBackEnd', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/addbackend');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.addBackEnd();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.addBackEnd(expected);

            assert.ok(stub.called);
        });
    });

    describe('addCertificate', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/addcertificate');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.addCertificate();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.addCertificate(expected);

            assert.ok(stub.called);
        });
    });

    describe('addFrontEnd', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/addfrontend');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.addFrontEnd();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.addFrontEnd(expected);

            assert.ok(stub.called);
        });
    });

    describe('addTarget', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/addtarget');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.addTarget();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.addTarget(expected);

            assert.ok(stub.called);
        });
    });

    describe('create', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/create');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.create();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                name: 'example',
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.create(expected);

            assert.ok(stub.called);
        });
    });

    describe('destroy', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/destroy');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.destroy();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.destroy(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/details');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.details();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.details(expected);

            assert.ok(stub.called);
        });
    });

    describe('disableTarget', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/disabletarget');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.disableTarget();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.disableTarget(expected);

            assert.ok(stub.called);
        });
    });

    describe('edit', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/edit');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.edit();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.edit(expected);

            assert.ok(stub.called);
        });
    });

    describe('editBackEnd', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/editbackend');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.editBackEnd();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.editBackEnd(expected);

            assert.ok(stub.called);
        });
    });

    describe('editFrontEnd', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/editfrontend');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.editFrontEnd();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.editFrontEnd(expected);

            assert.ok(stub.called);
        });
    });

    describe('editTarget', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/edittarget');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.editTarget();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.editTarget(expected);

            assert.ok(stub.called);
        });
    });

    describe('enableTarget', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/enabletarget');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.enableTarget();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.enableTarget(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/list');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.list();

            assert.ok(stub.called);
        });
    });

    describe('listCertificate', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/listcertificate');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.listCertificate();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.listCertificate(expected);

            assert.ok(stub.called);
        });
    });

    describe('removeBackEnd', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/removebackend');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.removeBackEnd();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.removeBackEnd(expected);

            assert.ok(stub.called);
        });
    });

    describe('removeCertificate', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/removecertificate');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.removeCertificate();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.removeCertificate(expected);

            assert.ok(stub.called);
        });
    });

    describe('removeFrontEnd', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/removefrontend');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.removeFrontEnd();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.removeFrontEnd(expected);

            assert.ok(stub.called);
        });
    });

    describe('removeTarget', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer;
            var stub;

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/removetarget');
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.removeTarget();

            assert.ok(stub.called);
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer;
            var stub;
            var expected = {
                loadbalancerid: 1,
            };

            stub = sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer = new LoadBalancer(request);
            loadBalancer.removeTarget(expected);

            assert.ok(stub.called);
        });
    });
});
