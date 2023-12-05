import React from "react";

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
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center px-6">
            <h1 className="text-dark-green">11</h1>
            <h1 className="text-dark-green">Jun</h1>
          </div>
          <div>
            <h1 className="text-dark-green">fechados para reforma</h1>
            <h3 className="text-dark-green">horarios</h3>
          </div>
          <div>
            <button>Inscrever-se</button>
          </div>
        </div>
      </div>
    </div>
  );
}
