import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-700.css";
import App from "./App.jsx";
import { LocaleProvider } from "./i18n.jsx";
import "./tokens.css";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <LocaleProvider>
    <App />
  </LocaleProvider>,
);
