import { vi } from 'vitest';
import { Request } from './lib/request.js';
import { Options } from './lib/types/Options.js';

export const setupRequest = () => {
    const authOptions: Options = {
        apiKey: 'key',
        apiUser: 'user',
    };

    return new Request(authOptions);
};

export const setupRequestSpy = (request: Request, method: keyof Request) =>
    vi.spyOn(request, method).mockImplementation(vi.fn());
