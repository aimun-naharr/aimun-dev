import { motion } from "framer-motion";
import { revealAnim } from "../../animations";
import { InfiniteMovingCards } from "../../components/InfiniteMovingCards";
import RevealText from "../../components/RevealText";
import Container from "../../components/layout/Container";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  const techStacks = [
    "Javascript",
    "Typescript",
    "React",
    "Redux",
    "figma",
    "gsap",
    "framer motion",
  ];
  return (
    <>
      <section
        data-color="light"
        className=" relative  min-h-[100dvh]  flex flex-col  items-center bg-dot-pattern-light"
      >
        {/* <AboutExp /> */}
        <Container>
          <div className="w-full ">
            <div className="w-full">
              <h1 className="3xl:text-[9vw] 3xl:leading-[9vw] 2xl:text-[10vw] 2xl:leading-[10vw] xl:text-[11vw] xl:leading-[11vw] lg:text-[12vw] lg:leading-[12vw] font-sans-bold tracking-tight uppercase overflow-hidden text-center md:text-[12vw] md:leading-[12vw] sm:text-[13vw] sm:leading-[13vw] text-[12vw] leading-[12vw] ">
                {/* Frontend{" "} */}
                <RevealText word="Aimun " />
                <span> </span>
                <RevealText word="Nahar" animDelay={5} />
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-4  md:gap-20 mt-10 mb-20 leading-relaxed justify-between  px-10">
              <div className="pl-10">
                <button className="size-[120px] rounded-full bg-orange-500 text-xl font-bold ">
                  resume
                </button>
              </div>

              <motion.div
                className="w-full sm:w-1/2 sm:text-xl text-md"
                variants={revealAnim}
                initial={"hidden"}
                animate={"show"}
                custom={1.2}
              >
                A talented frontend developer from Bangladesh with a deep
                passion for UI/UX. With one year of industry experience, I
                thoroughly enjoy my work—most days, it doesn’t even feel like
                work! I’m always eager to learn new things to solve UI
                challenges because, let’s face it, bugs are just features that
                haven’t had their morning coffee yet.
              </motion.div>
            </div>
            <div className="">
              <SocialLinks />
            </div>
          </div>
        </Container>
        <div className=" w-full flex items-center justify-center mt-20">
          <InfiniteMovingCards>
            {techStacks.map((itm) => {
              return (
                <li
                  className="text-2xl flex gap-2 items-center  px-4 py-1 rounded-full"
                  key={itm}
                >
                  <div className="size-6 rounded-full bg-primary-foreground"></div>
                  <span>{itm}</span>
                </li>
              );
            })}
          </InfiniteMovingCards>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
