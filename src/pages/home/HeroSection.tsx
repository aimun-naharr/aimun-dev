import { motion } from "framer-motion";
import gsap from "gsap";
import { useRef } from "react";
import { revealAnim } from "../../animations";
import RevealText from "../../components/RevealText";
import Container from "../../components/layout/Container";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  const resumerContainer = useRef<HTMLDivElement>(null);
  const techStacks = [
    "Javascript",
    "Typescript",
    "React",
    "Redux",
    "figma",
    "gsap",
    "framer motion",
  ];
  const descriptions = [
    "A great frontend developer from Bangladesh with a",
    "deep passion for UI/UX. With one year of industry",
    "experience, I thoroughly enjoy my work. Most days, it",
    "doesn’t even feel like work! Though I’m always up for",
    "new tech trends to solve UI challenges because, let’s",
    "face it, bugs are just features that haven’t had",
    "their morning coffee yet.",
  ];

  const handleResumeMouseMove = (e: React.MouseEvent) => {
    if (resumerContainer.current) {
      const { left, top, width, height } =
        resumerContainer.current.getBoundingClientRect();

      const centerX = width / 2 + left;
      const centerY = height / 2 + top;

      // Calculate the x and y offset based on the mouse position relative to the container's center
      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;

      // Map the offset to the range within the container's width and height
      const x = gsap.utils.clamp(-width / 2, width / 2, offsetX);
      const y = gsap.utils.clamp(-height / 2, height / 2, offsetY);
      gsap.to("#resume-link", {
        // left: e.clientX,
        x,
        y,
        // y: e.clientY,
        duration: "1s",
        ease: "power4.out",
      });
    }
  };

  const handleResumeMouseLeave = () => {
    gsap.to("#resume-link", {
      x: 0,
      y: 0,
    });
  };
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
              <h1 className="3xl:text-[9vw] 3xl:leading-[9vw] 2xl:text-[10vw] 2xl:leading-[10vw] xl:text-[11vw] xl:leading-[11vw] lg:text-[12vw] lg:leading-[12vw] font-sans-bold tracking-tight uppercase overflow-hidden text-center md:text-[12vw] md:leading-[12vw] sm:text-[13vw] sm:leading-[13vw] text-[12vw] leading-[12vw]  ">
                {/* Frontend{" "} */}
                <RevealText word="Aimun " />
                <span> </span>
                <RevealText word="Nahar" animDelay={5} />
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-4  md:gap-20 mt-10 mb-10 leading-relaxed justify-between  pl-10">
              <div className="pl-10 flex justify-end md:justify-start">
                <div
                  ref={resumerContainer}
                  className="size-[80px] rounded-full  flex items-center justify-center relative"
                  onMouseMove={handleResumeMouseMove}
                  onMouseLeave={handleResumeMouseLeave}
                >
                  <a
                    href="https://drive.google.com/file/d/1Ihbe4GpSQaNbWC9dfJwZL5NxOyIztQ05/view?usp=sharing"
                    target="_blank"
                  >
                    <button
                      id="resume-link"
                      className="md:size-[120px] size-[80px] rounded-full bg-orange-500 text-sm md:text-xl font-bold absolute -translate-x-1/2 -translate-y-1/2"
                    >
                      resume
                    </button>
                  </a>
                </div>
              </div>

              <motion.div
                // variants={revealAnim}
                // initial={"hidden"}
                // animate={"show"}
                // custom={0.1}
                className="w-full md:w-1/2 sm:text-xl text-md md:text-right lg:text-base text-left"
              >
                {descriptions.map((d, i) => {
                  return (
                    <div key={i} className="overflow-hidden">
                      <motion.span
                        variants={revealAnim}
                        initial={"hidden"}
                        animate={"show"}
                        custom={0.8 + i * 0.1}
                        className="inline-block overflow-hidden "
                      >
                        {d}
                      </motion.span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
            <div className="">
              <SocialLinks />
            </div>
          </div>
        </Container>
        <div className=" w-full flex items-center justify-center mt-20">
          <div className="marquee-text">
            <div className="marquee-text-track">
              {techStacks.map((itm) => {
                return (
                  <li
                    className="text-2xl flex gap-2 items-center  rounded-full"
                    key={itm}
                  >
                    <div className="size-6 rounded-full bg-primary-foreground"></div>
                    <span>{itm}</span>
                  </li>
                );
              })}
              {techStacks.map((itm) => {
                return (
                  <li
                    className="text-2xl flex gap-2 items-center  rounded-full"
                    key={itm}
                  >
                    <div className="size-6 rounded-full bg-primary-foreground"></div>
                    <span>{itm}</span>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
