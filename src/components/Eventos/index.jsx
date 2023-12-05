import React from "react";
import Button from "../Button";

export default function Eventos() {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex items-center gap-6 py-8">
        <h1 className="font-bold uppercase text-3xl text-dark-green px-0">
          Próximos Eventos
        </h1>
        <div className=" border-b-8 border-dark-red rounded w-96"></div>
      </div>
      <div className="bg-light-gray flex shadow-xl">
        <div>
          <img src="https://placehold.co/200x200" alt="" />
        </div>
        <div className="flex items-center w-full basis-1/1">
          <div className="flex flex-col items-center px-8">
            <h1 className="text-2xl text-dark-green font-bold uppercase">11</h1>
            <h1 className="text-2xl text-dark-green font-bold uppercase">
              Jun
            </h1>
          </div>
          <div className="flex flex-col basis-2/3">
            <h1 className="text-2xl text-dark-green font-bold uppercase">
              fechados para reforma
            </h1>
            <h3 className="text-dark-green font-medium">12:00 - 20:00</h3>
          </div>
          <div className="basis-1/4 flex justify-center">
            <Button>Inscrever-se</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
