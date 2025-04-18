import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        coverage: {
            enabled: true,
            exclude: ['./*.js', ...coverageConfigDefaults.exclude],
        },
        globals: true,
        include: ['./test/**/*.js'],
        setupFiles: ['./vitest.setup.js'],
    },
});
