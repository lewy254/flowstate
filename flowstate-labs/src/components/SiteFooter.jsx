export default function SiteFooter({ home = false }) {
  const base = home ? "" : "/";
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© 2026 Flowstate Labs</span>
        <nav>
          {home && <a href="#about">About</a>}
          <a href={`${base}#apps`}>Apps</a>
          <a href="/privacy-policy">{home ? "Privacy Policy" : "Privacy"}</a>
          <a href="/terms-of-service">{home ? "Terms of Service" : "Terms"}</a>
          <a href="mailto:hello@flowstateslabs.com">hello@flowstateslabs.com</a>
        </nav>
      </div>
    </footer>
  );
}
