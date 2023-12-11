import React from "react";
import img1 from "../assets/image62.png";
import Card from "../components/Card";
import img2 from "../assets/image63.png";
import img3 from "../assets/image56.png";
import img4 from "../assets/image43.png";
import img5 from "../assets/image54.png";
import img6 from "../assets/image53.png";
import img7 from "../assets/image52.png";
import img8 from "../assets/image75.png";
import Header from "../components/Header";
import SectionSplit from "../components/SectionSplit";

const sectionItems = [
  {
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Floresta Viva: Semeando o Futuro Verde",
    subtitle: "Projeto em andamento",
    order: "first",
    colorTitle: "dark-green",
    desc: "O projeto Floresta Viva visa revitalizar ecossistemas e combater as mudanças climáticas através do plantio estratégico de árvores. Nossa missão é criar uma comunidade comprometida com a sustentabilidade, convidando voluntários a se juntarem a nós na plantação de mudas em áreas previamente identificadas. Ao unir esforços, estamos construindo juntos um futuro mais verde e saudável para as gerações vindouras. Participe do movimento, conecte-se com a natureza e faça parte da transformação positiva!",
  },
  {
    src: "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Comunidade Solidária: Unindo Corações, Servindo Vidas",
    subtitle: "Projeto em andamento",
    order: "last",
    colorTitle: "dark-green",
    desc: "O projeto Comunidade Solidária é uma iniciativa da nossa igreja voltada para estender mãos amigas àqueles que mais precisam. Nossa missão é promover o amor ao próximo através de ações concretas, como distribuição de alimentos, roupas e apoio emocional. Buscamos criar uma rede de solidariedade, onde cada membro da comunidade pode contribuir para melhorar a qualidade de vida dos menos favorecidos. Junte-se a nós nessa jornada de compaixão e serviço, e vamos fazer a diferença juntos!",
  },
  {
    src: img8,
    title: "Lutando com Fé: Fortalecendo Vidas Além do Tatame",
    subtitle: "Projeto Concluído",
    order: "first",
    colorTitle: "dark-green",
    colorSubTitle: "light-green",
    desc: "A Primeira Igreja Presbiteriana de Campo Grande abraça a paixão e a dedicação dos fiéis que praticam Jiu-Jitsu, reconhecendo os desafios que enfrentam para participar de competições. Nosso projeto visa apoiar esses atletas, tanto espiritual quanto financeiramente, proporcionando uma plataforma para arrecadação de fundos e incentivando a comunidade a contribuir. Juntos, estamos construindo mais do que habilidades no tatame - estamos construindo laços e fortalecendo vidas com fé e determinação",
  },
  {
    src: "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?q=80&w=2145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lar Digno: Construindo Esperança para os Sem-Teto",
    subtitle: "Projeto em andamento",
    order: "last",
    colorTitle: "dark-green",
    colorSubTitle: "light-green",
    desc: "A Primeira Igreja Presbiteriana de Campo Grande está comprometida em fazer a diferença na vida daqueles que não têm um lar. Nosso projeto Lar Digno visa construir casas simples, porém seguras, para moradores de rua. Com a participação ativa da comunidade e o apoio de voluntários, estamos transformando vidas ao proporcionar um ambiente estável e digno para aqueles que mais necessitam. Junte-se a nós nesta jornada de compaixão e construção de um futuro mais promissor para todos.",
  },
];

const items = [
  {
    title: "ministério infantil",
    desc: "O Ministério Infantil é responsável pelas crianças de 0 à 11 anos ... Inclui escola bíblica, teatro e recreações ... Entre em contato com as nossas professoras durante os cultos",
    src: img3,
  },
  {
    title: "ministério adolescente",
    desc: "O Ministério Adolescente busca integrar os jovens de 11 à 17 anos em encontros sociais ... busca formar lideranças dentre os próprios jovens com o apoio direto dos pastores ... Para mais detalhes entre em contato com algum membro da igrej",
    src: img4,
  },
  {
    title: "ministério jovem",
    desc: "O Ministério Jovem compreende grupo de jovens de 17 à 28 anos ... É indicado para ... Venha participar também dos encontros ... Encontros semanais todas as sextas-feiras ... Para mais detalhes entre em contato com algum membro da igreja",
    src: img5,
  },
  {
    title: "ministério do homem",
    desc: "O Ministério dos Homens busca integrar os homens da igreja ... Para mais detalhes entre em contato com algum membro da igreja",
    src: img6,
  },
  {
    title: "ministério da mulher",
    desc: "O Ministério da Mulher busca integrar as mulheres da igreja ... Para mais detalhes entre em contato com algum membro da igreja",
    src: img7,
  },
];

export default function QuemSomos() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center">
        <div className="flex-col flex gap-2 w-[600px] items-center mt-10">
          <h1 className="uppercase text-2xl text-gray-500 font-semibold">
            Nossos pastores
          </h1>
          <span className="border-b-4 w-full border-gray-500"></span>
        </div>
        <div className="flex mt-10 shadow-xl">
          <div className="bg-dark-red  w-[170px] h-[170px] rounded-full -translate-y-1 -translate-x-2/4 z-10 absolute">
            <img src={img1} alt="" />
          </div>
          <div className="bg-light-gray w-full p-8 flex flex-col gap-4 pl-[7rem] z-0">
            <h1 className="text-4xl text-black-c">Rômulo Barcellos</h1>
            <p className="text-black-c">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              laudantium, quo natus nobis nihil eveniet libero, saepe vitae
              labore harum ad dignissimos odit possimus vel nulla sapiente? Ab,
              ex reiciendis?
            </p>
          </div>
        </div>
        <div className="flex mt-10 shadow-xl">
          <div className="bg-dark-red  w-[170px] h-[170px] rounded-full -translate-x-2/4 z-10 absolute">
            <img src={img2} alt="" />
          </div>
          <div className="bg-light-gray w-full p-8 flex flex-col gap-4 pl-[7rem] z-0">
            <h1 className="text-4xl text-black-c">Daniel Mendonça</h1>
            <p className="text-black-c">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              laudantium, quo natus nobis nihil eveniet libero, saepe vitae
              labore harum ad dignissimos odit possimus vel nulla sapiente? Ab,
              ex reiciendis?
            </p>
          </div>
        </div>
      </div>
      <Header title={"Ministérios"} color="dark-red">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) => {
            return <Card title={item.title} src={item.src} desc={item.desc} />;
          })}
        </div>
      </Header>
      <Header title={"Projetos futuros"} color="light-green">
        {sectionItems.map((item) => {
          return (
            <div className="my-10">
              <SectionSplit
                src={item.src}
                title={item.title}
                subTitle={item.subtitle}
                order={item.order}
                desc={item.desc}
                colorTitle={item.colorTitle}
                colorSubTitle={item.colorSubTitle}
              />
            </div>
          );
        })}
      </Header>
    </div>
  );
}
