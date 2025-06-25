/**
 * Configuração do ESLint para o projeto
 * Define regras de linting para TypeScript e React
 */

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Ignora a pasta de build
  { ignores: ["dist"] },
  {
    // Estende configurações recomendadas
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    // Plugins para React
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    // Regras específicas
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
