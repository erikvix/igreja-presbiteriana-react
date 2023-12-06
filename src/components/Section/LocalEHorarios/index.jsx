import React from "react";
import EventoBanner from "../../EventoBanner";

const items = [
  {
    image: "https://placehold.co/190",
    date: "18:00 - 20:15",
    title: "Seg à sexta",
  },
  {
    image: "https://placehold.co/190",
    date: "10:30 - 20:00",
    title: "Domingo",
  },
  {
    image: "https://placehold.co/190",
    date: "18:00 - 21:30",
    title: "Escola biblíca",
  },
];

export default function LocalEHorarios() {
  return (
    <div className="bg-dark-green">
      <div className="flex items-baseline justify-between py-8 px-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold uppercase ">Nosso Podcast</h1>
          {/* <video
            src="https://www.youtube.com/watch?v=NpEaa2P7qZI"
            autoPlay
            loop
            muted
          ></video> */}
          <img src="https://placehold.co/600x350" alt="" />
        </div>
        <div className="max-w-2xl flex flex-col gap-6">
          <h1 className="font-bold uppercase">Local e horários</h1>
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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nam
            magni quibusdam neque laudantium veniam maxime autem adipisci
            quaerat repudiandae amet commodi corporis sapiente modi voluptates,
            ratione, accusantium quidem accusamus!
          </p>
        </div>
      </div>
    </div>
  );
}
