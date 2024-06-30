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
import LoadBalancer from './endpoints/loadbalancer.js';
import Network from './endpoints/network.js';
import NetworkAdapter from './endpoints/networkadapter.js';
import NetworkCircuit from './endpoints/networkcircuit.js';
import ObjectStorage from './endpoints/objectstorage.js';
import PaymentCard from './endpoints/paymentcard.js';
import PrivateNetwork from './endpoints/privatenetwork.js';
import Project from './endpoints/project.js';
import Server from './endpoints/server.js';
import ServerDisk from './endpoints/serverdisk.js';
import Sshkey from './endpoints/sshkey.js';
import User from './endpoints/user.js';
import Vpn from './endpoints/vpn.js';
import Request from './request.js';

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
        return new LoadBalancer(this.request);
    }

    get network() {
        return new Network(this.request);
    }

    get networkAdapter() {
        return new NetworkAdapter(this.request);
    }

    get networkCircuit() {
        return new NetworkCircuit(this.request);
    }

    get objectStorage() {
        return new ObjectStorage(this.request);
    }

    get paymentCard() {
        return new PaymentCard(this.request);
    }

    get privateNetwork() {
        return new PrivateNetwork(this.request);
    }

    get project() {
        return new Project(this.request);
    }

    get server() {
        return new Server(this.request);
    }

    get serverDisk() {
        return new ServerDisk(this.request);
    }

    get sshKey() {
        return new Sshkey(this.request);
    }

    get user() {
        return new User(this.request);
    }

    get vpn() {
        return new Vpn(this.request);
    }
}

export default GleSYSAPI;
