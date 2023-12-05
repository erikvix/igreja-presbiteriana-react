import React from "react";
import EventoBanner from "../EventoBanner";
import Header from "../Header";

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

export default function Section({ children }) {
  return (
    <Header title={"próximos eventos"} color="dark-red">
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
    </Header>
  );
}
{
}
