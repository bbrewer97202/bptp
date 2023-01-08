import { defineConfig, optimizeDeps } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    // emptyOutDir: true,
    outDir: 'dist',
    // watch: {
    //   include: 'src/**',
    //   buildDelay: 500
    // },
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'bptp-components',
      formats: ['es'],
      fileName: (format) => `bptp-components.${format}.js`,
      // optimizeDeps: {
      // }
    },

    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
      },
    }
  },
})
