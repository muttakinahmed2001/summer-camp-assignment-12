
import "react-responsive-carousel/lib/styles/carousel.min.css";  
import { Carousel } from 'react-responsive-carousel';


import img1 from '../../../assets/slider1.png'
import img3 from '../../../assets/slider6.jpg'
import img2 from '../../../assets/slider.png'
 
import img4 from '../../../assets/slider4.png'
import img5 from '../../../assets/slider5.png'


const Carousal = () => {
    return (
      <Carousel>
      <div>
          <img src={img1} />
          
      </div>
      <div>
          <img src={img2} />
          
      </div>
      <div>
          <img src={img3} />
          
      </div>
      <div>
          <img src={img4} />
          
      </div>
      <div>
          <img src={img5} />
          
      </div>
      
  </Carousel>
    );
};

export default Carousal;