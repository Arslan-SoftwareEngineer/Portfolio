import { useEffect, useRef } from "react";
import { useTheme } from "../theme.jsx";
export default function Background() {
  const ref = useRef();
  const { theme } = useTheme();
  useEffect(() => {
    const c = ref.current, x = c.getContext("2d");
    const dark = theme === "dark", still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const chars = "01{}[]<>/;=+*#$&", cols = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];
    let w, h, raf, items = [];
    const init = () => {
      w = c.width = innerWidth; h = c.height = innerHeight;
      items = dark
        ? Array.from({ length: Math.floor(w / 22) }, (_, i) => ({ x: i * 22 + 4, y: Math.random() * h, v: 0.8 + Math.random() * 1.8 }))
        : Array.from({ length: Math.min(16, Math.floor(w / 90)) }, (_, i) => ({ x: Math.random() * w, y: Math.random() * h, s: 20 + Math.random() * 36, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.006, vy: -0.15 - Math.random() * 0.25, k: i % 4, t: i % 3 }));
    };
    const draw = () => {
      x.clearRect(0, 0, w, h);
      if (dark) {
        x.font = "14px JetBrains Mono, monospace";
        for (const it of items) {
          for (let j = 0; j < 9; j++) {
            x.fillStyle = `rgba(57,255,136,${j === 0 ? 0.9 : 0.5 * (1 - j / 9)})`;
            x.fillText(chars[(Math.floor(it.y / 16) + j * 7 + Math.floor(it.x)) % chars.length], it.x, it.y - j * 16);
          }
          it.y += it.v;
          if (it.y - 144 > h) { it.y = 0; it.v = 0.8 + Math.random() * 1.8; }
        }
      } else {
        for (const it of items) {
          x.save(); x.translate(it.x, it.y); x.rotate(it.r); x.globalAlpha = 0.16;
          x.fillStyle = x.strokeStyle = cols[it.k]; x.lineWidth = 3;
          if (it.t === 0) { x.beginPath(); x.arc(0, 0, it.s / 2, 0, 7); x.fill(); }
          else if (it.t === 1) x.strokeRect(-it.s / 2, -it.s / 2, it.s, it.s);
          else { x.beginPath(); x.moveTo(0, -it.s / 2); x.lineTo(it.s / 2, it.s / 2); x.lineTo(-it.s / 2, it.s / 2); x.closePath(); x.fill(); }
          x.restore();
          it.r += it.vr; it.y += it.vy;
          if (it.y < -60) { it.y = h + 60; it.x = Math.random() * w; }
        }
      }
      if (!still) raf = requestAnimationFrame(draw);
    };
    const rs = () => { init(); if (still) draw(); };
    init(); draw();
    addEventListener("resize", rs);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", rs); };
  }, [theme]);
  return <canvas ref={ref} className="bg" aria-hidden="true" />;
}
