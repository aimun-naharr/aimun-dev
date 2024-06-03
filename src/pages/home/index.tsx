import { InfiniteMovingCards } from "../../components/InfiniteMovingCards";
import Navbar from "../../components/layout/Navbar";
import Blog from "./Blog";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Work from "./Work";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Work />
      <Blog />
    </>
  );
};

export default HomePage;
