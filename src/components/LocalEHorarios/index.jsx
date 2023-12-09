import React from "react";
import img1 from "../../assets/image3.png";
import img2 from "../../assets/image23.png";
import img3 from "../../assets/image22.png";
import EventoBanner from "../EventoBanner";

const items = [
  {
    image: img1,
    date: "18:00 - 20:15",
    title: "Seg à sexta",
  },
  {
    image: img2,
    date: "10:30 - 20:00",
    title: "Domingo",
  },
  {
    image: img3,
    date: "18:00 - 21:30",
    title: "Escola biblíca",
  },
];

export default function LocalEHorarios() {
  return (
    <div class=" grid grid-cols-1 p-8 gap-20 lg:grid-cols-2 lg:gap-2">
      <div className="max-w-lg h-96 flex-col flex gap-8">
        <h1 className="text-dark-green text-3xl lg:text-4xl font-bold uppercase">
          Nosso podcast
        </h1>
        <img
          alt="Party"
          src="https://placehold.co/300x200"
          class="h-full w-full object-cover"
        />
      </div>
      <div className=" flex-col flex gap-8">
        <h2 class="text-3xl text-dark-green font-bold uppercase lg:text-4xl">
          default
        </h2>
        {items.map((item) => {
          return (
            <EventoBanner
              image={item.image}
              date={item.date}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}
