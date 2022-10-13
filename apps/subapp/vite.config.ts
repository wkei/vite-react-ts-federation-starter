import react from '@vitejs/plugin-react'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig(({ mode }) => {
  const isLive = mode === 'live'

  return {
    server: {
      port: 5001,
    },
    plugins: [
      react(),
      splitVendorChunkPlugin(),
      cssInjectedByJsPlugin(),
      federation({
        name: 'subapp',
        filename: 'subapp.js',
        exposes: {
          './App': './src/App',
        },
        shared: ['react', 'react-dom', 'react-router-dom', 'tailwindcss'],
      }),
    ],
    build: {
      watch: isLive ? {} : null,
      target: 'esnext',
    },
  }
})
