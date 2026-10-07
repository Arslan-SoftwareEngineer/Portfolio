import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
const reduce = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
export function Typer({ words, speed = 70 }) {
  const [t, setT] = useState(reduce() ? words[0] : "");
  useEffect(() => {
    if (reduce()) return;
    let id, i = 0, n = 0, del = false;
    const tick = () => {
      const w = words[i % words.length];
      if (!del) {
        n++; setT(w.slice(0, n));
        if (n === w.length) { del = true; id = setTimeout(tick, 1600); return; }
        id = setTimeout(tick, speed);
      } else {
        n--; setT(w.slice(0, n));
        if (n === 0) { del = false; i++; id = setTimeout(tick, 350); return; }
        id = setTimeout(tick, 35);
      }
    };
    id = setTimeout(tick, 500);
    return () => clearTimeout(id);
  }, []);
  return <span className="typer">{t}<i className="caret" /></span>;
}
export function CountUp({ to }) {
  const ref = useRef(), show = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!show) return;
    if (reduce()) { setV(to); return; }
    let s, raf;
    const f = (ts) => { s = s ?? ts; const p = Math.min(1, (ts - s) / 1100); setV(Math.round(to * p)); if (p < 1) raf = requestAnimationFrame(f); };
    raf = requestAnimationFrame(f);
    return () => cancelAnimationFrame(raf);
  }, [show]);
  return <span ref={ref}>{v}</span>;
}
