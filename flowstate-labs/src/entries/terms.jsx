import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";
import TermsPage from "../pages/TermsPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TermsPage />
  </StrictMode>
);
