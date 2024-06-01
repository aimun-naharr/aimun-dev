import { MdArrowOutward } from "react-icons/md";
import aimunWithUmbrella from "../../assets/aimun-with-umbrella.jpg";
import Container from "../../components/layout/Container";

const HeroSection = () => {
  return (
    <>
      <Container>
        <section className="my-10 relative">
          <div className="">
            <h1 className="text-[7vw] leading-[7vw] font-sans-bold tracking-tighter uppercase">
              Frontend{" "}
              <div className="h-20 w-32 border inline-block rounded-md overflow-hidden relative">
                <div className="absolute h-full w-full bg-white opacity-30 blur-lg"></div>
                <img
                  src={aimunWithUmbrella}
                  alt="aimun with umbrella"
                  className="w-full h-full object-cover"
                />
              </div>
            </h1>

            <h1 className="text-[7vw] leading-[7vw] font-sans-bold tracking-tighter uppercase ml-[100px]">
              Developer
            </h1>
          </div>
          <div className="flex w-3/4 justify-end gap-20 ml-[150px] mt-10 mb-20">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              consectetur non saepe animi beatae nisi, Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Illum, nam.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              consectetur non saepe animi beatae nisi,{" "}
            </div>
          </div>
          <div className="ml-[150px] ">
            <div className="flex gap-6 ">
              <div className="text-3xl flex gap-1 items-center">
                facebook <MdArrowOutward />
              </div>
              <div className="text-3xl flex gap-1 items-center">
                instagram <MdArrowOutward />
              </div>
              <div className="text-3xl flex gap-1 items-center">
                linkedin <MdArrowOutward />
              </div>
              <div className="text-3xl flex gap-1 items-center">
                twitter <MdArrowOutward />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default HeroSection;
