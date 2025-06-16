import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  extend: {
  keyframes: {
    wave: {
      '0%, 100%': { transform: 'rotate(-5deg)' },
      '50%': { transform: 'rotate(5deg)' },
    },
  },
  animation: {
    wave: 'wave 1.5s ease-in-out infinite',
  },
}
,
  plugins: [react(),tailwindcss(),
    
],
})
