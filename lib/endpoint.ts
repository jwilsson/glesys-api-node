import Request from './request.js';

class Endpoint {
    protected request: Request;

    public constructor(request: Request) {
        this.request = request;
    }
}

export default Endpoint;
