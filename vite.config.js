import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-message-board/',   // ← 这里必须是 “/你的仓库名/”
})
