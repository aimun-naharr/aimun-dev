import React, { ReactNode, useEffect } from "react";
import Footer from "../../pages/home/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  console.log("location", location);
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
  }, [location.pathname]);

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
    <div key={name}>
      <div id="mouse" className="hidden md:block"></div>
      <Navbar />
      <div className="relative z-[10] ">{children}</div>
      <Footer />
    </div>
  );
}
