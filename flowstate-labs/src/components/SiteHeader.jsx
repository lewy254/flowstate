import { useEffect, useState } from "react";

// Top navigation. `home` is true on the landing page, where section links
// are in-page anchors; on other pages they link back to "/#section".
export default function SiteHeader({ home = false, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const base = home ? "" : "/";

  // Frosted background once the page starts scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: body scroll lock and Escape to close
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the mobile menu when the viewport becomes desktop-sized
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1025px)");
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const classes = ["nav"];
  if (scrolled) classes.push("is-scrolled");
  if (open) classes.push("is-open");

  return (
    <header className={classes.join(" ")} id="nav">
      <div className="nav-inner">
        <a href={home ? "#top" : "/"} className="wordmark">
          <svg className="wordmark-glyph" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M4 20c4-8 8-8 12 0s8 8 12 0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M4 12c4-8 8-8 12 0s8 8 12 0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
          </svg>
          Flowstate&nbsp;Labs
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
        </button>

        <nav
          className="nav-links"
          id="site-nav"
          onClick={(e) => {
            if (e.target.closest("a")) setOpen(false);
          }}
        >
          {home && <a href="#about">About</a>}
          <a href={`${base}#apps`}>Apps</a>
          <a href={`${base}#approach`}>Approach</a>
          {home && <a href="/privacy-policy">Privacy Policy</a>}
          {home && <a href="/terms-of-service">Terms of Service</a>}
          <button className="theme-toggle" id="theme-toggle" type="button" aria-label="Toggle dark mode" onClick={onToggleTheme}>
            <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5 5l1.7 1.7M17.3 17.3 19 19M19 5l-1.7 1.7M6.7 17.3 5 19" />
              </g>
            </svg>
            <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 3.5a9 9 0 1 0 5.5 12A7.5 7.5 0 0 1 15 3.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </button>
          <a href={`${base}#updates`} className="nav-cta">Get updates</a>
        </nav>
      </div>
    </header>
  );
}
