import { jest } from '@jest/globals';

beforeEach(() => {
    jest.resetAllMocks();
});

// Jest Request spy setup helper
globalThis.setupRequestSpy = (request, method) => jest.spyOn(request, method).mockImplementation();
