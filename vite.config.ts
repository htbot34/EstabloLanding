import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO(Henry): GitHub Pages base path.
  // For a GitHub *project* page served at https://<user>.github.io/EstabloLanding/,
  // this must be '/EstabloLanding/' (the repo name, with leading + trailing slash).
  // If you later attach a custom domain (e.g. establo.ag) via a CNAME, change this to '/'.
  base: '/EstabloLanding/',
})
