import Request from './request.js';

import Account from './endpoints/account.js';
import Api from './endpoints/api.js';
import Archive from './endpoints/archive.js';
import Country from './endpoints/country.js';
import Customer from './endpoints/customer.js';
import Domain from './endpoints/domain.js';
import Email from './endpoints/email.js';
import Filestorage from './endpoints/filestorage.js';
import Invoice from './endpoints/invoice.js';
import Ip from './endpoints/ip.js';
import Loadbalancer from './endpoints/loadbalancer.js';
import Network from './endpoints/network.js';
import Networkadapter from './endpoints/networkadapter.js';
import Objectstorage from './endpoints/objectstorage.js';
import Paymentcard from './endpoints/paymentcard.js';
import Project from './endpoints/project.js';
import Server from './endpoints/server.js';
import Sshkey from './endpoints/sshkey.js';
import Transaction from './endpoints/transaction.js';
import User from './endpoints/user.js';
import Vpn from './endpoints/vpn.js';

class GleSYSAPI {
    constructor(options = {}) {
        const { apiKey, apiUser } = options;

        this.request = new Request({
            apiKey,
            apiUser,
        });
    }

    get account() {
        return new Account(this.request);
    }

    get api() {
        return new Api(this.request);
    }

    get archive() {
        return new Archive(this.request);
    }

    get country() {
        return new Country(this.request);
    }

    get customer() {
        return new Customer(this.request);
    }

    get domain() {
        return new Domain(this.request);
    }

    get email() {
        return new Email(this.request);
    }

    get fileStorage() {
        return new Filestorage(this.request);
    }

    get invoice() {
        return new Invoice(this.request);
    }

    get ip() {
        return new Ip(this.request);
    }

    get loadBalancer() {
        return new Loadbalancer(this.request);
    }

    get network() {
        return new Network(this.request);
    }

    get networkAdapter() {
        return new Networkadapter(this.request);
    }

    get objectStorage() {
        return new Objectstorage(this.request);
    }

    get paymentCard() {
        return new Paymentcard(this.request);
    }

    get project() {
        return new Project(this.request);
    }

    get server() {
        return new Server(this.request);
    }

    get sshKey() {
        return new Sshkey(this.request);
    }

    get transaction() {
        return new Transaction(this.request);
    }

    get user() {
        return new User(this.request);
    }

    get vpn() {
        return new Vpn(this.request);
    }
}

export default GleSYSAPI;
