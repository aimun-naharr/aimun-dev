import { InfiniteMovingCards } from "../../components/InfiniteMovingCards";
import Blog from "./Blog";
import HeroSection from "./HeroSection";
import Work from "./Work";

const HomePage = () => {
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
      <div className="h-20"></div>
      <HeroSection />
      <div className=" flex items-center justify-center">
        <InfiniteMovingCards>
          {techStacks.map((itm) => {
            return (
              <li
                className="text-2xl flex gap-2 items-center border px-4 py-1 rounded-full"
                key={itm}
              >
                <div className="size-6 rounded-full bg-primary-foreground"></div>
                <span>{itm}</span>
              </li>
            );
          })}
        </InfiniteMovingCards>
      </div>
      <Work />
      <Blog />
    </>
  );
};

export default HomePage;
