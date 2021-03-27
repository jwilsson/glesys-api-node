class Account {
    constructor(request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#accountinfo
    info() {
        return this.request.get('/account/info');
    }
}

export default Account;
