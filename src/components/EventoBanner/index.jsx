import React from "react";
import Button from "../Button";

export default function EventoBanner({ image, date, title, day, month }) {
  return (
    <div className="bg-light-gray flex shadow-xl">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="flex items-center w-full basis-1/1">
        <div className="flex flex-col items-center px-8">
          <h1 className="text-2xl text-dark-green font-bold uppercase">
            {day}
          </h1>
          <h1 className="text-2xl text-dark-green font-bold uppercase">
            {month}
          </h1>
        </div>
        <div className="flex flex-col basis-2/3">
          <h1 className="text-2xl text-dark-green font-bold uppercase">
            {title}
          </h1>
          <h3 className="text-dark-green font-medium">{date}</h3>
        </div>
        <div className="basis-1/4 flex justify-center">
          <Button>Inscrever-se</Button>
        </div>
      </div>
    </div>
  );
}
