import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        listPartners: "http://localhost:3001/assets/remoteEntry.js",
        listCompany: "http://localhost:3002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"]
    })
  ],
})
