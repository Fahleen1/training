import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';

// https://vite.dev/config/
export default defineConfig({
  plugins: [Inspect()],
  envPrefix: 'APP_',
});
