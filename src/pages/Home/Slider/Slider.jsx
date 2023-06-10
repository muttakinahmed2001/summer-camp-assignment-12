import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
 
import { Navigation } from "swiper";

import slider1 from '../../../assets/slider1.png'
import slider3 from '../../../assets/slider6.jpg'
import slider2 from '../../../assets/slider.png'
 
import slider4 from '../../../assets/slider4.png'
import slider5 from '../../../assets/slider5.png'


const Slider = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper mx-auto h-[800px] w-[1200px]">
        <SwiperSlide className="w-full"><img style={{height:'100%'}} src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide className="w-full"><img style={{height:'100%'}} src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide  ><img style={{height:'100%',width:'1200px'}} src={slider3} alt="" /></SwiperSlide>
        <SwiperSlide className="w-full  "><img style={{height:'100%'}} src={slider4} alt="" /></SwiperSlide>
        <SwiperSlide className="w-full  "><img style={{height:'100%'}} src={slider5} alt="" /></SwiperSlide>
       
        
      </Swiper>
    );
};

export default Slider;