import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n/translations";
import App from "./App.jsx";
import "./styles/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);