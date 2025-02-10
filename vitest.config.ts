/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.test.ts'],
    testTimeout: 5000, // 5 second timeout for tests
    setupFiles: ['src/__tests__/setup.ts'],
  },
}); 