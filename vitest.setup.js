import { vi } from 'vitest';

beforeEach(() => {
    vi.resetAllMocks();
});

// Vitest Request spy setup helper
globalThis.setupRequestSpy = (request, method) => vi.spyOn(request, method).mockImplementation();
