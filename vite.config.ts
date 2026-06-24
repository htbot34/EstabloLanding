import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from the root of the custom domain establo.xyz (see public/CNAME),
  // so the base path is '/'. If you ever remove the custom domain and serve from the
  // GitHub project page again, set this back to '/EstabloLanding/'.
  base: '/',
})
