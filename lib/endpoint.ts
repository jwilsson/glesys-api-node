import { Request } from './request.js';

export class Endpoint {
    protected request: Request;

    public constructor(request: Request) {
        this.request = request;
    }
}
