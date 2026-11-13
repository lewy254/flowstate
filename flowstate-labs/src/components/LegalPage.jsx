import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";
import { useTheme } from "../hooks/useTheme.js";

// Shared frame for the privacy policy and terms pages.
export default function LegalPage({ title, effective, children }) {
  const { toggleTheme } = useTheme();
  return (
    <>
      <SiteHeader onToggleTheme={toggleTheme} />
      <main className="legal" id="top">
        <header className="legal-head">
          <p className="eyebrow">Legal</p>
          <h1>{title}</h1>
          <p className="legal-meta">{effective}</p>
        </header>
        <div className="legal-body">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
