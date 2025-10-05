import Review from "../review/Review";
import Brand from "../Brand/Brand";
import Hero from "./Hero";
import OurServices from "../service/OurServices";
import SuccessStories from "../success/Success";
import Newsletter from "../Newsletter/Newsletter";
import Map from "../map/Map";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />;
      <Brand />
      <OurServices />
      <Review />
      <SuccessStories />
      <Contact />
      <Map />
      <Newsletter />
    </>
  );
};

export default Home;
