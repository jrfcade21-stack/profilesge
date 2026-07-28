import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Estrategia de división de fragmentos (Code Splitting)
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Separamos el SDK de Google GenAI ya que es pesado
            if (id.includes('@google/genai')) {
              return 'vendor-ai';
            }
            // Separamos el core de React
            if (id.includes('react')) {
              return 'vendor-core';
            }
            // El resto de dependencias en un fragmento común de proveedores
            return 'vendor';
          }
          // Separamos las traducciones pesadas (textos legales) del código lógico
          if (id.includes('i18n')) {
            return 'translations';
          }
        }
      }
    },
    // Ajustamos el límite de advertencia a 800kB, un estándar más realista 
    // para aplicaciones modernas que integran modelos de IA.
    chunkSizeWarningLimit: 800,
  }
})