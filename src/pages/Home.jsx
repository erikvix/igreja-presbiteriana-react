import React from "react";
import Section from "../components/Section";
import PrimeiraNews from "../components/Section/PrimeiraNews";
import QuemSomos from "../components/Section/QuemSomos";
import LocalEHorarios from "../components/Section/LocalEHorarios";
import Contato from "../components/Section/Contato";
import Carousel from "../components/Carousel";
export default function home() {
  return (
    <>
      <Carousel></Carousel>
      <div className="max-w-screen-xl mx-auto p-4">
        <Section />
        <PrimeiraNews />
        <QuemSomos />
        <LocalEHorarios />
        <Contato />
      </div>
    </>
  );
}
