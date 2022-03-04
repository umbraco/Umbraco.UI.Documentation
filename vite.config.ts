import cleanup from 'rollup-plugin-cleanup';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [cleanup({ comments: "none" })],
    }
  }
})
