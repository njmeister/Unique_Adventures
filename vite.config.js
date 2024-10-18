import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/index.html',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // Converts class names to camelCase to match your imports
      scopeBehaviour: 'local', // Ensure the CSS is scoped locally by default
    },
  },
});
