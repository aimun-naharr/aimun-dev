import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/home";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

function App() {
  console.log(ScrollTrigger);
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      console.log(section.dataset);
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 40%",
        // markers: true,
        onEnter: () => {
          document.body.setAttribute("theme", section.dataset.color!);
        },
        onEnterBack: () => {
          document.body.setAttribute("theme", section.dataset.color!);
        },
      });
    });
  }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
