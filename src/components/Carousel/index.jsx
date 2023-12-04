import React, { useState } from "react";
import CarouselItem from "../CarouselItem";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const items = [
    {
      imgUrl: "https://placehold.co/1920x400/png",
    },
  ];
  return (
    <div className="carousel-container">
      {items.map((item) => {
        return (
          <div>
            <CarouselItem items={item.imgUrl} />
          </div>
        );
      })}
    </div>
  );
}
