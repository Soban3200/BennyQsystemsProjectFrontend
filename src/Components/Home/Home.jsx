import Hero from "../Hero/Hero";
import Carousel from "../Carousel/Carousel";
import image1 from "../../assets/cctv.png";
import image2 from "../../assets/Laptop.png";
import image3 from "../../assets/Pc.png";
import image4 from "../../assets/processor.png";
import image5 from "../../assets/hardisk.png";
import ProductSpotlight from "../ProductSpotlight/ProductSpotlight";

const Home = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div className="w-full overflow-hidden">
      <Carousel images={images} />
      <Hero />
      <ProductSpotlight />
    </div>
  );
};

export default Home;
