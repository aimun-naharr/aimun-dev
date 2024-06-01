import { BsArrowReturnRight } from "react-icons/bs";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-2 items-center ">
      <BsArrowReturnRight />
      <span className="tracking-widest font-mono">{title}</span>
    </div>
  );
};

export default SectionTitle;
