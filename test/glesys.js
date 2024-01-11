import GleSYSAPI from '../lib/glesys.js';

describe('GleSYSAPI', () => {
    test('apiKey and apiUser are set on Request object', () => {
        const glesys = new GleSYSAPI({
            apiKey: 'key',
            apiUser: 'user',
        });

        expect(glesys.request.apiKey).toBe('key');
        expect(glesys.request.apiUser).toBe('user');
    });

    test('API methods are exposed', () => {
        const glesys = new GleSYSAPI();

        // We're just checking for existence
        expect(glesys.account).toBeDefined();
        expect(glesys.api).toBeDefined();
        expect(glesys.archive).toBeDefined();
        expect(glesys.country).toBeDefined();
        expect(glesys.customer).toBeDefined();
        expect(glesys.domain).toBeDefined();
        expect(glesys.email).toBeDefined();
        expect(glesys.fileStorage).toBeDefined();
        expect(glesys.invoice).toBeDefined();
        expect(glesys.ip).toBeDefined();
        expect(glesys.loadBalancer).toBeDefined();
        expect(glesys.network).toBeDefined();
        expect(glesys.networkAdapter).toBeDefined();
        expect(glesys.networkCircuit).toBeDefined();
        expect(glesys.objectStorage).toBeDefined();
        expect(glesys.paymentCard).toBeDefined();
        expect(glesys.project).toBeDefined();
        expect(glesys.server).toBeDefined();
        expect(glesys.serverDisk).toBeDefined();
        expect(glesys.sshKey).toBeDefined();
        expect(glesys.user).toBeDefined();
        expect(glesys.vpn).toBeDefined();
    });
});
