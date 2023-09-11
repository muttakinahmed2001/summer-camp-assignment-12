import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/slider1.png";
import img3 from "../../../assets/slider6.jpg";
import img2 from "../../../assets/slider.png";
import img4 from "../../../assets/slider4.png";
import img5 from "../../../assets/slider5.png";

const Carousal = () => {
  return (
    <Carousel className="max-h-[500px] overflow-hidden">
      <div className="h-[500px]">
        <img src={img1} alt="Image 1" className="object-fill h-full w-full" />
      </div>
      <div className="h-[500px]">
        <img src={img2} alt="Image 2" className="object-fill h-full w-full" />
      </div>
      <div className="h-[500px]">
        <img src={img3} alt="Image 3" className="object-fill h-full w-full" />
      </div>
      <div className="h-[500px]">
        <img src={img4} alt="Image 4" className="object-fill h-full w-full" />
      </div>
      <div className="h-[500px]">
        <img src={img5} alt="Image 5" className="object-fill h-full w-full" />
      </div>
    </Carousel>
  );
};

export default Carousal;
