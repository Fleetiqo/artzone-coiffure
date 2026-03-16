import { defineConfig } from 'vite'

export default defineConfig({
  base: '/artzone-coiffure/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})
