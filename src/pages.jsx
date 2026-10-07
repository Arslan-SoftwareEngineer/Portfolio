import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Terminal from "./components/Terminal.jsx";
import Card, { spot } from "./components/Card.jsx";
import Reveal from "./components/Reveal.jsx";
import Form from "./components/Form.jsx";
import { Typer, CountUp } from "./components/Typer.jsx";
import { GH, LI, EMAIL, roles, bio, passion, goals, pillars, stats, services, projects, experience, skills, soft, edu, pub } from "./data.js";
const ext = { target: "_blank", rel: "noopener" };

const PageHead = ({ k, title, lead }) => (
  <div className="phead"><span className="eyebrow">{k}</span><h1 className="ph">{title}</h1>{lead && <p className="lead">{lead}</p>}</div>
);
const Sec = ({ k, title, lead, children }) => (
  <section className="sec"><Reveal><span className="eyebrow">{k}</span><h2>{title}</h2>{lead && <p className="lead">{lead}</p>}</Reveal>{children}</section>
);
const Tags = ({ a }) => <div className="stack">{a.map((s) => <span key={s}>{s}</span>)}</div>;
function Marquee() {
  const items = Object.values(skills).flat();
  return <div className="marquee" aria-hidden="true"><div className="track">{[...items, ...items].map((s, i) => <span key={i}>{s}</span>)}</div></div>;
}

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="hl">
          <div className="status"><i />Open to internships, collaborations and projects</div>
          <h1>Muhammad <em>Arslan</em> Jaffer</h1>
          <p className="role">I'm a <Typer words={roles} /></p>
          <p className="sub">I build AI systems that work outside the notebook. Software Engineering student at Air University, specializing in applied Deep Learning, LLM integration and agentic workflows.</p>
          <div className="cta"><Link className="btn primary" to="/services">Request services</Link><Link className="btn" to="/projects">View projects</Link><a className="btn" href="/My_Resume.pdf" download>Resume</a></div>
          <div className="social"><a href={GH} {...ext}>GitHub</a><a href={LI} {...ext}>LinkedIn</a><a href={"mailto:" + EMAIL}>{EMAIL}</a></div>
        </div>
        <Terminal />
      </section>
      <div className="stats">{stats.map(([n, l], i) => <Reveal key={l} delay={i * 0.07}><div className="stat"><b><CountUp to={n} /></b><span>{l}</span></div></Reveal>)}</div>
      <Sec k="my field" title="Where I'm strongest" lead="Four areas where I do my deepest work.">
        <div className="grid">{pillars.map(([t, d], i) => (
          <Reveal key={t} delay={(i % 4) * 0.07}><div className="card spot" onMouseMove={spot}><span className="tag">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div></Reveal>))}
        </div>
      </Sec>
      <Sec k="passion and goals" title="What drives me">
        <div className="two">
          <Reveal><div className="box"><h3>Passion</h3><p className="mutedp">{passion}</p></div></Reveal>
          <Reveal delay={0.1}><div className="box"><h3>Goals</h3><ul className="goals">{goals.map(([a, b]) => <li key={a}><b>{a}</b><span>{b}</span></li>)}</ul></div></Reveal>
        </div>
      </Sec>
      <Marquee />
      <Sec k="selected work" title="Featured projects">
        <div className="grid">{projects.slice(0, 3).map((p, i) => <Card key={p.slug} p={p} i={i} />)}</div>
        <p className="all"><Link to="/projects">See all projects</Link></p>
      </Sec>
      <Reveal><div className="band box"><h2>Have a project in mind?</h2><p className="mutedp">AI models, RAG apps, agentic automations or full-stack products. Tell me what you need.</p><Link className="btn primary" to="/services">Request services</Link></div></Reveal>
    </>
  );
}

export function About() {
  const [ok, setOk] = useState(true);
  return (
    <>
      <div className="about">
        <div className="photo"><span aria-hidden="true">MA</span>{ok && <img src="/photo.jpg" alt="Portrait of Muhammad Arslan Jaffer" onError={() => setOk(false)} />}</div>
        <div>
          <span className="eyebrow">about me</span>
          <h1 className="ph">I'm <em>Arslan</em></h1>
          <p className="role">Right now I'm <Typer words={["going deeper into AI", "building Parwarish.ai", "exploring agentic workflows", "training and evaluating models"]} /></p>
          <p className="lead" style={{ marginBottom: 0 }}>{bio}</p>
        </div>
      </div>
      <Sec k="mindset" title="How I work"><div className="two">
        <Reveal><div className="box"><h3>Passion</h3><p className="mutedp">{passion}</p></div></Reveal>
        <Reveal delay={0.1}><div className="box"><h3>Strengths</h3><Tags a={soft} /></div></Reveal></div></Sec>
      <Sec k="goals" title="Where I'm headed"><div className="grid">{goals.map(([a, b], i) => (
        <Reveal key={a} delay={i * 0.08}><div className="card spot" onMouseMove={spot}><span className="tag">0{i + 1}</span><h3>{a}</h3><p>{b}</p></div></Reveal>))}</div></Sec>
      <Sec k="education" title="Education"><div className="tl">{edu.map(([a, b, c]) => (
        <Reveal key={a}><div className="job"><h3>{a}</h3><div className="meta">{c}</div><p>{b}</p></div></Reveal>))}</div></Sec>
    </>
  );
}

export function Skills() {
  return (
    <>
      <PageHead k="skills & tools" title="Skills & Tools" lead="The languages, frameworks and tools I use to take AI work from idea to production." />
      <p className="prompt">$ <Typer words={["ls ~/skills", "cat tools.txt", "git log --oneline"]} /></p>
      <div className="skills">{Object.entries(skills).map(([k, v], i) => (
        <Reveal key={k} delay={(i % 3) * 0.08}><div className="box"><h3>{k}</h3><Tags a={v} /></div></Reveal>))}</div>
      <Marquee />
      <Sec k="soft skills" title="How I work with people"><Reveal><Tags a={soft} /></Reveal></Sec>
    </>
  );
}

export function Experience() {
  const work = experience.filter((e) => e.place), lead = experience.filter((e) => !e.place);
  return (
    <>
      <PageHead k="experience" title="Experience" lead="Industry internships, campus leadership and published research." />
      <div className="tl">{work.map((e) => (
        <Reveal key={e.role + e.org}><div className={"job" + (e.now ? " now" : "")}><h3>{e.role}, {e.org}</h3><div className="meta">{e.place}, {e.when}</div><p>{e.text}</p></div></Reveal>))}</div>
      <Sec k="leadership" title="Leadership"><div className="grid">{lead.map((e, i) => (
        <Reveal key={e.org} delay={i * 0.08}><div className="card spot" onMouseMove={spot}><span className="tag">{e.role}</span><h3>{e.org}</h3><p>{e.text}</p></div></Reveal>))}</div></Sec>
      <Sec k="research" title="Publication"><Reveal><div className="box"><span className="tag">{pub.event}</span><h3>{pub.title}</h3><p className="mutedp">{pub.where}</p><p className="cite">{pub.authors}</p></div></Reveal></Sec>
    </>
  );
}

export function Projects() {
  const [f, setF] = useState("All");
  const cats = ["All", "AI & ML", "Mobile", "Full-stack"];
  const list = projects.filter((p) => f === "All" || p.cat.includes(f));
  return (
    <>
      <PageHead k="projects" title="Projects" lead="Open any project for its case study." />
      <div className="filters" role="group" aria-label="Filter projects">{cats.map((c) => <button key={c} type="button" className={f === c ? "on" : ""} onClick={() => setF(c)}>{c}</button>)}</div>
      <div className="grid" key={f}>{list.map((p, i) => <Card key={p.slug} p={p} i={i} />)}</div>
    </>
  );
}

export function ProjectPage() {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return <NotFound />;
  const p = projects[i], n = projects[(i + 1) % projects.length];
  return (
    <article className="case">
      <Link to="/projects" className="back">Back to projects</Link>
      <span className="tag">{p.tag}</span>
      <h1 className="ph">{p.name}</h1>
      <p className="sub">{p.title}</p>
      <Tags a={p.stack} />
      <div className="cta" style={{ marginTop: 22 }}>
        {p.repo && <a className="btn primary" href={p.repo} {...ext}>View on GitHub</a>}
        {p.demo && <a className="btn" href={p.demo} {...ext}>Live demo</a>}
      </div>
      <Sec k="overview" title="Overview"><Reveal><p className="lead">{p.overview}</p></Reveal></Sec>
      {p.facts && <Reveal><dl className="facts box">{p.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></Reveal>}
      {[["problem", "The problem"], ["approach", "How it works"], ["results", "Results"]].map(([k, l]) => p[k] && <Sec key={k} k={k} title={l}><Reveal><p className="lead">{p[k]}</p></Reveal></Sec>)}
      <Link to={"/projects/" + n.slug} className="card spot next" onMouseMove={spot}><span className="tag">Next project</span><h3>{n.name}</h3></Link>
    </article>
  );
}

export function Portfolio() {
  const flag = projects[0], demos = projects.filter((p) => p.demo);
  return (
    <>
      <PageHead k="portfolio" title="Portfolio" lead="My flagship work, live demos and research in one place." />
      <Reveal><div className="feature box">
        <div><span className="tag">Flagship, {flag.tag}</span><h2 style={{ margin: "8px 0 10px" }}>{flag.name}</h2><p className="mutedp">{flag.overview}</p><Tags a={flag.stack} />
          <div className="cta" style={{ marginTop: 22 }}><Link className="btn primary" to={"/projects/" + flag.slug}>Read case study</Link><a className="btn" href={flag.repo} {...ext}>GitHub</a></div></div>
        <dl className="facts">{flag.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
      </div></Reveal>
      <Sec k="live" title="Live demos" lead="Try these running in the browser.">
        <div className="grid">{demos.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}><div className="card spot" onMouseMove={spot}><span className="tag">{p.tag}</span><h3>{p.name}</h3><p>{p.short}</p>
            <div className="cta" style={{ marginTop: 18 }}><a className="btn primary" href={p.demo} {...ext}>Open live demo</a><Link className="btn" to={"/projects/" + p.slug}>Case study</Link></div></div></Reveal>))}</div>
      </Sec>
      <Sec k="research" title="Published research"><Reveal><div className="box"><span className="tag">{pub.event}</span><h3>{pub.title}</h3><p className="mutedp">{pub.where}</p><p className="cite">{pub.authors}</p></div></Reveal></Sec>
      <Reveal><p className="all"><a href={GH} {...ext}>Browse all repositories on GitHub</a></p></Reveal>
    </>
  );
}

export function Resume() {
  return (
    <>
      <PageHead k="resume" title="Resume" lead="Software Engineering student specializing in applied Deep Learning, LLM integration and agentic workflows." />
      <div className="cta"><a className="btn primary" href="/My_Resume.pdf" download>Download PDF</a><a className="btn" href="/My_Resume.pdf" {...ext}>Open in new tab</a></div>
      <div className="resume">
        <Reveal><div className="box"><h3>Experience</h3>{experience.map((e) => <div className="rrow" key={e.role + e.org}><div><b>{e.role}</b>, {e.org}</div><span>{e.when}</span><p>{e.text}</p></div>)}</div></Reveal>
        <Reveal><div className="box"><h3>Education</h3>{edu.map(([a, b, c]) => <div className="rrow" key={a}><div><b>{a}</b>, {b}</div><span>{c}</span></div>)}</div></Reveal>
        <Reveal><div className="box"><h3>Technical skills</h3>{Object.entries(skills).map(([k, v]) => <div className="rrow" key={k}><div><b>{k}</b></div><p>{v.join(", ")}</p></div>)}</div></Reveal>
        <Reveal><div className="box"><h3>Projects</h3>{projects.map((p) => <div className="rrow" key={p.slug}><div><b>{p.name}</b></div><p>{p.short}</p></div>)}</div></Reveal>
        <Reveal><div className="box"><h3>Publication</h3><p className="mutedp">{pub.authors}, "{pub.title}," {pub.event}.</p></div></Reveal>
      </div>
    </>
  );
}

export function Services() {
  return (
    <>
      <PageHead k="services" title="Services" />
      <p className="role">I can build <Typer words={["LLM chatbots", "RAG pipelines", "agentic automations", "mobile apps", "full-stack products"]} /></p>
      <div className="grid">{services.map(([t, d], i) => (
        <Reveal key={t} delay={(i % 4) * 0.07}><div className="card spot" onMouseMove={spot}><span className="tag">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div></Reveal>))}</div>
      <Sec k="request" title="Request a service" lead="Tell me about your project. Your request goes straight to my inbox."><Reveal><Form kind="request" /></Reveal></Sec>
    </>
  );
}

export function Contact() {
  const items = [["Email", EMAIL, "mailto:" + EMAIL], ["GitHub", "Arslan-SoftwareEngineer", GH], ["LinkedIn", "muhammad-arslan-jaffer", LI], ["Based in", "Rawalpindi, Pakistan"]];
  return (
    <>
      <PageHead k="contact" title="Contact" lead="Open to internships, research collaborations and AI projects. Email is the fastest way to reach me." />
      <div className="grid">{items.map(([k, v, h], i) => (
        <Reveal key={k} delay={i * 0.07}>{h
          ? <a className="card spot" href={h} {...(k === "Email" ? {} : ext)} onMouseMove={spot}><span className="tag">{k}</span><h3>{v}</h3></a>
          : <div className="card"><span className="tag">{k}</span><h3>{v}</h3></div>}</Reveal>))}</div>
      <Sec k="message" title="Send a message"><Reveal><Form kind="contact" /></Reveal></Sec>
      <p className="all"><Link to="/services">Need a service? Request it here</Link></p>
    </>
  );
}

export function NotFound() {
  return <><PageHead k="404" title="Page not found" lead="That page doesn't exist." /><Link className="btn primary" to="/">Back to home</Link></>;
}
