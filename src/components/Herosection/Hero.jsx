import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../../assets/heroimg/banner1.jpg";

const Hero = () => {
  return (
    <section className="w-full" style={{ height: "calc(100vh - 80px)" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* SwiperSlides for images */}
        <SwiperSlide>
          <img
            src={banner1}
            className="w-full h-[90vh] object-cover"
            alt="Banner 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-[90vh] object-cover"
            alt="Banner 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1678025061402-19aa0eea38b4?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-[90vh] object-cover"
            alt="Banner 3"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
