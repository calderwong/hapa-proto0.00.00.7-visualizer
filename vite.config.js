import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hapa-proto0.00.00.7-visualizer/', // Set base path for GitHub Pages
  plugins: [react()],
  server: {
    port: 5174 // Use a different port if 5173 is taken
  }
})
