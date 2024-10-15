import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Remove manualChunks if you want default chunking behavior
    },
  },
  server: {
    // You can remove this if you don't need SPA routing specifically handled
  },
});
