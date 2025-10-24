import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://comercyo.com',
  integrations: [tailwind(), sitemap()],
  build: {
    // Perf: output static assets optimizados
    format: 'directory',
    inlineStylesheets: 'always' // Inline CSS para eliminar render-blocking
  },
  vite: {
    build: {
      // Optimizar CSS para reducir cadenas de dependencias
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: undefined,
          // Optimizar nombres de archivos para mejor caching
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      },
      // Reducir tamaño de chunks
      chunkSizeWarningLimit: 1000
    },
    // Optimizar resolución de módulos
    resolve: {
      dedupe: ['astro']
    }
  }
});
