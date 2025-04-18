import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/admin-dashboard-ui/', // GitHub Pages için repository adı
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
