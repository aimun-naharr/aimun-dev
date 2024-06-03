import { useRef } from "react";

const SectionTitle = ({
  title,
  progressBgClass,
}: {
  title: string;
  progressBgClass?: string;
}) => {
  const ref = useRef(null);

  // motion
  return (
    <div className="flex gap-2 items-center text-[5vw]  relative" ref={ref}>
      {/* <BsArrowReturnRight /> */}
      <span>/*</span>
      <span className="tracking-widest ">{title}</span>
      {/* <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: ["100%", 0], transition: { duration: 2 } }}
        className={cn(
          "absolute  h-1 bg-primary-foreground bottom-0 opacity-45",
          progressBgClass
        )}
      ></motion.div> */}
    </div>
  );
};

export default SectionTitle;
