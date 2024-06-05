import { useRef } from "react";
import RevealText from "../RevealText";

const SectionTitle = ({
  title,
}: {
  title: string;
  progressBgClass?: string;
}) => {
  const ref = useRef(null);

  // motion
  return (
    <div
      className=" items-center text-[5vw]  relative overflow-hidden tracking-tight font-bold"
      ref={ref}
    >
      <RevealText word={title} animationType="whileInView" />
    </div>
  );
};

export default SectionTitle;
