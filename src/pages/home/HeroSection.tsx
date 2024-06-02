import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { revealAnim } from "../../animations";
import RevealText from "../../components/RevealText";
import Container from "../../components/layout/Container";

const SocialLink = ({ title }: { title: string }) => {
  return (
    <div className="text-3xl relative flex gap-1 items-center  group overflow-hidden">
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
    </div>
  );
};

const HeroSection = () => {
  // motion
  return (
    <>
      <section
        data-color="light"
        className=" relative  h-screen  flex  justify-center bg-dot-pattern-light"
      >
        {/* <AboutExp /> */}
        <Container>
          <div className="w-full ">
            <div className="">
              <h1 className="text-[10vw] leading-[10vw] font-sans-bold tracking-tight uppercase overflow-hidden text-center ">
                {/* Frontend{" "} */}
                <RevealText word="Aimun " />
                <span> </span>
                <RevealText word="Nahar" animDelay={5} />
              </h1>
            </div>
            <div className="flex   gap-20 mt-10 mb-20 leading-relaxed justify-between  px-10">
              <div className="pl-10">
                <p>☁️18 deg weather</p>
                <p>chittagong bangladesh</p>
              </div>

              <motion.div
                className="w-1/2 text-2xl"
                variants={revealAnim}
                initial={"hidden"}
                animate={"show"}
                custom={1.2}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                incidunt quasi consequatur odio nihil quidem, officia nobis
                omnis quaerat excepturi repudiandae cumque necessitatibus sequi
                maxime ad voluptates eligendi fuga fugiat?
              </motion.div>
            </div>
            <div className="">
              <motion.div
                variants={revealAnim}
                initial={"hidden"}
                animate={"show"}
                custom={1.9}
                className="flex gap-6  justify-end"
              >
                <SocialLink title="facebook" />
                <SocialLink title="twitter" />
                <SocialLink title="linkedin" />
                <SocialLink title="instagram" />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
