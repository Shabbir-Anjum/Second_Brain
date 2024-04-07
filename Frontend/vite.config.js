import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import React plugin
import { copy } from 'vite-plugin-copy'; // Import copy function directly

export default defineConfig({
  build: {
    target: 'chrome-extension', // Set the build target to chrome-extension
  },
  plugins: [
    react(), // Use React plugin
    copy({
      targets: [
        // Copy background.js to the dist folder
        { src: './src/background.js', dest: 'dist' },
        // Add other files you need to copy here
      ],
    }),
  ],
});
