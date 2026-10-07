import { useState } from "react";
import { EMAIL, services } from "../data.js";
const timelines = ["As soon as possible", "Within a month", "Flexible"];
const enc = (d) => Object.keys(d).map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(d[k])).join("&");
export default function Form({ kind = "request" }) {
  const full = kind === "request";
  const [st, setSt] = useState("idle");
  const submit = async (e) => {
    e.preventDefault();
    const f = e.target;
    setSt("sending");
    try {
      const data = Object.fromEntries(new FormData(f).entries());
      const r = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: enc({ "form-name": kind, ...data }) });
      if (!r.ok) throw new Error("failed");
      f.reset(); setSt("done");
    } catch { setSt("error"); }
  };
  if (st === "done") return (
    <div className="box ok"><span className="eyebrow">message sent</span><h3>Thank you, I've received it.</h3>
      <p>I'll reply to the email address you provided.</p>
      <button className="btn" type="button" onClick={() => setSt("idle")}>Send another</button></div>
  );
  return (
    <form className="form box" onSubmit={submit}>
      <p className="hp" aria-hidden="true"><label>Leave this empty<input name="bot-field" tabIndex="-1" autoComplete="off" /></label></p>
      <div className="two">
        <label>Your name<input name="name" required autoComplete="name" /></label>
        <label>Your email<input type="email" name="email" required autoComplete="email" /></label>
      </div>
      {full && (
        <div className="two">
          <label>Service needed<select name="service" required defaultValue=""><option value="" disabled>Choose one</option>{services.map(([s]) => <option key={s}>{s}</option>)}<option>Something else</option></select></label>
          <label>Timeline<select name="timeline" defaultValue={timelines[2]}>{timelines.map((s) => <option key={s}>{s}</option>)}</select></label>
        </div>
      )}
      <label>Subject<input name="subject" required /></label>
      <label>Message<textarea name="message" rows="6" required placeholder={full ? "Describe what you need, any deadlines and relevant links." : "How can I help?"} /></label>
      <button className="btn primary" type="submit" disabled={st === "sending"}>{st === "sending" ? "Sending..." : full ? "Send request" : "Send message"}</button>
      {st === "error" && <p className="err" role="alert">That didn't send. Please email me directly at <a href={"mailto:" + EMAIL}>{EMAIL}</a>.</p>}
    </form>
  );
}
