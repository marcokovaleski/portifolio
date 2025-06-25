/**
 * Ponto de entrada principal da aplicação React
 * Configura o StrictMode e renderiza o componente Home
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Home from "./pages/Home.tsx";

// Renderiza a aplicação no elemento root do DOM
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
