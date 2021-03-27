class Country {
    constructor(request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#countrylist
    list() {
        return this.request.get('/country/list');
    }
}

export default Country;
