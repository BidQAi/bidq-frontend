import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure Vite looks in the current directory
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // Vercel expects index.html at the root
    },
  },
});
