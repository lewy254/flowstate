import { useEffect, useRef } from "react";

const LINK_DIST = 120;

// Hero background: drifting dots with proximity links, painted on a canvas.
// Colors come from the --canvas-line / --canvas-accent tokens, so the
// `theme` prop only triggers a re-read of those tokens.
export default function ParticleField({ theme }) {
  const canvasRef = useRef(null);
  const recolorRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = null;
    let line = "68,60,54";
    let accent = "234,88,12";
    let dots = [];

    function readColors() {
      const cs = getComputedStyle(document.documentElement);
      line = cs.getPropertyValue("--canvas-line").trim() || line;
      accent = cs.getPropertyValue("--canvas-accent").trim() || accent;
    }

    function seedDots() {
      const count = Math.min(90, Math.round((w * h) / 16000));
      dots = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        isAccent: i % 11 === 5,
      }));
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedDots();
    }

    function paint(move) {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        if (move) {
          d.x = (d.x + d.vx + w) % w;
          d.y = (d.y + d.vy + h) % h;
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.isAccent ? 2.2 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${d.isAccent ? accent : line},${d.isAccent ? 0.65 : 0.4})`;
        ctx.fill();
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(${line},${0.14 * (1 - dist / LINK_DIST)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    function frame() {
      paint(true);
      raf = requestAnimationFrame(frame);
    }

    function start() {
      readColors();
      resize();
      if (reduced) {
        paint(false);
        return;
      }
      if (!raf) raf = requestAnimationFrame(frame);
    }

    recolorRef.current = () => {
      readColors();
      if (reduced) paint(false);
    };

    start();
    window.addEventListener("resize", start);

    return () => {
      window.removeEventListener("resize", start);
      cancelAnimationFrame(raf);
      recolorRef.current = null;
    };
  }, []);

  useEffect(() => {
    recolorRef.current?.();
  }, [theme]);

  return <canvas ref={canvasRef} className="hero-canvas" id="flow" aria-hidden="true" />;
}
