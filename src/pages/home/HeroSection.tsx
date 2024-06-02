import { MdArrowOutward } from "react-icons/md";
import aimunWithUmbrella from "../../assets/aimun-with-umbrella.jpg";
import Container from "../../components/layout/Container";
import AboutExp from "./AboutExp";
import RevealText from "../../components/RevealText";

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
  return (
    <>
      <section
        data-color="light"
        className=" relative  h-screen  flex items-center justify-center bg-dot-pattern-light"
      >
        {/* <AboutExp /> */}
        <Container>
          <div>
            <div className="">
              <h1 className="text-[7vw] leading-[7vw] font-sans-bold tracking-tighter uppercase overflow-hidden ">
                {/* Frontend{" "} */}
                <RevealText word="Frontend" />
              </h1>
              <h1 className="text-[7vw] leading-[7vw] font-sans-bold tracking-tighter uppercase ml-[100px] overflow-hidden">
                <RevealText word="Developer" animDelay={5} />
                {/* Developer */}
              </h1>
            </div>
            <div className="flex   gap-20 ml-[150px] mt-10 mb-20 leading-relaxed ">
              <div className="w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                consectetur non saepe animi beatae nisi, Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Illum, nam.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                sapiente!
              </div>
            </div>
            <div className="ml-[150px] ">
              <div className="flex gap-6 ">
                <SocialLink title="facebook" />
                <SocialLink title="twitter" />
                <SocialLink title="linkedin" />
                <SocialLink title="instagram" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
