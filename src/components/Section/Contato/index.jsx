import React from "react";
import Button from "../../Button";

export default function Contato() {
  return (
    <div className="flex justify-center flex-col items-center bg-neutral-200 py-10">
      <div className="flex flex-col items-center gap-6 mb-8">
        <h1 className="font-bold uppercase text-3xl text-dark-green">
          Contato
        </h1>
        <div className="border-b-4 border-dark-red rounded w-[1000px]"></div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Assunto:</label>
        <input type="text" />
        <label htmlFor="">E-mail:</label>
        <input type="text" />
        <label htmlFor="">Telefone (Opcional):</label>
        <input type="text" />
        <label htmlFor="">Mensagem:</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div className="flex justify-between mt-6">
          <span className="text-xs text-black-c">
            Encaminhado para o e-mail pastor.romulo@primeiraipcg.exemplo.com
          </span>
          <Button>Enviar</Button>
        </div>
      </div>
      <a href="">Clique para falar com +55 27 99514-2114 no WhatsApp</a>
    </div>
  );
}
