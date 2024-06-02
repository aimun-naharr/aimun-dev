import React from "react";
import { cn } from "../utils";
import { motion } from "framer-motion";

export default function RevealText({
  word,
  className,
  animDelay = 0,
}: {
  word: string;
  className?: string;
  animDelay?: number;
}) {
  const letters = word.split("");

  const revealAnim = {
    hidden: { opacity: 0, y: "80%" },
    show: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "linear",
        stiffness: 150,
        delay: delay,
        // duration: 0.5,
      },
    }),
  };
  // motion
  return (
    <>
      {letters.map((letter, index) => (
        <motion.span
          variants={revealAnim}
          initial={"hidden"}
          animate={"show"}
          custom={(index + animDelay) / 8}
          key={index}
          className={cn("inline-block ", className)}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
}