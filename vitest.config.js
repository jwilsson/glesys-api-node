import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        coverage: {
            enabled: true,
            exclude: ['./*.js', ...coverageConfigDefaults.exclude],
            reporter: ['html', 'lcov'],
        },
        globals: true,
        include: ['./test/**/*.js'],
        setupFiles: ['./vitest.setup.js'],
    },
});
