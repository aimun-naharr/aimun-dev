import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ReactLenis } from "@studio-freight/react-lenis";
const lenisOptions = {
  lerp: 0.1,
  duration: 1.5,
  smoothTouch: false, //smooth scroll for touch devices
  smooth: true,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactLenis root options={lenisOptions}>
      <App />
    </ReactLenis>
  </React.StrictMode>
);
