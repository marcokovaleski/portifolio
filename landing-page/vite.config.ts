/**
 * Configuração do Vite para o projeto
 * Define plugins e configurações do servidor de desenvolvimento
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração principal do Vite
export default defineConfig({
  plugins: [react()],
  server: {
    // Configuração do proxy para API
    proxy: {
      "/api": {
        target:
          "https://lambda-function-arch-260757001308.europe-west1.run.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
