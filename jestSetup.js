'use strict';

beforeEach(() => {
    jest.resetAllMocks();
});

// Jest Request spy setup helper
global.setupRequestSpy = (request, method) => {
    return jest.spyOn(request, method).mockImplementation();
};
