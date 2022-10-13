import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ mode }) => {
  const isLive = mode === 'live'

  return {
    server: {
      port: 5000,
    },
    plugins: [
      react(),
      federation({
        name: 'container',
        filename: 'container.js',
        remotes: {
          subapp: `${isLive ? 'http://localhost:5001' : ''}/assets/subapp.js`,
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
