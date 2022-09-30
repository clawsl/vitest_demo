/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // Workaround from !1918
    conditions: process.env.VITEST ? ['node'] : [],
  },
  test: {
    globals: true,
    testTimeout: 300000,
  },
});
