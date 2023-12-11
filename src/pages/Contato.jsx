import React from "react";
import ContatoForm from "../components/ContatoForm";
import Header from "../components/Header";

export default function Contato() {
  return (
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <ContatoForm />
      <Header title={"Perguntas frequentes"} color="dark-red">
        <div className="flex flex-col gap-4 mb-20">
          <span className="text-gray-500 font-bold">Posso ir de bermuda?</span>
          <div className="border-b-2 border-gray-400"></div>
          <span className="text-gray-500 mt-4">
            Claro que pode, na nossa igreja não regras estritas quanto ao uso de
            roupas, pode ir de bermuda e chinelo, do jeito que se sentir mais
            confortável. Resposta apenas para exemplificar o tema. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Phasellus ex nisl,
            gravida sed dolor quis, maximus tempor mi. Sed vel quam molestie,
            facilisis justo ac, sollicitudin massa.
          </span>
        </div>
        <div className="flex flex-col gap-4 mb-20">
          <span className="text-gray-500 font-bold border-2 text-right">
            Posso ir no culto sem ser convidado?
          </span>
          <div className="border-b-2 border-gray-400"></div>
          <span className="text-gray-500 mt-4">
            Você é mais do que bem vindo para conhecer a nossa igreja, é uma
            honra recebê-lo em nosso templo, mesmo que não tenha sido convidado
            algo te atriu aqui. Resposta apenas para exemplificar o tema. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex
            nisl, gravida sed dolor quis, maximus tempor mi. Sed vel quam
            molestie, facilisis justo ac, sollicitudin massa.
          </span>
        </div>
        <div className="flex flex-col gap-4 mb-20">
          <span className="text-gray-500 font-bold">
            Como faço para participar das campanhas?
          </span>
          <div className="border-b-2 border-gray-400"></div>
          <span className="text-gray-500 mt-4">
            Você pode entrar em contato com um de nossos pastores através do
            whatsapp ou ao final dos cultos. Resposta apenas para exemplificar o
            tema. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus ex nisl, gravida sed dolor quis, maximus tempor mi. Sed
            vel quam molestie, facilisis justo ac, sollicitudin massa.
          </span>
        </div>
        <div className="flex flex-col gap-4 mb-20">
          <span className="text-gray-500 font-bold border-2 text-right">
            Tem espaço para crianças?
          </span>
          <div className="border-b-2 border-gray-400"></div>
          <span className="text-gray-500 mt-4">
            Temos sim, as professoras do Ministério Infantil estão sempre lá
            para acolher as crianças. Resposta apenas para exemplificar o tema.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ex nisl, gravida sed dolor quis, maximus tempor mi. Sed vel quam
            molestie, facilisis justo ac, sollicitudin massa.
          </span>
        </div>
        <span className="text-center bg-dark-green p-2 font-bold text-xl">
          Tem mais alguma dúvida? Entre em contato conosco!
        </span>
      </Header>
    </div>
  );
}
