import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../theme.jsx";
const links = [["/", "Home"], ["/about", "About"], ["/skills", "Skills"], ["/experience", "Experience"], ["/projects", "Projects"], ["/portfolio", "Portfolio"], ["/resume", "Resume"], ["/services", "Services"], ["/contact", "Contact"]];
const sun = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
const moon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>;
export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();
  const on = (p) => (p === "/" ? pathname === "/" : pathname.startsWith(p));
  return (
    <header className="nav">
      <div className="bar">
        <Link to="/" className="logo" onClick={() => setOpen(false)}><span className="dots"><i /><i /><i /><i /></span>arslan<b>.dev</b></Link>
        <nav className={open ? "open" : ""} aria-label="Main">
          {links.map(([to, l]) => (
            <Link key={to} to={to} className={on(to) ? "active" : ""} onClick={() => setOpen(false)}>{l}{on(to) && <motion.u layoutId="ul" />}</Link>
          ))}
        </nav>
        <div className="tools">
          <button className="tbtn" type="button" onClick={toggle} aria-label={"Switch to " + (theme === "dark" ? "light" : "dark") + " mode"} title="Toggle theme">{theme === "dark" ? sun : moon}</button>
          <button className="menu" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? "Close" : "Menu"}</button>
        </div>
      </div>
    </header>
  );
}
