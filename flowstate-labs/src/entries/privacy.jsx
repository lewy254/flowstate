import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";
import PrivacyPage from "../pages/PrivacyPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrivacyPage />
  </StrictMode>
);
