import React from "react";
import banner from "../assets/img-backgroud.svg";
import img1 from "../assets/image66.png";
import img2 from "../assets/image77.png";
import img3 from "../assets/image61.png";
import img4 from "../assets/image90.png";
import Button from "../components/Button";
import Header from "../components/Header";
import Card from "../components/Card";
import SectionSplit from "../components/SectionSplit";

const items = [
  {
    title: "Celebração dos 145 Anos da Igreja Presbiteriana de Mogi Mirim",
    desc: "Reviva os momentos emocionantes da comemoração do aniversário da nossa querida igreja, marcados por fé, história e união.",
    src: "https://source.unsplash.com/giYJYF3EShY/800x600",
  },
  {
    title: "Presbiterianismo: Uma Jornada de Fé",
    desc: "Descubra mais sobre os princípios fundamentais do presbiterianismo e como eles moldaram a identidade da nossa comunidade ao longo dos anos.",
    src: "https://source.unsplash.com/vaRcBq2aXHs/800x600",
  },
  {
    title: "A História da Igreja Presbiteriana no Brasil",
    desc: "Explore as origens da presença presbiteriana em solo brasileiro, revelando as raízes que se entrelaçam com a história do país.",
    src: "https://source.unsplash.com/Y2SErcMNSoM/800x600",
  },
  {
    title: "Crenças Fundamentais: O Que Pregamos",
    desc: "Conheça as crenças essenciais que orientam nossa prática religiosa e dão forma à nossa comunidade de fé.",
    src: "https://source.unsplash.com/Gs2b0d5qUXE/800x600",
  },
  {
    title: "Tradições e Valores: O Que Valorizamos",
    desc: "Explore os costumes que enriquecem nossa comunidade presbiteriana e os valores que consideramos fundamentais para a nossa fé.",
    src: "https://source.unsplash.com/qCQ25A5Wu18/800x600",
  },
  {
    title: "Evento Especial: Encontro de Comunidade",
    desc: "Relembre os momentos únicos do nosso evento especial, onde a comunidade se reuniu para celebrar a fé e a união.",
    src: "https://source.unsplash.com/V2JKX4cAqD4/800x600",
  },
  {
    title: "Atividades Comunitárias: Engajamento e Serviço",
    desc: "Saiba mais sobre as atividades que promovemos para o engajamento comunitário e nosso compromisso com o serviço ao próximo.",
    src: "https://source.unsplash.com/cbLEz4gVnUg/800x600",
  },
  {
    title: "Educação Religiosa: Cultivando Conhecimento",
    desc: "Explore nossos programas de educação religiosa, dedicados a cultivar o conhecimento e fortalecer a compreensão espiritual.",
    src: "https://source.unsplash.com/uhIEpyP2Oyw/800x600",
  },
  {
    title: "Momentos de Oração: Fortalecendo a Comunidade",
    desc: "Participe dos momentos significativos de oração que fortalecem nossa comunidade, promovendo a espiritualidade e a solidariedade.",
    src: "https://source.unsplash.com/rBd-iSbXsP4/800x600",
  },
];

const itemsSection = [
  {
    src: img1,
    title: "PRESBITERIANISMO",
    subTitle: "O QUE É?",
  },
  {
    src: img2,
    title: "IGREJA PRESBITERIANA NO BRASIL",
    subTitle: "COMO SURGIU?",
  },
  {
    src: img3,
    title: "CRENÇA",
    subTitle: "O QUE PREGAMOS?",
  },
  {
    src: img4,
    title: "COSTUME",
    subTitle: "O QUE VALORIZAMOS?",
  },
];

export default function Igreja() {
  return (
    <div>
      <div className="object-cover">
        <img src={banner} alt="" className="w-full" />
      </div>
      <div className="max-w-screen-xl mx-auto p-4">
        <section>
          <div class="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <SectionSplit />
          </div>
          <div class="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt="Party"
                  src={img2}
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div class="lg:py-24">
                <h2 class="text-2xl text-dark-red font-bold uppercase sm:text-3xl">
                  Igreja presbiteriana no brasil
                </h2>
                <span className="text-[#612419] uppercase font-bold">
                  Como surgiu?
                </span>

                <p class="mt-4 text-black-c">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>
                <Button className={"mt-8 inline-block"}>Saiba mais</Button>
              </div>
            </div>
          </div>
          <div class=" mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
                <img
                  alt="Party"
                  src={img4}
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div class="lg:py-24">
                <h2 class="text-2xl font-bold text-dark-green uppercase sm:text-3xl">
                  Crença
                </h2>
                <span className="text-light-green uppercase font-bold">
                  O que pregamos?
                </span>

                <p class="mt-4 text-black-c">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>
                <Button className={"mt-8 inline-block"}>Saiba mais</Button>
              </div>
            </div>
          </div>
          <div class=" mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt="Party"
                  src={img3}
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div class="lg:py-24">
                <h2 class="text-2xl text-dark-green font-bold uppercase sm:text-3xl">
                  Costume
                </h2>
                <span className="text-light-green uppercase font-bold">
                  O que valorizamos?
                </span>

                <p class="mt-4 text-black-c">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>
                <Button className={"mt-8 inline-block"}>Saiba mais</Button>
              </div>
            </div>
          </div>
        </section>
        <Header title={"primeira news"} color="light-green">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item) => {
              return (
                <Card title={item.title} desc={item.desc} src={item.src} />
              );
            })}
          </div>
        </Header>
      </div>
    </div>
  );
}
