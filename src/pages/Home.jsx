import React from "react";
import img1 from "../assets/igreja1.png";
import img2 from "../assets/igreja2.png";
import img3 from "../assets/igreja3.png";
import img4 from "../assets/image49.png";
import Section from "../components/Section";
import LocalEHorarios from "../components/LocalEHorarios";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Card from "../components/Card";
import SectionSplit from "../components/SectionSplit";

const items = [
  {
    title: "Celebração dos 145 Anos da Igreja Presbiteriana de Mogi Mirim",
    desc: "Reviva os momentos emocionantes da comemoração do aniversário da nossa querida igreja, marcados por fé, história e união.",
    src: img1,
  },
  {
    title: "Presbiterianismo: Uma Jornada de Fé",
    desc: "Descubra mais sobre os princípios fundamentais do presbiterianismo e como eles moldaram a identidade da nossa comunidade ao longo dos anos.",
    src: img2,
  },
  {
    title: "A História da Igreja Presbiteriana no Brasil",
    desc: "Explore as origens da presença presbiteriana em solo brasileiro, revelando as raízes que se entrelaçam com a história do país.",
    src: img3,
  },
];

export default function home() {
  return (
    <>
      <Carousel></Carousel>
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-20">
        <Section />
        <Header title={"Primeira News"} color="dark-red">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item) => {
              return (
                <Card title={item.title} src={item.src} desc={item.desc} />
              );
            })}
          </div>
        </Header>
        <SectionSplit
          src={img4}
          title="quem somos?"
          subTitle="primeira igreja presbiteriana de campo grande"
          order="last"
        />
        <LocalEHorarios />
        <div className="my-12"></div>
      </div>
    </>
  );
}
