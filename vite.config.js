import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  define: {
    __version__: JSON.stringify(process.env.npm_package_version),
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find: '@lib',
        replacement: path.resolve(__dirname, './src/Lib'),
      },
      {
        find: '@ui',
        replacement: path.resolve(__dirname, './src/UI'),
      },
    ],
  },
})
