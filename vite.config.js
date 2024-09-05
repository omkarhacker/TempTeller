import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables from .env file
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // Define global constants that can be used in the application
    define: {
      'process.env.REACT_APP_ENV': JSON.stringify(env.REACT_APP_ENV),
      // Add other environment variables here if needed
    },
    plugins: [react()],
  };
});
