import React from "react";
import EventoBanner from "../EventoBanner";

const items = [
  {
    image: "https://placehold.co/190",
    date: "18:00 - 20:15",
    title: "FECHADOS PARA REFORMA",
    day: "11",
    month: "jun",
  },
  {
    image: "https://placehold.co/190",
    date: "20:00 - 21:30",
    title: "LIBERDADE",
    day: "3",
    month: "jul",
  },
  {
    image: "https://placehold.co/190",
    date: "20:00 - 21:00",
    title: "ESPERANÇA",
    day: "8",
    month: "out",
  },
];

export default function Eventos() {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex items-center gap-6 py-8">
        <h1 className="font-bold uppercase text-3xl text-dark-green px-0">
          Próximos Eventos
        </h1>
        <div className=" border-b-8 border-dark-red rounded w-96"></div>
      </div>
      <div className="flex flex-col gap-8">
        {items.map((item) => {
          return (
            <EventoBanner
              image={item.image}
              date={item.date}
              title={item.title}
              day={item.day}
              month={item.month}
            />
          );
        })}
      </div>
    </div>
  );
}
