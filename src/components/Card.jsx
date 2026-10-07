import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
export const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", e.clientX - r.left + "px");
  e.currentTarget.style.setProperty("--my", e.clientY - r.top + "px");
};
export default function Card({ p, i = 0 }) {
  return (
    <Reveal delay={(i % 3) * 0.08}>
      <Link to={"/projects/" + p.slug} className="card spot" onMouseMove={spot}>
        <span className="tag">{p.tag}</span>
        <h3>{p.name}</h3>
        <p>{p.short}</p>
        <div className="stack">{p.stack.slice(0, 4).map((s) => <span key={s}>{s}</span>)}</div>
        <span className="more">Read case study</span>
      </Link>
    </Reveal>
  );
}
