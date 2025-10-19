import { Account } from './endpoints/account.js';
import { Api } from './endpoints/api.js';
import { Archive } from './endpoints/archive.js';
import { Country } from './endpoints/country.js';
import { Customer } from './endpoints/customer.js';
import { Database } from './endpoints/database.js';
import { Domain } from './endpoints/domain.js';
import { Email } from './endpoints/email.js';
import { FileStorage } from './endpoints/filestorage.js';
import { Invoice } from './endpoints/invoice.js';
import { Ip } from './endpoints/ip.js';
import { LoadBalancer } from './endpoints/loadbalancer.js';
import { Network } from './endpoints/network.js';
import { NetworkAdapter } from './endpoints/networkadapter.js';
import { NetworkCircuit } from './endpoints/networkcircuit.js';
import { ObjectStorage } from './endpoints/objectstorage.js';
import { PaymentCard } from './endpoints/paymentcard.js';
import { PrivateNetwork } from './endpoints/privatenetwork.js';
import { Project } from './endpoints/project.js';
import { Server } from './endpoints/server.js';
import { ServerDisk } from './endpoints/serverdisk.js';
import { SshKey } from './endpoints/sshkey.js';
import { User } from './endpoints/user.js';
import { Vpn } from './endpoints/vpn.js';
import { Request } from './request.js';
import { Options } from './types/Options.js';

class GleSYSAPI {
    protected request: Request;

    public constructor(options: Options) {
        const { apiKey, apiUser } = options;

        this.request = new Request({
            apiKey,
            apiUser,
        });
    }

    public get account(): Account {
        return new Account(this.request);
    }

    public get api(): Api {
        return new Api(this.request);
    }

    public get archive(): Archive {
        return new Archive(this.request);
    }

    public get country(): Country {
        return new Country(this.request);
    }

    public get customer(): Customer {
        return new Customer(this.request);
    }

    public get database(): Database {
        return new Database(this.request);
    }

    public get domain(): Domain {
        return new Domain(this.request);
    }

    public get email(): Email {
        return new Email(this.request);
    }

    public get fileStorage(): FileStorage {
        return new FileStorage(this.request);
    }

    public get invoice(): Invoice {
        return new Invoice(this.request);
    }

    public get ip(): Ip {
        return new Ip(this.request);
    }

    public get loadBalancer(): LoadBalancer {
        return new LoadBalancer(this.request);
    }

    public get network(): Network {
        return new Network(this.request);
    }

    public get networkAdapter(): NetworkAdapter {
        return new NetworkAdapter(this.request);
    }

    public get networkCircuit(): NetworkCircuit {
        return new NetworkCircuit(this.request);
    }

    public get objectStorage(): ObjectStorage {
        return new ObjectStorage(this.request);
    }

    public get paymentCard(): PaymentCard {
        return new PaymentCard(this.request);
    }

    public get privateNetwork(): PrivateNetwork {
        return new PrivateNetwork(this.request);
    }

    public get project(): Project {
        return new Project(this.request);
    }

    public get server(): Server {
        return new Server(this.request);
    }

    public get serverDisk(): ServerDisk {
        return new ServerDisk(this.request);
    }

    public get sshKey(): SshKey {
        return new SshKey(this.request);
    }

    public get user(): User {
        return new User(this.request);
    }

    public get vpn(): Vpn {
        return new Vpn(this.request);
    }
}

export default GleSYSAPI;
