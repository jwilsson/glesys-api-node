import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        coverage: {
            enabled: true,
            exclude: ['./*.js', './*.ts', ...coverageConfigDefaults.exclude],
            reporter: ['html', 'lcov'],
        },
        include: ['./test/**/*.ts'],
        setupFiles: ['./vitest.setup.ts'],
    },
});
