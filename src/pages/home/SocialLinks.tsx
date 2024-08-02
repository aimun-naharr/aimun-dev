import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { revealAnim } from "../../animations";

const SocialLink = ({
  title,
  animDelay,
  link,
}: {
  title: string;
  animDelay: number;
  link: string;
}) => {
  return (
    <a href={link} target="_blank">
      <motion.div
        variants={revealAnim}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
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
    </a>
  );
};

export default function SocialLinks() {
  const links = [
    {
      title: "linkedin",
      link: "https://www.linkedin.com/in/aimun-nahar-b915b9205",
    },
    { title: "github", link: "https://github.com/aimun-naharr" },
    { title: "twitter", link: "#" },
    { title: "facebook", link: "#" },
  ];
  // motion
  return (
    <div className="flex gap-3 md:gap-6 flex-wrap justify-end overflow-hidden">
      {links.map((link, i) => {
        return (
          <SocialLink
            title={link.title}
            link={link.link}
            animDelay={1.2 + i * 0.1}
          />
        );
      })}
    </div>
  );
}
