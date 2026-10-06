import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves from /hawkins-map/; the Docker build sets BASE_PATH=/ for a subdomain
  base: process.env.BASE_PATH ?? '/hawkins-map/',
})
