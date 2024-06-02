import Blog from "./Blog";
import HeroSection from "./HeroSection";
import Work from "./Work";

const HomePage = () => {
  return (
    <>
      {/* <div className="h-20"></div> */}
      <HeroSection />
      <Work />
      <Blog />
    </>
  );
};

export default HomePage;
