import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    hmr: true
  },
  hmrOptions: {
    reload: true,
    cssStrategy: "fastUpdate",
    jsStrategy: "hmr",
    assetStrategy: "hmr",
    logLevel: "console"
  }
})

