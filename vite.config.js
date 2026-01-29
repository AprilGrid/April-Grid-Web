import { defineConfig } from 'vite';

export default defineConfig({
    // Base public path when served in development or production.
    base: '/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        // Ensure roll-up does not hash file names too aggressively if needed, 
        // but standard behavior is usually fine.
    },
    server: {
        port: 3000,
        open: true
    }
});
