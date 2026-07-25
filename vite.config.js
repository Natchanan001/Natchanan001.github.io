import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For a user site named USERNAME.github.io, base should remain '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
