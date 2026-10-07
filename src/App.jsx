import { useEffect } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Background from "./components/Background.jsx";
import Nav from "./components/Nav.jsx";
import { useTheme } from "./theme.jsx";
import { Home, About, Skills, Experience, Projects, ProjectPage, Portfolio, Resume, Services, Contact, NotFound } from "./pages.jsx";
const variants = {
  dark: { initial: { opacity: 0, x: -28, clipPath: "inset(0 100% 0 0)" }, animate: { opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }, exit: { opacity: 0, x: 28 } },
  light: { initial: { opacity: 0, y: 22, scale: 0.99 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: -12 } }
};
export default function App() {
  const loc = useLocation();
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const sx = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  useEffect(() => { window.scrollTo(0, 0); }, [loc.pathname]);
  const v = variants[theme];
  return (
    <>
      <Background />
      <motion.div className="progress" style={{ scaleX: sx }} />
      <Nav />
      <AnimatePresence mode="wait">
        <motion.main key={loc.pathname} className="wrap page" initial={v.initial} animate={v.animate} exit={v.exit} transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}>
          <Routes location={loc}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <footer>
        <div className="wrap fl"><span>© 2026 Muhammad Arslan Jaffer, Rawalpindi, Pakistan</span>
          <span><Link to="/services">Request services</Link><Link to="/resume">Resume</Link><Link to="/contact">Contact</Link></span></div>
      </footer>
    </>
  );
}
