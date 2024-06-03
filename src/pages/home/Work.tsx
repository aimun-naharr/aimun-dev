import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/layout/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import {
  motion,
  useInView,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { works } from "../../../public/Works";
import { useNavigate } from "react-router-dom";

type Titem = {
  title: string;
  image: string;
  description: string;
  techStacks: string[];
  live: string;
};

type TWorkCard = {
  index: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  item: Titem;
};

const WorkCard = ({ index, setActiveIndex, item }: TWorkCard) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 50%", "end end"],
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const scale = useMotionTemplate`${scaleValue}`;

  useEffect(() => {
    setActiveIndex(index);
  }, [isInView]);

  return (
    <motion.div
      onClick={() => navigate(`/work/${item.title}`, { state: { work: item } })}
      style={{ scale: scale }}
      ref={ref}
      className="relative z-[8] w-full rounded-md bg-card-bg p-6 flex flex-col gap-3 cursor-pointer"
    >
      <div className="w-full rounded-md overflow-hidden z-[7] relative">
        <img src={item.image} alt="" className="w-full h-full object-cover " />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-wide">{item.title}</h2>
        <p className="text text-sm">{item.description}</p>

        <div className="flex gap-2">
          {/* <span className="chip text">React</span>
          <span className="chip text">typescript</span>
          <span className="chip text">redux</span> */}
          {item.techStacks.map((itm) => (
            <span key={itm} className="chip text">
              {itm}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  // motion
  return (
    <section id="work" className="py-10" data-color="dark">
      <Container>
        <SectionTitle title="Work" progressBgClass="bg-primary"></SectionTitle>
        <div className="flex md:flex-row flex-col relative">
          <div className="md:w-1/2  h-max sticky md:top-1/4 top-0 w-full py-3 md:py-0  mb-10 md:mb-0md:bg-transparent z-10 ">
            <h1 className="text-[15vw] leading-[15vw] text ">
              <span className="inline-block">0</span>
              <span className="inline-block">{activeIndex}</span>
              <span className="inline-block">.</span>
            </h1>
          </div>
          <div className="flex flex-col gap-8 w-full relative z-[9] ">
            {works.map((itm, i) => {
              return (
                <WorkCard
                  key={i}
                  index={i + 1}
                  setActiveIndex={setActiveIndex}
                  item={itm}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Work;
