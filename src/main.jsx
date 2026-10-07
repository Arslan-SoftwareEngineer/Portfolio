import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./theme.jsx";
import App from "./App.jsx";
import "./styles.css";
createRoot(document.getElementById("root")).render(
  <BrowserRouter><MotionConfig reducedMotion="user"><ThemeProvider><App /></ThemeProvider></MotionConfig></BrowserRouter>
);
