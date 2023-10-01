import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/slider1.png";
import img3 from "../../../assets/slider2.png";
import img2 from "../../../assets/slider3.png";
import img4 from "../../../assets/slider4.png";
import img5 from "../../../assets/slider5.png";

const Carousal = () => {
  return (
    <Carousel className=" w-100 overflow-hidden">
      <div>
        <img src={img1} alt="Image 1" />
      </div>
      <div>
        <img src={img2} alt="Image 2" />
      </div>
      <div>
        <img src={img3} alt="Image 3" />
      </div>
      <div>
        <img src={img4} alt="Image 4" />
      </div>
      <div>
        <img src={img5} alt="Image 5" />
      </div>
    </Carousel>
  );
};

export default Carousal;
