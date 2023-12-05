import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../../assets/banner1.svg";
import "./Carousel.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const items = [
  {
    id: 1,
    url: banner,
  },
  {
    id: 2,
    url: "https://placehold.co/1500x400",
  },
  {
    id: 3,
    url: "https://placehold.co/1500x400",
  },
  {
    id: 4,
    url: "https://placehold.co/1500x400",
  },
];

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {items.map((item) => {
        return (
          <SwiperSlide>
            <img src={item.url} className="img-slide" alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
