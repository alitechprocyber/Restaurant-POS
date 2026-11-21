import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.svg'],
      manifest: {
        name: 'RestoPOS',
        short_name: 'RestoPOS',
        description: 'Restaurant POS and back-office',
        theme_color: '#F97316',
        background_color: '#111827',
        display: 'standalone',
        start_url: '/',
        icons: [{ src: 'logo.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }],
      },
      workbox: { globPatterns: ['**/*.{js,css,html,svg,woff2}'] },
    }),
  ],
})
