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
        <div className="flex flex-col mt-20 gap-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="font-bold text-3xl text-black-c">Apoie-nos</h1>
            <p className="text-black-c">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              recusandae illo temporibus libero molestias perferendis veritatis,
              eligendi reprehenderit. Ipsum est quia enim dolores adipisci
              officiis aspernatur eum perferendis temporibus quasi.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="max-w-max gap-4 flex flex-col items-center">
              <h1 className="uppercase text-2xl text-gray-500 font-semibold">
                código pix
              </h1>
              <span className="border-b-4 w-full border-gray-500"></span>
              <img
                src="https://www.qrcode-monkey.com"
                className="w-[400px] h-[400px] bg-black"
              ></img>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="uppercase text-2xl text-gray-500 font-semibold">
                Dados bancários
              </h1>
              <span className="border-b-4 w-full border-gray-500"></span>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-gray-400 font-medium capitalize">banco:</p>
                <p className="text-gray-500">Santander (001)</p>
                <p className="text-gray-400 font-medium capitalize">agencia:</p>
                <p className="text-gray-500">000-0</p>
                <p className="text-gray-400 font-medium capitalize">conta:</p>
                <p className="text-gray-500">00.000-0</p>
              </div>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate necessitatibus quam distinctio. Exercitationem est
                porro, itaque reiciendis aliquam ipsum ducimus laboriosam odio
                alias commodi nobis architecto modi voluptas incidunt quisquam.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 gap-4">
          <div className="flex-col flex gap-2 w-[600px] items-center">
            <h1 className="uppercase text-2xl text-gray-500 font-semibold">
              onde estamos
            </h1>
            <span className="border-b-4 w-full border-gray-500"></span>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.902465920463!2d-40.391171023957234!3d-20.34564755138783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83eb284cab25f%3A0x7d915a2474c48d!2sR.%20Adley%2C%2075%20-%20Morada%20de%20Santa%20F%C3%A9%2C%20Cariacica%20-%20ES%2C%2029143-719!5e0!3m2!1spt-BR!2sbr!4v1702296465711!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-gray-500">
            R. Adley, 75 - Morada de Santa Fé, Cariacica - ES, 29144-160
          </p>
        </div>
      </Header>
    </div>
  );
}
