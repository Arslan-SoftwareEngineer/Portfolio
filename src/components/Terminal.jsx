import { useEffect, useRef, useState } from "react";
import { GH, LI, EMAIL, projects, skills, experience, pub } from "../data.js";
const fyp = projects[0];
const C = {
  help: () => "Commands: whoami, skills, projects, fyp, experience, publication, contact, clear",
  whoami: () => "Muhammad Arslan Jaffer\nSoftware Engineer & AI Developer\nBSc Software Engineering, Air University (2023 to present)\nFocus: applied Deep Learning, LLM integration, agentic workflows",
  skills: () => Object.entries(skills).map(([k, v]) => k + "\n  " + v.join(", ")).join("\n"),
  projects: () => projects.map((p) => p.name + "\n  " + p.short).join("\n") + "\nOpen the Projects page for case studies.",
  fyp: () => fyp.name + ", " + fyp.title + "\n" + fyp.facts.map(([k, v]) => k + ": " + v).join("\n") + "\nStack: " + fyp.stack.slice(0, 7).join(", "),
  experience: () => experience.map((e) => e.role + ", " + e.org + " (" + e.when + ")").join("\n"),
  publication: () => pub.event + "\n" + pub.title + "\n" + pub.authors,
  contact: () => <>Email    <a href={"mailto:" + EMAIL}>{EMAIL}</a>{"\n"}GitHub   <a href={GH} target="_blank" rel="noopener">Arslan-SoftwareEngineer</a>{"\n"}LinkedIn <a href={LI} target="_blank" rel="noopener">muhammad-arslan-jaffer</a></>
};
const chips = ["whoami", "skills", "projects", "fyp", "contact", "help"];
export default function Terminal() {
  const [lines, setLines] = useState([{ t: "Welcome. Type a command or tap a shortcut.\nTry: skills, projects, fyp or contact." }]);
  const [val, setVal] = useState("");
  const hist = useRef([]), hi = useRef(0), out = useRef(), inp = useRef();
  const run = (raw) => {
    const c = raw.trim().toLowerCase();
    if (!c) return;
    hist.current.push(c); hi.current = hist.current.length;
    if (c === "clear") return setLines([]);
    const f = C[c];
    setLines((l) => [...l, { c }, { t: f ? f() : `Command not found: ${c}. Type 'help' to see what's available.` }]);
  };
  useEffect(() => { out.current.scrollTop = out.current.scrollHeight; }, [lines]);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0, t;
    const type = () => {
      if (i <= 6) { setVal("whoami".slice(0, i++)); t = setTimeout(type, 75); }
      else t = setTimeout(() => { setVal(""); run("whoami"); }, 350);
    };
    t = setTimeout(type, 1200);
    return () => clearTimeout(t);
  }, []);
  const key = (e) => {
    if (e.key === "ArrowUp" && hist.current.length) { hi.current = Math.max(0, hi.current - 1); setVal(hist.current[hi.current]); e.preventDefault(); }
    if (e.key === "ArrowDown") { hi.current = Math.min(hist.current.length, hi.current + 1); setVal(hist.current[hi.current] || ""); e.preventDefault(); }
  };
  return (
    <div className="term" aria-label="Interactive terminal">
      <div className="term-bar"><b /><b /><b /><span>arslan@portfolio: ~</span></div>
      <div className="out" ref={out} role="log" aria-live="polite">
        {lines.map((l, i) => l.c !== undefined
          ? <div key={i}><span className="p">arslan@dev:~$</span> {l.c}</div>
          : <div key={i} className="pre">{l.t}</div>)}
      </div>
      <form className="line" onSubmit={(e) => { e.preventDefault(); run(val); setVal(""); }} autoComplete="off">
        <label htmlFor="cmd">arslan@dev:~$</label>
        <input id="cmd" ref={inp} value={val} onChange={(e) => setVal(e.target.value)} onKeyDown={key} spellCheck="false" aria-label="Type a command" />
      </form>
      <div className="chips">{chips.map((c) => <button key={c} type="button" onClick={() => { run(c); inp.current.focus({ preventScroll: true }); }}>{c}</button>)}</div>
    </div>
  );
}
