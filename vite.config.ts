import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
  },

  server: {
    port: 5173,
    https: false as unknown as undefined,
  },

  preview: {
    port: 5173,
  },

  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      include: 'src/shared/assets/**/*.svg',
      svgrOptions: {
        titleProp: true,
        ref: true,
      },
    }),
  ],
});
