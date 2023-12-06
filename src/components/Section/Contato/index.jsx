import React from "react";
import Button from "../../Button";

export default function Contato() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex flex-col items-center gap-6 mb-8">
        <h1>Contato</h1>
        <div className="border-b-4 border-red-500 rounded w-96"></div>
      </div>
      <div className="flex flex-col w-96">
        <label htmlFor="">d</label>
        <input type="text" />
        <label htmlFor="">d</label>
        <input type="text" />
        <label htmlFor="">d</label>
        <input type="text" />
        <label htmlFor="">d</label>
        <input type="text" />
        <div className="flex justify-between mt-6">
          <span>t</span>
          <Button />
        </div>
      </div>
      <span>whatsaapp</span>
    </div>
  );
}
