import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./styles/index.css";
import "./styles/habitTracker.css";
import "./styles/habitItem.css";
import "./styles/modal.css";
import "./styles/iconPicker.css";
import "./styles/habitHistory.css";
import "./styles/confirmModal.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
