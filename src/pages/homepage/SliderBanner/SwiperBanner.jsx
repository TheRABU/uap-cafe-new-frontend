import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./styles.css";

// import required modules
import { Scrollbar } from "swiper/modules";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";
const SwiperBanner = () => {
  return (
    <div className="h-[750px] ">
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img4} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={img5} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img6} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperBanner;
