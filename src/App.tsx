import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Loading from "./components/Loading";
import Footer from "./pages/home/Footer";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  console.log(loading);
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

  useEffect(() => {
    document.body.onmousemove = (e) => {
      gsap.to("#mouse", {
        top: e.clientY,
        left: e.clientX,
        ease: "expo.out",
        duration: 2,
      });
    };
  }, []);

  return (
    <>
      <div id="mouse"></div>
      <div className="relative   z-[10] ">
        <HomePage />
      </div>
      <Footer />
    </>
  );
}

export default App;
