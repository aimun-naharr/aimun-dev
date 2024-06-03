import { motion } from "framer-motion";
import React from "react";
import { revealAnim } from "../../animations";
import { MdArrowOutward } from "react-icons/md";

const SocialLink = ({
  title,
  animDelay,
}: {
  title: string;
  animDelay: number;
}) => {
  return (
    <motion.div
      variants={revealAnim}
      initial={"hidden"}
      whileInView={"show"}
      custom={animDelay}
      className="sm:text-3xl text-2xl relative flex gap-1 items-center  group overflow-hidden"
    >
      {title}{" "}
      <span>
        <MdArrowOutward
          className="group-hover:-translate-y-[100%]
        group-hover:translate-x-[70%] transition-transform duration-700"
        />
      </span>
      <div className="absolute h-full w-full top-[100%] border flex justify-end ">
        <MdArrowOutward className="absolute right-7 group-hover:-translate-y-[112%] transition-transform duration-700 group-hover:translate-x-[90%]" />
      </div>
    </motion.div>
  );
};

export default function SocialLinks() {
  const links = [
    { title: "facebook", link: "" },
    { title: "linkedin", link: "" },
    { title: "github", link: "" },
    { title: "twitter", link: "" },
  ];
  // motion
  return (
    <div className="flex gap-3 md:gap-6 flex-wrap justify-end overflow-hidden">
      {links.map((link, i) => {
        return <SocialLink title={link.title} animDelay={0.8 + (i + 1)} />;
      })}
    </div>
  );
}
