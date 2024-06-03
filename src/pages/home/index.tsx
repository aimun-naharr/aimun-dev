import { InfiniteMovingCards } from "../../components/InfiniteMovingCards";
import Blog from "./Blog";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Work from "./Work";

const HomePage = () => {
  return (
    <>
      <div className="h-20 z-10"></div>
      <HeroSection />

      <Work />
      <Blog />
    </>
  );
};

export default HomePage;
