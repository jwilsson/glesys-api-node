'use strict';

var assert = require('assert');
var sinon = require('sinon');

var LoadBalancer = require('../../lib/endpoints/loadbalancer');
var Request = require('../../lib/request');

describe('endpoints/loadbalancer', function () {
    describe('addBackEnd', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/addbackend');
            });

            loadBalancer.addBackEnd();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.addBackEnd(expected);
        });
    });

    describe('addCertificate', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/addcertificate');
            });

            loadBalancer.addCertificate();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.addCertificate(expected);
        });
    });

    describe('addFrontEnd', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/addfrontend');
            });

            loadBalancer.addFrontEnd();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.addFrontEnd(expected);
        });
    });

    describe('addTarget', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/addtarget');
            });

            loadBalancer.addTarget();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.addTarget(expected);
        });
    });

    describe('create', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/create');
            });

            loadBalancer.create();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                name: 'example',
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.create(expected);
        });
    });

    describe('destroy', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/destroy');
            });

            loadBalancer.destroy();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.destroy(expected);
        });
    });

    describe('details', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/details');
            });

            loadBalancer.details();
        });

        it('should set the query string', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.details(expected);
        });
    });

    describe('disableTarget', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/disabletarget');
            });

            loadBalancer.disableTarget();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.disableTarget(expected);
        });
    });

    describe('edit', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/edit');
            });

            loadBalancer.edit();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.edit(expected);
        });
    });

    describe('editBackEnd', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/editbackend');
            });

            loadBalancer.editBackEnd();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.editBackEnd(expected);
        });
    });

    describe('editFrontEnd', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/editfrontend');
            });

            loadBalancer.editFrontEnd();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.editFrontEnd(expected);
        });
    });

    describe('editTarget', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/edittarget');
            });

            loadBalancer.editTarget();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.editTarget(expected);
        });
    });

    describe('enableTarget', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/enabletarget');
            });

            loadBalancer.enableTarget();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.enableTarget(expected);
        });
    });

    describe('list', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/list');
            });

            loadBalancer.list();
        });
    });

    describe('listCertificate', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/listcertificate');
            });

            loadBalancer.listCertificate();
        });

        it('should set the query string', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'get', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.listCertificate(expected);
        });
    });

    describe('removeBackEnd', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/removebackend');
            });

            loadBalancer.removeBackEnd();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.removeBackEnd(expected);
        });
    });

    describe('removeCertificate', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/removecertificate');
            });

            loadBalancer.removeCertificate();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.removeCertificate(expected);
        });
    });

    describe('removeFrontEnd', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/removefrontend');
            });

            loadBalancer.removeFrontEnd();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.removeFrontEnd(expected);
        });
    });

    describe('removeTarget', function () {
        it('should set the request URL', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.strictEqual(url, '/loadbalancer/removetarget');
            });

            loadBalancer.removeTarget();
        });

        it('should set the request body', function () {
            var request = new Request();
            var loadBalancer = new LoadBalancer(request);
            var expected = {
                loadbalancerid: 1,
            };

            sinon.stub(request, 'post', function (url, data, callback) {
                assert.deepEqual(data, expected);
            });

            loadBalancer.removeTarget(expected);
        });
    });
});
