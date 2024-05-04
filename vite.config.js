import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': './src',
    },
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Aquí especificamos que los activos se copien directamente en la carpeta dist
    rollupOptions: {
      input: {
        main: '/src/main.js',
      },
      output: {
        assetFileNames: 'assets/[name][extname]', // Esto mantendrá la estructura de carpetas de los activos en dist
      },
    },
  },

})
