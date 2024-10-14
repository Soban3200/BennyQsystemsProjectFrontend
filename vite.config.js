import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,  // To avoid code splitting issues on refresh
      },
    },
  },
  server: {
    historyApiFallback: true,  // Important for SPA routing
  },
});
