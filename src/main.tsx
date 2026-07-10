import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

const repairGithubPagesRoute = () => {
  const params = new URLSearchParams(window.location.search);
  const redirectedPath = params.get("p");

  if (!redirectedPath) return;

  const cleanBase = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const route = redirectedPath.replace(/^\//, "");
  const query = params.get("q") || "";
  const hash = params.get("h") ? `#${params.get("h")}` : "";

  window.history.replaceState(null, "", `${cleanBase}${route}${query}${hash}`);
};

repairGithubPagesRoute();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
