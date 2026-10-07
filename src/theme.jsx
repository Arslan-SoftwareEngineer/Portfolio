import { createContext, useContext, useEffect, useState } from "react";
const Ctx = createContext({ theme: "dark", toggle() {} });
export const useTheme = () => useContext(Ctx);
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch { /* storage unavailable */ }
  }, [theme]);
  return <Ctx.Provider value={{ theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) }}>{children}</Ctx.Provider>;
}
