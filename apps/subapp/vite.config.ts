import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ mode }) => {
  const isLive = mode === 'live'

  return {
    server: {
      port: 5001,
    },
    plugins: [
      react(),
      federation({
        name: 'subapp',
        filename: 'subapp.js',
        exposes: {
          './App': './src/App',
        },
        shared: ['react', 'react-dom', 'react-router-dom'],
      }),
    ],
    build: {
      watch: isLive ? {} : null,
      target: 'esnext',
    },
  }
})
