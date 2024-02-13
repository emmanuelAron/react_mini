import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Utiliser 'chrome' pour lancer Google Chrome
    open: true,
    broswer: 'chrome'
  }
});