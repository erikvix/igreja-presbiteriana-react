import React from "react";
import Button from "../Button";

export default function Eventos() {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center gap-4 py-8">
        <h1 className="font-bold uppercase text-4xl text-dark-green">
          Próximos eventos
        </h1>
        <div className=" border-b-8 border-dark-red w-96 rounded"></div>
      </div>
      <div className="bg-light-gray flex shadow-xl">
        <div>
          <img src="https://placehold.co/200x200" alt="" />
        </div>
        <div className="flex items-center justify-between  w-full">
          <div className="flex flex-col items-center px-6">
            <h1 className="text-dark-green font-bold uppercase">11</h1>
            <h1 className="text-dark-green font-bold uppercase">Jun</h1>
          </div>
          <div>
            <h1 className="text-dark-green font-bold uppercase">
              fechados para reforma
            </h1>
            <h3 className="text-dark-green">horarios</h3>
          </div>
          <div className="px-6">
            <Button>Inscrever-se</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
