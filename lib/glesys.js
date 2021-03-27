import Request from './request';

import Account from './endpoints/account';
import Api from './endpoints/api';
import Archive from './endpoints/archive';
import Country from './endpoints/country';
import Customer from './endpoints/customer';
import Domain from './endpoints/domain';
import Email from './endpoints/email';
import Filestorage from './endpoints/filestorage';
import Invoice from './endpoints/invoice';
import Ip from './endpoints/ip';
import Loadbalancer from './endpoints/loadbalancer';
import Network from './endpoints/network';
import Networkadapter from './endpoints/networkadapter';
import Objectstorage from './endpoints/objectstorage';
import Paymentcard from './endpoints/paymentcard';
import Project from './endpoints/project';
import Server from './endpoints/server';
import Sshkey from './endpoints/sshkey';
import Transaction from './endpoints/transaction';
import User from './endpoints/user';
import Vpn from './endpoints/vpn';

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
