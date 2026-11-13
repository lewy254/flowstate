import { useRef } from "react";
import heroArt from "../assets/hero-meditating.svg?raw";
import ParticleField from "../components/ParticleField.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import SiteHeader from "../components/SiteHeader.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { useTheme } from "../hooks/useTheme.js";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const updatesRef = useRef(null);
  useReveal();

  const handleSignup = (e) => {
    e.preventDefault();
    // No backend yet, so confirm locally
    updatesRef.current?.classList.add("is-signed-up");
  };

  return (
    <>
      <SiteHeader home onToggleTheme={toggleTheme} />

      <main id="top">
        {/* Hero */}
        <section className="hero" id="hero">
          <ParticleField theme={theme} />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow hero-rise">Flowstate Labs</p>
              <h1 className="hero-title">
                <span className="w">Software</span> <span className="w">that</span> <span className="w">gets</span>
                <br />
                <span className="w">out</span> <span className="w">of</span> <span className="w">your</span> <span className="w accent">way.</span>
              </h1>
              <p className="hero-sub hero-rise" data-delay="2">
                Flowstate Labs is an independent software studio. We build calm,
                considered applications for everyday life — published here at
                flowstateslabs.com.
              </p>
              <div className="hero-actions hero-rise" data-delay="3">
                <a href="#apps" className="btn btn-primary">Explore the apps</a>
                <a href="#approach" className="btn btn-ghost">Our approach&nbsp;<span className="chev">›</span></a>
              </div>
            </div>

            {/* "Meditating" from Open Doodles by Pablo Stanley (CC0) — see src/assets/hero-meditating.svg */}
            <div
              className="hero-art hero-rise"
              data-delay="3"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: heroArt }}
            />
          </div>
        </section>

        {/* Marquee */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>Liin</span><i>·</i><span>Goyolo</span><i>·</i><span>Tether</span>
            <span>Liin</span><i>·</i><span>Goyolo</span><i>·</i><span>Tether</span>
          </div>
        </div>

        {/* About */}
        <section className="about" id="about">
          <div className="about-inner reveal">
            <p className="eyebrow">About Flowstate Labs</p>
            <h2 className="about-title">What is Flowstate Labs?</h2>
            <p className="about-lead">
              Flowstate Labs is a software company that designs and publishes consumer
              applications. This homepage is our public website — not a login screen.
              Each product we ship has its own page, with a clear description of
              what it does and how to get it.
            </p>
            <div className="about-grid">
              <div className="about-block">
                <h3>Our products</h3>
                <ul className="product-list">
                  <li>
                    <a href="https://liin.ca"><strong>Liin</strong></a> —
                    A goal app with a referee. Pick one thing, prove it with a photo,
                    and a friend says it counts. Money is optional and comes back if
                    you finish (coming soon).
                  </li>
                  <li>
                    <strong>Goyolo</strong> —
                    A native AI agent for the Godot game engine (in development).
                  </li>
                  <li>
                    <strong>Tether</strong> —
                    Local sync between Mac and Android over Wi‑Fi (in development).
                  </li>
                </ul>
              </div>
              <div className="about-block">
                <h3>Legal &amp; contact</h3>
                <p>
                  Our <a href="/privacy-policy">Privacy Policy</a> and{" "}
                  <a href="/terms-of-service">Terms of Service</a> apply to all
                  Flowstate Labs websites and applications. For questions, email{" "}
                  <a href="mailto:hello@flowstateslabs.com">hello@flowstateslabs.com</a>.
                </p>
                <p className="about-note">
                  OAuth sign-in for our apps is provided by Flowstate Labs. The app
                  name shown on the consent screen matches the branding on this site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Apps directory */}
        <section className="apps" id="apps">
          <div className="section-head reveal">
            <p className="eyebrow">The directory</p>
            <h2>Three tools. One idea:<br /><span className="muted">less friction, more life.</span></h2>
            <p className="section-sub">Everything below is in active development. Quiet work takes time.</p>
          </div>

          <div className="app-grid">
            <a href="https://liin.ca" className="app-card card-wide reveal" data-delay="1">
              <div className="app-icon icon-liin" aria-hidden="true">
                <img src="/assets/liin-icon.png" alt="" width="64" height="64" />
              </div>
              <div className="app-meta">
                <div className="app-name-row">
                  <h3>Liin</h3>
                  <span className="pill">Coming soon</span>
                </div>
                <p>Say it, prove it, keep your word. A goal app with a referee: a friend checks your proof, and anything you put on the line comes back when you finish.</p>
              </div>
            </a>

            <article className="app-card reveal" data-delay="2">
              <div className="app-icon icon-goyolo" aria-hidden="true">
                <img src="/assets/goyolo-icon.png" alt="" width="64" height="64" />
              </div>
              <div className="app-meta">
                <div className="app-name-row">
                  <h3>Goyolo</h3>
                  <span className="pill">In development</span>
                </div>
                <p>A native AI agent inside Godot. It builds scenes, writes scripts, and drives the editor for you.</p>
              </div>
            </article>

            <article className="app-card reveal" data-delay="3">
              <div className="app-icon icon-tether" aria-hidden="true">
                <svg viewBox="0 0 48 48">
                  <rect x="8" y="14" width="14" height="20" rx="3" fill="none" stroke="#fff" strokeWidth="3.5" />
                  <rect x="26" y="10" width="14" height="28" rx="3" fill="none" stroke="#fff" strokeWidth="3.5" opacity="0.55" />
                  <path d="M22 24h4" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="app-meta">
                <div className="app-name-row">
                  <h3>Tether</h3>
                  <span className="pill">In development</span>
                </div>
                <p>Mac and Android on the same Wi-Fi. Clipboard, notifications, find-my-phone — no cloud, no ADB.</p>
              </div>
            </article>
          </div>
        </section>

        {/* Approach */}
        <section className="approach" id="approach">
          <div className="approach-inner">
            <h2 className="approach-statement reveal">
              Most software wants your attention.<br />
              <span className="dim">Ours wants to give it back.</span>
            </h2>
            <div className="principles">
              <div className="principle reveal" data-delay="1">
                <span className="principle-num">01</span>
                <h3>Opinionated by default</h3>
                <p>Fewer settings, better defaults. We make the hard calls so you don't open a preferences pane at 9am.</p>
              </div>
              <div className="principle reveal" data-delay="2">
                <span className="principle-num">02</span>
                <h3>Quiet by design</h3>
                <p>No streak-shaming, no red badges, no engagement loops. A notification from us means something.</p>
              </div>
              <div className="principle reveal" data-delay="3">
                <span className="principle-num">03</span>
                <h3>Yours, privately</h3>
                <p>Your data lives on your device first. We build products people pay for — you are not the product.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="updates" id="updates">
          <div className="updates-inner reveal" ref={updatesRef}>
            <h2>Be the first to know.</h2>
            <p>One short email when something ships. Nothing else, ever.</p>
            <form className="signup" id="signup-form" onSubmit={handleSignup}>
              <input type="email" placeholder="you@example.com" aria-label="Email address" required />
              <button type="submit" className="btn btn-primary">Notify me</button>
            </form>
            <p className="signup-confirm" id="signup-confirm">You're on the list. Talk soon.</p>
          </div>
        </section>
      </main>

      <SiteFooter home />
    </>
  );
}
