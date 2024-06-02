import React from "react";
import RevealText from "./RevealText";
import { motion } from "framer-motion";

export default function Loading({ setLoading }) {
  const revealFromClipping = {
    hidden: {
      clipPath: "circle(111.3% at 50% 0)",
    },
    visible: {
      clipPath: "circle(0.5% at 50% 0)",
      transition: {
        duration: 0.8,
        delay: 1,
      },
    },
  };
  // motion
  return (
    <motion.div
      variants={revealFromClipping}
      initial="hidden"
      animate="visible"
      className="absolute h-screen bg-red-400 text-primary w-full flex items-center justify-center bg-dot-pattern-light "
      // onAnimationComplete={() => setLoading(false)}
    >
      <div className="flex font-sans-bold uppercase gap-3 tracking-tighter text-5xl">
        <h1 className=" overflow-hidden">
          <RevealText word="Hello" />
        </h1>
        <h1 className=" overflow-hidden">
          <RevealText word="World!" animDelay={0.5} />
        </h1>
      </div>
    </motion.div>
  );
}
