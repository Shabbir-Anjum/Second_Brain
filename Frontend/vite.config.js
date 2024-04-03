import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copy } from 'vite-plugin-copy'; // Import copy function directly

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        // Copy background.js to the dist folder
        { src: './src/background.js', dest: 'dist' },
        // Add other files you need to copy here
      ],
    }),
  ],
});
