import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), viteCommonjs(), svgr(), viteCommonjs()],
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    sourcemap: true,
    // outDir: 'build',
  },
  define: {
    'process.env.RUNNING_TEST': false,
    'process.env.VITE_GOOGLE_ANALYTICS_ID': process.env.VITE_GOOGLE_ANALYTICS_ID, // eslint-disable-line no-undef
  },
});
