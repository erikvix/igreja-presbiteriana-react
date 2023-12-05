import React from "react";
import Header from "../../Header";
import Button from "../../Button";

export default function PrimeiraNews() {
  return (
    <div>
      <Header title={"primeira news"} color="dark-red" />
      <div className="flex justify-center items-center mt-10 mb-10 gap-8">
        <div className="flex flex-col items-center bg-white-beige shadow-xl">
          <img src="https://placehold.co/300" alt="" />
          <div className="h-12 flex justify-center items-center">
            <p className="text-dark-green font-medium">desc</p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white-beige shadow-xl">
          <img src="https://placehold.co/300" alt="" />
          <div className="h-12 flex justify-center items-center">
            <p className="text-dark-green font-medium">desc</p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white-beige shadow-xl">
          <img src="https://placehold.co/300" alt="" />
          <div className="h-12 flex justify-center items-center">
            <p className="text-dark-green font-medium">desc</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button>Saiba mais</Button>
      </div>
    </div>
  );
}
