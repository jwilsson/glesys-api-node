import { vi } from 'vitest';

// Vitest Request spy setup helper
globalThis.setupRequestSpy = (request, method) => vi.spyOn(request, method).mockImplementation();
